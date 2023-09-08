"use client";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Input } from "antd";
import { useNavigation } from "@/util";
import SortPanel from "@/components/SortPanel";

const { Search } = Input;

export default function RightPanel({ children, onKeywordChange }) {
  const { searchParams } = useNavigation();
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
      <SortPanel list={sortList}>
        <Search
          allowClear
          placeholder="请输入关键字"
          onSearch={onKeywordChange}
          enterButton
          defaultValue={searchParams.get("keyword") || ""}
        />
      </SortPanel>

      <div className={style.cardCon}>{children}</div>
    </div>
  );
}
