"use client";
import { Input, Tag } from "antd";
import { useSearchParams } from "next/navigation";
import style from "./index.module.scss";
import SearchPanel from "./components/search.panel";
import Product from "./components/product";
const { Search } = Input;

let id = 0;

const productList = [];
const count = 10;
while (count > id) {
  productList.push({
    id: id++,
    type: "数据集",
    title: "高效一网通办",
    content:
      "构建统一“查、办、评、管、报”一网办事平台，让师生可以基于统一的平台查事项、办事项、评事项、管事项、报...",
    biz: "教育",
    count: "2,999",
    price: 1999,
    unit: "元/年",
  });
}

export default function DataProductList({ onSearch }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("viewType") || "card";
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.wrap}>
          <Search
            placeholder="请输入关键字"
            onSearch={onSearch}
            enterButton
            className={style.search}
          />
          <Tag>大数据</Tag>
          <Tag>财务</Tag>
          <Tag>销售</Tag>
        </div>
      </div>
      <div className={style.main}>
        <SearchPanel></SearchPanel>
      </div>

      <div className={[type === "card" ? style.cardCon : style.listCon]}>
        {productList.map((item) => {
          return <Product key={item.id} {...item}></Product>;
        })}
      </div>
    </div>
  );
}
