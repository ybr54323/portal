"use client";

import style from "./search.panel.module.scss";
import { Divider } from "antd";
import Link from "next/link";
import Image from "next/image";
import { bizList, goodList } from "./service";
import SortPanel from "@/components/sort.panel";
import { genKeyValueHref, handleUpdateQuery, useNavigation } from "@/util";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import iconCard from "@/image/card.webp";
import iconList from "@/image/list.webp";

export default function SearchPanel() {
  const { router, pathname, searchParams } = useNavigation();
  const sortList = [
    { title: "上架时间", dataIndex: "time" },
    { title: "热度", dataIndex: "hot" },
  ];
  const onChange = (key, date, dateString) => {
    const nextQuery = new URLSearchParams(searchParams);
    nextQuery.set(key, dateString);
    router.push(pathname + "?" + nextQuery.toString());
  };
  const handleUpdateBiz = (type) => {
    handleUpdateQuery({
      router,
      pathname,
      searchParams,
      key: "biz",
      val: type,
    });
  };
  const handleUpdateGoodCategory = (category) => {
    handleUpdateQuery({
      router,
      pathname,
      searchParams,
      key: "good",
      val: category,
    });
  };

  let currentStart, currentEnd;
  currentStart =
    (currentStart = searchParams.get("start")) && dayjs(currentStart);
  currentEnd = (currentEnd = searchParams.get("end")) && dayjs(currentEnd);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.row}>
          <div className={style.key}>行业分类</div>
          {bizList.map((item) => {
            return (
              <div
                className={[
                  style.value,
                  searchParams.get("biz") === item.type && style.active,
                ].join(" ")}
                key={item.type}
                onClick={handleUpdateBiz.bind(null, item.type)}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <Divider className={style.divider}></Divider>
        <div className={style.row}>
          <div className={style.key}>商品类型</div>
          {goodList.map((item) => {
            return (
              <div
                className={[
                  style.value,
                  searchParams.get("good") === item.type && style.active,
                ].join(" ")}
                key={item.type}
                onClick={handleUpdateGoodCategory.bind(null, item.type)}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <Divider className={style.divider}></Divider>
        <div className={style.row}>
          <div className={style.key}>更新时间</div>
          <div className={style.value}>
            <DatePicker
              defaultValue={currentStart || null}
              placeholder="开始日期"
              onChange={onChange.bind(null, "start")}
            />
            &nbsp;-&nbsp;
            <DatePicker
              defaultValue={currentEnd || null}
              placeholder="结束日期"
              onChange={onChange.bind(null, "end")}
            />
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <SortPanel list={sortList}>
          <div className={style.opWrap}>
            <div className={style.total}>共 x 个</div>
            <Link
              className={style.iconWrap}
              href={genKeyValueHref("viewType", "card")}
            >
              <Image
                className={[
                  style.icon,
                  searchParams.get("viewType") === "card" && style.active,
                ].join(" ")}
                width={16}
                height={16}
                src={iconCard}
                alt="card"
              />
            </Link>
            <Link
              className={style.iconWrap}
              href={genKeyValueHref("viewType", "list")}
            >
              <Image
                className={[
                  style.icon,
                  searchParams.get("viewType") === "list" && style.active,
                ].join(" ")}
                width={16}
                height={16}
                src={iconList}
                alt="list"
              />
            </Link>
          </div>
        </SortPanel>
      </div>
    </div>
  );
}
