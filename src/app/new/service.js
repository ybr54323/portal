"use client";
import New1 from "@/image/new1.webp";
import New2 from "@/image/new2.webp";
import New3 from "@/image/new3.webp";
import New4 from "@/image/new4.webp";
import New5 from "@/image/new5.webp";
import New6 from "@/image/new6.webp";

let id = 0;

const images = [New1, New2, New3, New4, New5, New6];

const counts = 9 * 2;

const newList = [];

while (id < counts) {
  newList.push({
    id,
    src: images[id % images.length],
    date: "2023-05-01",
    title: "推进公共数据授权运营 数据要素市场建设…",
    content:
      "数据要素市场建设迎来高速发展期。上海证券报记者采访获悉，今年以来，数据要素市场建设获得地方政府密集政策支持。自7月下旬至8月初，北京、上海、广东、江西、贵州、浙江等地陆续出台政策文件，进一步深化点…",
    href: "/new/" + id,
  });
  id++;
}

export const fetchNews = () => {
  return Promise.resolve(newList);
};

import { useEffect, useState } from "react";

export const useNewList = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    fetchNews().then((news) => {
      setNewList((newList) => {
        return newList.concat(news);
      });
    });
    return () => {
      setNewList([]);
    };
  }, []);

  return [newList];
};
