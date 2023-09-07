"use client";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { genHref, genImgSrc } from "@/util";
import { useSearchParams } from "next/navigation";

const { Search } = Input;

export default function RightPanel({
  children,
  onKeywordChange,
}) {
  const searchParams = useSearchParams();
  const sortList = [
    {
      dataIndex: "count",
      title: "浏览次数",
    },
    {
      dataIndex: "date",
      title: "更新时间",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.searchBox}>
        <div className={style.left}>
          <div className={style.label}>综合排序</div>
          {sortList.map((item) => (
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
          <Search
            allowClear
            placeholder="请输入关键字"
            onSearch={onKeywordChange}
            enterButton
          />
        </div>
      </div>

      <div className={style.cardCon}>{children}</div>
    </div>
  );
}
