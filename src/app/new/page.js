"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import bannerImg from "@/image/new.banner.webp";
import style from "./news.module.scss";
import { fetchNews } from "./service";
import NewCard from "./components/new.card";
import { useState, useEffect } from "react";
import { useNewList } from "./service";
export default function News() {
  console.log("news page");
  const router = useRouter();

  const [newList] = useNewList();

  const handleClickNew = (id, href) => {
    router.push(href);
  };

  return (
    <div className={style.news}>
      <div className={style.imgWrap}>
        <Image
          fill={true}
          src={bannerImg}
          alt="新闻banner图"
          placeholder="blur"
        ></Image>
      </div>
      <div className={style.title}>新闻动态</div>

      <div className={style.main}>
        {newList.map((item) => {
          return (
            <NewCard
              onClick={handleClickNew}
              className={style.item}
              {...item}
              key={item.id}
            ></NewCard>
          );
        })}
      </div>
    </div>
  );
}
