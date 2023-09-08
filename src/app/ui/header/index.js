"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.scss";

import Link from "next/link";
const navList = [
  {
    title: "首页",
    href: "/",
  },
  {
    title: "数据目录",
    href: "/data_directory",
  },
  {
    title: "数据产品",
    href: "/data_product",
  },
  {
    title: "数据实验室",
    href: "/data_lab",
  },
  {
    title: "开放生态",
    href: "/open_ecology",
  },
  {
    title: "新闻动态",
    href: "/new",
  },
  // {
  //   title: "登录",
  //   href: "/login",
  // },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className={style.container}>
      <div className={style.left}>广州公共数据运营平台</div>
      <div className={style.right}>
        {navList.map(({ href, title }) => {
          const isActive = pathname === href;

          return (
            <Link
              className={[style.nav, isActive && style.active].join(" ")}
              key={href}
              href={href}
            >
              {title}
            </Link>
          );
        })}
        {/* <Link className={style.registry} href='/registry'>免费注册</Link> */}
      </div>
    </div>
  );
}
