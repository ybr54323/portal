import { usePathname, useSearchParams } from "next/navigation";
import iconSort from "@/image/sort.webp";
import iconSortUp from "@/image/sort_up.webp";
import iconSortDown from "@/image/sort_down.webp";
import { useRouter } from "next/navigation";
const ASC = "asc";
const DESC = "desc";

const useNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  return {
    pathname,
    router,
    searchParams,
  };
};
// 在原path上添加query
const handleUpdateQuery = ({ pathname, searchParams, router, key, val }) => {
  const query = new URLSearchParams(searchParams);
  query.set(key, val);
  router.push(`${pathname}?${query.toString()}`);
};

// 生成kv对的href
const genKeyValueHref = ({ pathname, searchParams, key, value }) => {
  const nextQuery = new URLSearchParams(searchParams);
  nextQuery.set(key, value);
  const href = pathname + "?" + nextQuery.toString();
  return href;
};

// 生成排序的href
const genSortHref = ({ pathname, searchParams, dataIndex }) => {
  const currentSort = searchParams.get("sort");
  const nextQuery = new URLSearchParams(searchParams);
  // 换了sort类型, 或者还没sort过
  if (currentSort === null || currentSort !== dataIndex) {
    nextQuery.set("sort", dataIndex);
    nextQuery.set("order", ASC);
    const href = pathname + "?" + nextQuery.toString();
    return href;
  }

  const currentOrder = searchParams.get("order");
  switch (currentOrder) {
    case ASC:
      nextQuery.set("sort", dataIndex);
      nextQuery.set("order", DESC);
      break;
    case DESC:
      nextQuery.delete("sort");
      nextQuery.delete("order");
  }

  const href = pathname + "?" + nextQuery.toString();
  return href;
};
const genSortIconSrc = ({ searchParams, dataIndex }) => {
  const sort = searchParams.get("sort");
  if (sort !== dataIndex) return iconSort;
  const order = searchParams.get("order");
  return order === ASC ? iconSortUp : order === DESC ? iconSortDown : iconSort;
};
export {
  genKeyValueHref,
  genSortHref,
  genSortIconSrc,
  useNavigation,
  handleUpdateQuery,
};
