"use client";
import Image from "next/image";
import style from "./steps.module.scss";

export default function Steps({ children, list }) {
  if (!Array.isArray(list)) return <></>;

  /**
   * title
   * desc
   * imgSrc
   *
   * option: {
   * pointStyle
   * titleStyle
   * lineStyle
   * }
   */
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${list.length},  1fr)`,
  };

  return (
    <div style={containerStyle} className={style.container}>
      {list.map((item) => {
        const option = item?.option || {};
        return (
          <div key={item.title} className={style.item}>
            <Image
              width={41}
              height={44}
              alt="step"
              src={item.imgSrc}
              className={style.img}
            ></Image>
            <div style={option.pointStyle || {}} className={style.point}></div>
            <div style={option.lineStyle || {}} className={style.line}></div>
            <div style={option.titleStyle || {}} className={style.title}>
              {item.title}
            </div>
            <div style={option.descStyle || {}} className={style.desc}>
              {item.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
}
