"use client";
import Image from "next/image";
import style from "./index.module.scss";
import imgBanner from "@/image/open.banner.webp";
import imgBg from "@/image/open.bg.webp";

export default function Open() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <Image alt="banner" fill={true} objectFit="cover" src={imgBanner} />
        <div className={style.title}>开放生态</div>
      </div>
      <div className={style.main}>
        <Image alt="bg" fill={true} objectFit="cover" src={imgBg}></Image>
      </div>
      <div className={style.bottom}>
        <div className={style.title}>生态伙伴</div>
      </div>
    </div>
  );
}
