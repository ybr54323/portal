"use client";
import Image from "next/image";
import style from "./new.card.module.scss";
export default function NewCard({
  id,
  src,
  date,
  title,
  content,
  onClick,
  href,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(id, href);
  };
  return (
    <div className={style.newCard} onClick={handleClick}>
      <div className={style.imgWrap}>
        <Image
          className="hover-img"
          objectFit="cover"
          fill={true}
          src={src}
          alt="新闻缩略图"
        ></Image>
      </div>

      <div className={style.date}>{date}</div>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{content}</div>
    </div>
  );
}
