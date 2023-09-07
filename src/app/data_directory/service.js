import { useState, useEffect } from "react";

let id = 0;

const count = 2 * 5;

const list = [];
while (id < count) {
  list.push({
    id,
    title: "审计局行政检查实施情况说明",
    desc: "构建统一“查、办、评、管、报”一网办事平台，让师生可以基于统一的平台...",
    theme: "金融业",
    origin: "广州市住房公积金管理中心",

    updateTime: "2023-07-18 11:15:25",
    viewCount: "1,345",
  });
  id++;
}

export const useDirList = () => {
  const [dirList, setDirList] = useState([]);

  useEffect(() => {
    setDirList(list);

    return () => {
      setDirList([]);
    };
  }, []);
  return [dirList, setDirList];
};
