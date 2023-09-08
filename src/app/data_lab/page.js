"use client";
import style from "./index.module.scss";
import Image from "next/image";
import imgBg from "@/image/data_lab.bg.webp";
import imgLayerBg from "@/image/layer.bg.webp";
import iconRightArrow from "@/image/arrow_right.webp";
import imgSandbox from "@/image/data_lab.sandbox.webp";
import imgPrivacy from "@/image/data_lab.privacy.webp";
import iconPath from "@/image/data_lab.path.webp";
import icon1 from "@/image/data_lab.1.webp";
import icon2 from "@/image/data_lab.2.webp";
import icon3 from "@/image/data_lab.3.webp";
import { useEffect, useRef, useState } from "react";
import Steps from "./components/steps";
import ImgBlurWrap from "@/components/ImgBlurWrap";

export default function DataLab() {
  const conList = useRef([]);
  const targetList = useRef([]);

  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const handleTranslate = () => {
      [...conList.current].forEach((con, i) => {
        const target = targetList.current[i];
        const position = con.getBoundingClientRect();

        const { y, height } = position;
        const domToTop = y - height;
        // console.log(domToTop)
        if (domToTop <= 0) {
          target.style.transform = `translate3d(0, 0px, 0)`;
          return;
        }
        target.style.transform = `translate3d(0, ${domToTop}px, 0)`;

        if (imgVisible) return;

        setImgVisible(true);

        setTimeout(() => {
          target.style.opacity = 1;
        });
      });
    };

    handleTranslate();
    window.addEventListener("scroll", handleTranslate);
    return () => {
      window.removeEventListener("scroll", handleTranslate);
    };
  }, []);
  const handlePushCon = (i, node) => {
    conList.current[i] = node;
  };
  const handlePushTarget = (i, node) => {
    targetList.current[i] = node;
  };

  const stepList = [
    {
      title: "下载并填写备案表",
      desc: "请根据要求填写相关信息",
      imgSrc: icon1,
    },
    {
      title: "提交审核",
      desc: "通过传真或电子邮件备案表提交到平台审核",
      imgSrc: icon2,
    },
    {
      title: "结果反馈",
      desc: "审核结果将会第一时间通过电话及电子邮件方式反馈",
      imgSrc: icon3,
    },
  ];
  return (
    <div className={style.container}>
      <Image
        src={imgBg}
        height={2033}
        alt="data lab bg"
        className={style.bg}
        objectFit="contain"
      ></Image>
      <div className={style.title}>数据实验室</div>

      <div className={style.con} ref={handlePushCon.bind(null, 0)}>
        <div className={style.left}>
          <div className={style.title}>数据沙箱</div>
          <div className={style.content}>
            利用数据脱敏、加密、权限管理等技术，从网络、数据、业务等多层次建立安全隔离环境，并将数据放置在隔离环境中，并在隔离的沙箱内部进行计算，用户只能从沙箱中获取经过审核确认的计算结果，但无法取走原始数据，从而保证数据的安全
          </div>
          <button className={style.btn}>
            立即申请数据沙箱环境
            <Image
              className={style.icon}
              src={iconRightArrow}
              height={10}
              alt="arrow"
            ></Image>
          </button>
        </div>

        <div
          ref={handlePushTarget.bind(null, 0)}
          className={[style.right].join(" ")}
        >
          {imgVisible && (
            <>
              <Image
                objectFit="cover"
                src={imgLayerBg}
                fill={true}
                alt="img layer"
              ></Image>

              <ImgBlurWrap
                className={style.leftMove}
                imgSrc={imgSandbox}
                width={650}
                height={400}
                title={"特点：数据可用不可见 · 安全审计 · 多租户隔离"}
              ></ImgBlurWrap>
            </>
          )}
        </div>
      </div>

      <div ref={handlePushCon.bind(null, 1)} className={style.con}>
        <div
          ref={handlePushTarget.bind(null, 1)}
          className={[style.right].join(" ")}
        >
          {imgVisible && (
            <>
              <Image
                objectFit="cover"
                src={imgLayerBg}
                fill={true}
                alt="img layer"
              ></Image>
              <ImgBlurWrap
                className={style.rightMove}
                imgSrc={imgPrivacy}
                width={650}
                height={400}
                title={"特点：中立性平台 · 最小化查询 · 精细化管控"}
              ></ImgBlurWrap>
            </>
          )}
        </div>

        <div className={style.left}>
          <div className={style.title}>隐私计算</div>
          <div className={style.content}>
            在保护本身不会对外泄露的前提下实现对数据价值挖掘和开发利用的信息技术，可在无需改变数据存储位置的情况下支持数据查询、数据建模等多方数据协同利用的场景
          </div>
          <div className={style.row}>
            <Image
              src={iconPath}
              width={14}
              height={12}
              alt="path icon"
            ></Image>
            <div className={style.desc}>核心技术一：多方安全计算(MPC)</div>
          </div>
          <div className={style.row}>
            <Image
              src={iconPath}
              width={14}
              height={12}
              alt="path icon"
            ></Image>
            <div className={style.desc}>核心技术二： 联邦学习(FL)</div>
          </div>
          <div className={style.row}>
            <Image
              src={iconPath}
              width={14}
              height={12}
              alt="path icon"
            ></Image>
            <div className={style.desc}>核心技术三：机密计算(CC)</div>
          </div>
          <button className={style.btn}>
            立即申请隐私计算环境
            <Image
              className={style.icon}
              src={iconRightArrow}
              height={10}
              alt="arrow"
            ></Image>
          </button>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.title}>可信安全环境申请流程</div>
      </div>

      {/* TODO component */}

      <Steps list={stepList}></Steps>
    </div>
  );
}
