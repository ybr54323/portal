"use client";
import style from "./index.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { genKeyValueHref, handleUpdateQuery, useNavigation } from "@/util";

const themeList = [
  {
    id: 0,
    title: "金融业",
    count: 20,
  },
  {
    id: 1,
    title: "建筑业",
    count: 20,
  },
  {
    id: 2,
    title: "农林牧业",
    count: 20,
  },
];
const deptList = [
  {
    id: 0,
    title: "审计局",
    count: 20,
  },
  {
    id: 1,
    title: "财政局",
    count: 20,
  },
  {
    id: 2,
    title: "民政局",
    count: 20,
  },
];

const tree = [
  {
    type: "theme",
    title: "主题",
    list: themeList,
  },
  {
    type: "dept",
    title: "机构",
    list: deptList,
  },
];

export default function Sider() {
  const ALL = "all";
  const [menuList, setMenuList] = useState([]);

  const { router, pathname, searchParams } = useNavigation();

  const currentType = searchParams.get("type") || "dept";
  const currentTypeId = searchParams.get("id");

  const handleClickSubType = (typeId) => {
    handleUpdateQuery({
      pathname,
      router,
      searchParams,
      key: "id",
      val: typeId,
    });
  };

  useEffect(() => {
    if (!currentType) return;
    const tmp = tree.find((item) => item.type === currentType)?.list;

    if (!tmp?.length) return;

    const list = [
      {
        id: ALL,
        title: "全部",
        count: tmp.reduce((total, item) => total + item.count, 0),
      },
    ].concat(tmp);

    setMenuList(list);
  }, []);
  return (
    <div className={style.sider}>
      <div className={style.btnWrap}>
        {tree.map((item) => (
          <Link
            key={item.type}
            className={[
              style.btn,
              item.type === currentType && style.active,
            ].join(" ")}
            href={genKeyValueHref({
              pathname,
              searchParams,
              key: "type",
              value: item.type,
            })}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div key={currentType} className={style.menuList}>
        {menuList.map((item) => {
          return (
            <div
              key={item.id}
              className={[
                style.menu,
                item.id == currentTypeId && style.active,
              ].join(" ")}
              onClick={handleClickSubType.bind(null, item.id)}
            >
              {item.title}
              <div className={style.count}>{item.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
