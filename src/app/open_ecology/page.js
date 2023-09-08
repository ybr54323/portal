"use client";
import Image from "next/image";
import style from "./index.module.scss";
import imgBanner from "@/image/open.banner.webp";
import imgBg from "@/image/open.bg.webp";
import Steps from "../data_lab/components/steps";
import icon1 from "@/image/open_ecology.1.webp";
import icon2 from "@/image/open_ecology.2.webp";
import icon3 from "@/image/open_ecology.3.webp";
import icon4 from "@/image/open_ecology.4.webp";
import icon5 from "@/image/open_ecology.5.webp";
import icon6 from "@/image/open_ecology.6.webp";

/**
 * 轮播
 */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.scss";
// import required modules
import { Pagination } from "swiper/modules";
import ImgBlurWrap from "@/components/ImgBlurWrap";
import img1 from "@/image/open_ecology.s1.webp";
import img2 from "@/image/open_ecology.s2.webp";
import img3 from "@/image/open_ecology.s3.webp";

const imgs = [img1, img2, img3];
export default function Open() {
  const swiperList = new Array(9).fill(0).map((item, id) => {
    return {
      id,
      imgSrc: imgs[id % imgs.length],
    };
  });
  const stepList = [
    {
      title: "step.1",
      desc: "注册账号",
      imgSrc: icon1,
    },
    {
      title: "step.2",
      desc: "身份认证",
      imgSrc: icon2,
    },
    {
      title: "step.3",
      desc: "提交申请",
      imgSrc: icon3,
    },
    {
      title: "step.4",
      desc: "审核信息",
      imgSrc: icon4,
    },
    {
      title: "step.5",
      desc: "审核通过",
      imgSrc: icon5,
    },
    {
      title: "step.6",
      desc: "获取证书",
      imgSrc: icon6,
    },
  ].map((item) => {
    const themeColor = "#3470ff";
    return {
      ...item,
      option: {
        lineStyle: {
          border: `0.5px dashed ${themeColor}`,
        },
        titleStyle: {
          color: themeColor,
          fontSize: "16px",
          fontFamily: "Kingsoft_Cloud_Font",
          lineHeight: "22px",
        },
        pointStyle: {
          backgroundColor: themeColor,
        },
        descStyle: {
          color: "#051C4A",
        },
      },
    };
  });
  return (
    <div className={style.container}>
      <div className={style.banner}>
        <Image
          className="hover-img"
          alt="banner"
          fill={true}
          objectFit="cover"
          src={imgBanner}
        />
        <div className={style.title}>开放生态</div>
      </div>
      <div className={style.main}>
        <Image alt="bg" fill={true} objectFit="cover" src={imgBg}></Image>
        <div className={style.title}>加入生态，即可获得</div>
        <div className={style.swiperCon}>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {swiperList.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Image
                    fill={true}
                    src={item.imgSrc}
                    alt="img"
                    objectFit="cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={style.stepCon}>
          <div className={style.title}>加入流程</div>
          <Steps list={stepList}></Steps>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.title}>生态伙伴</div>
      </div>
    </div>
  );
}
