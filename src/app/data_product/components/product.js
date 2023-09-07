"use client";
import { useSearchParams, usePathname } from "next/navigation";
import style from "./product.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Tag, Divider } from "antd";

export default function Product({
  id,
  title,
  content,
  price,
  unit,
  biz,
  count,
  type,
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const viewType = searchParams.get("viewType") || "card";

  return (
    <Link href={`${pathname}/${id}?${searchParams.toString()}`}>
      {viewType === "card" ? (
        <div className={style.card}>
          <Image
            width={40}
            height={40}
            alt="product img card"
            className={style.img}
          ></Image>

          <div className={style.titleWrap}>
            <Tag>{type}</Tag>
            <div className={style.title}>{title}</div>
          </div>
          <div title={content} className={style.content}>
            {content}
          </div>
          <div className={style.desc}>
            行业分类: {biz}
            <Divider type="vertical"></Divider>
            成交量: {count}
          </div>
          <div className={style.priceWrap}>
            <div className={style.count}>{price}</div>
            <div className={style.unit}>{unit}</div>
          </div>
        </div>
      ) : (
        <div className={style.list}>
          <Image
            width={48}
            height={48}
            alt="product img list"
            className={style.img}
          ></Image>
          <div className={style.right}>
            <div className={style.left}>
              <div className={style.titleWrap}>
                <Tag>{type}</Tag>
                <div className={style.title}>{title}</div>
              </div>

              <div className={style.desc}>
                行业分类: {biz}
                <Divider type="vertical"></Divider>
                成交量: {count}
              </div>
              <div title={content} className={style.content}>
                {content}
              </div>
            </div>
            <div className={style.right}>
              <div className={style.priceWrap}>
                <div className={style.count}>{price}</div>
                <div className={style.unit}>{unit}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}
