"use client";
import style from "./sort.panel.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "antd";

import { genHref, genImgSrc } from "@/util";
const { Search } = Input;

export default function SortPanel({
  list = [],
  children,
  onKeywordChange = () => {},
}) {
  const searchParams = useSearchParams();

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
            href={genHref(item)}
          >
            {item.title}

            <Image
              className={style.icon}
              width={6}
              height={10}
              src={genImgSrc(item)}
              alt="排序"
            ></Image>
          </Link>
        ))}
      </div>
      <div className={style.right}>
        {children}
        {/* {children && children.length ? (
          { children }
        ) : (
          <Search
            allowClear
            placeholder="请输入关键字"
            onSearch={onKeywordChange}
            enterButton
          />
        )} */}
      </div>
    </div>
  );
}
