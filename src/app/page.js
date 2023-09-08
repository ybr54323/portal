"use client";
import style from "./index.module.scss";
import Image from "next/image";
import imgBanner from "@/image/home.banner.webp";
import EcologyPartner from "@/components/EcologyPartner";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <Image
          src={imgBanner}
          fill={true}
          objectFit="cover"
          alt="banner bg"
        ></Image>
        <div className={style.bannerTitle}>
          构建纵深分域公共数据要素运营体系
        </div>
        <div className={style.subTitle}>
          建设一体化新型数据要素市场化配置平台
        </div>
      </div>
      <div className={style.flow}>
        <div className={style.title}>平台流程</div>
      </div>
      <div className={style.provide}>
        <div className={style.title}>为您提供</div>
      </div>
      <div className={style.scene}>
        <div className={style.title}>应用场景</div>
      </div>
      <EcologyPartner></EcologyPartner>
    </div>
  );
}
