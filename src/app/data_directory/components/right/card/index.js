"use client";
import style from "./index.module.scss";
import iconView from "@/image/view.webp";
import imgTmp from "@/image/dir_tmp.webp";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Card({
  title,
  desc,
  theme,
  origin,
  updateTime,
  viewCount,
  id,
}) {
  const searchParams = useSearchParams();
  return (
    <Link href={`/data_directory/${id}?${searchParams.toString()}`}>
      <div className={style.card}>
        <Image
          src={imgTmp}
          width={150}
          height={230}
          alt="数据目录缩略图"
        ></Image>
        <div className={style.right}>
          <div className={style.title}>{title}</div>
          <div className={style.desc}>{desc}</div>
          <div className={style.row}>
            <div className={style.key}>所属主题:</div>
            <div className={style.value}>{theme}</div>
          </div>

          <div className={style.row}>
            <div className={style.key}>数据来源:</div>
            <div className={style.value}>{origin}</div>
          </div>

          <div className={style.row}>
            <div className={style.key}>所属主题:</div>
            <div className={style.value}>{theme}</div>
          </div>
          <div className={style.row}>
            <div className={style.key}>更新时间:</div>
            <div className={style.value}>{updateTime}</div>
          </div>

          <div className={style.viewWrap}>
            <Image
              width={16}
              height={16}
              objectFit="cover"
              src={iconView}
              alt="view icon"
              className={style.icon}
            ></Image>

            {viewCount}
          </div>
        </div>
      </div>
    </Link>
  );
}
