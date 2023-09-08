"use client";
import style from "./sort.panel.module.scss";
import Image from "next/image";
import Link from "next/link";
import { genSortHref, genSortIconSrc, useNavigation } from "@/util";

export default function SortPanel({ list = [], children }) {
  const { searchParams, pathname } = useNavigation();

  return (
    <div className={style.searchBox}>
      <div className={style.left}>
        <div className={style.label}>综合排序</div>
        {list.map((item) => (
          <Link
            key={item.dataIndex}
            className={[
              style.sortBtn,
              item.dataIndex === searchParams.get("sort") && style.active,
            ].join(" ")}
            href={genSortHref({
              searchParams,
              pathname,
              dataIndex: item.dataIndex,
            })}
          >
            {item.title}

            <Image
              className={style.icon}
              width={6}
              height={10}
              src={genSortIconSrc({ searchParams, dataIndex: item.dataIndex })}
              alt="排序"
            ></Image>
          </Link>
        ))}
      </div>
      <div className={style.right}>{children}</div>
    </div>
  );
}
