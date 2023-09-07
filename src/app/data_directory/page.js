"use client";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import style from "./data_dir.module.scss";
import banner from "@/image/data_directory.banner.webp";
import Dir from "./components/leftDir";
import RightPanel from "./components/right";
import Card from "./components/right/card";
import { useDirList } from "./service";
import { Pagination } from "antd";
import { useImmer } from "use-immer";

export default function DataDirectoryList() {
  const router = useRouter();

  const [query, setQuery] = useImmer({
    pageNum: 1,
    pageSize: 10,
    keyword: "",
  });
  const { pageNum: current, pageSize } = query;

  const [dirList] = useDirList();

  const handlePageChange = (page, pageSize) => {
    setQuery((draft) => {
      draft.pageNum = page;
      draft.pageSize = pageSize;
    });
  };
  const handleKeywordChange = (keyword) => {
    setQuery((draft) => {
      draft.keyword = keyword;
    });
  };
  const handleViewDir = (dirId) => {
    router.push(`/data_directory/${dirId}`);
  };
  return (
    <div className={style.container}>
      <div className={style.imgWrap}>
        <Image
          className="hover-img"
          alt="数据目录banner"
          fill={true}
          objectFit="cover"
          src={banner}
        ></Image>
        <div className={style.name}>数据目录</div>
      </div>
      <div className={style.main}>
        <div className={style.left}>
          <Dir />
        </div>
        <div className={style.right}>
          <RightPanel onKeywordChange={handleKeywordChange}>
            {dirList.length < 0 ? (
              <></>
            ) : (
              dirList.map((item) => {
                return (
                  <Card onClick={handleViewDir} {...item} key={item.id}></Card>
                );
              })
            )}
          </RightPanel>
          <div className={style.pageWrap}>
            <Pagination
              total={dirList.length}
              current={current}
              pageSize={pageSize}
              showQuickJumper={true}
              showSizeChanger={true}
              onChange={handlePageChange}
              showTotal={(t) => `共 ${t} 条`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
