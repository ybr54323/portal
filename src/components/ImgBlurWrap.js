"use client";
import style from "./ImgBlurWrap.module.scss";
import Image from "next/image";
export default function ImgBlurWrap({ width, height, title, imgSrc, className }) {
  return (
    <div
      style={{
        width,
        height,
      }}
      className={[style.container, className].join(' ')}
    >
      <Image className={style.bg} src={imgSrc} fill={true} alt="img" />
      <div className={[style.descLayer].join(" ")}></div>
      <div className={[style.desc].join(" ")}>{title}</div>
    </div>
  );
}
