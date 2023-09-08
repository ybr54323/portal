"use client";
import style from "./index.module.scss";
import Image from "next/image";
import imgBanner from "@/image/home.banner.webp";
import imgScene from "@/image/open.bg.webp";
import EcologyPartner from "@/components/EcologyPartner";
import imgContent from "@/image/home.scene.webp";
import { Tag } from "antd";

export default function Home() {
  const tagList = [
    "KYC服务",
    "公积金数据产品",
    "微捷贷系列产品",
    "产业园实施主体贷",
    "农民专业合作社贷款",
    "公积e贷",
    "工薪e贷",
    "社保e贷",
  ];

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
        <Image
          fill={true}
          src={imgScene}
          alt="app scene"
          objectFit="contain"
        ></Image>

        <div className={style.title}>应用场景1</div>
        <div className={style.main}>
          <div className={style.left}>
            <div className={style.sceneTitle}>金融</div>
            <div className={style.desc}>
              提供银行客户信息的风险评估服务，协助分析企业潜在的欺诈、洗钱风险，辅助银行贷款业务，提升业务办理的效率
            </div>
            <div className={style.subTitle}>典型产品</div>
            {tagList.map((item) => {
              return <Tag key={item}>{item}</Tag>;
            })}
          </div>
          <Image
            width={446}
            height={246}
            src={imgContent}
            alt="scene"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <EcologyPartner></EcologyPartner>
    </div>
  );
}
