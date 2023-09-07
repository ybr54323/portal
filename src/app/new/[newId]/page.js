"use client";
import style from "./new.module.scss";
import Image from "next/image";
import { Breadcrumb } from "antd";
import { useNewList } from "../service";
import Link from "next/link";

export default function New({ params }) {
  const [newList] = useNewList();

  const currentNewId = params.newId;
  const currentNew = newList.find((item) => item.id == currentNewId);

  if (!currentNew) return <></>;

  const getIndexPair = () => {
    let prevNew = null;
    let nextNew = null;
    const currentIndex = newList.findIndex((item) => item.id == currentNewId);
    if (currentIndex > 0) {
      prevNew = newList[currentIndex - 1];
    }
    if (currentIndex < newList.length - 1) {
      nextNew = newList[currentIndex + 1];
    }

    return [prevNew, nextNew];
  };
  const [prevNew, nextNew] = getIndexPair();

  let prevBtn = (
    <button disabled={!prevNew} className={style.btn}>
      <span>&lt;</span>
      <span>{prevNew ? prevNew.title : "已经是第一条了"}</span>
    </button>
  );
  let nextBtn = (
    <button
      disabled={!nextNew}
      className={[style.btn, style.reverse].join(" ")}
    >
      <span>&gt;</span>
      <span>{nextNew ? nextNew.title : "已是最后一条"}</span>
    </button>
  );
  const genLinkOrBtn = (children, data) => {
    if (!data) return <div>{children}</div>;
    if (data.id !== void 0 && data.id !== null) return <Link href={"/new/" + data.id}>{children}</Link>;
  };
  prevBtn = genLinkOrBtn(prevBtn, prevNew);
  nextBtn = genLinkOrBtn(nextBtn, nextNew);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <Breadcrumb
          className={style.bread}
          separator=""
          items={[
            {
              title: "您的位置",
            },
            {
              type: "separator",
              separator: ":",
            },
            {
              href: "/new",
              title: "新闻动态",
            },
            {
              type: "separator",
              separator: ">",
            },
            {
              title: "新闻详情",
            },
          ]}
        />
        <div className={style.title}>
          推进公共数据授权运营 数据要素市场建设提速
        </div>
        <div className={style.date}>2022-09-27</div>
        <div className={style.content}>
          数据要素市场建设迎来高速发展期。上海证券报记者采访获悉，今年以来，数据要素市场建设获得地方政府密集政策支持。自7月下旬至8月初，北京、上海、广东、江西、贵州、浙江等地陆续出台政策文件，进一步深化数据要素市场改革和创新，公共数据授权运营成为其中最大的亮点。
          业内专家表示，在一系列创新举措之下，数据要素市场化配置改革正在提速，随着后续数据要素市场进一步开放搞活，公共数据有望运行开放，企业可通过数据交易获取相关数据，探索新的商业模式。
          多地开展公共数据授权运营
          8月22日，浙江省印发《浙江省公共数据授权运营管理办法（试行）的通知》（下称《通知》），其中提出，支持具备条件的市、县（市、区）优先在与民生紧密相关、行业发展潜力显著和产业战略意义重大的领域，先行开展公共数据授权运营试点工作。《通知》对职责分工、授权条件、授权运营单位权利与行为规范等方面进行了要求，应用场景的可实施性也是政策关注的重点。《通知》强调，授权运营的应用场景需具有重大经济价值和社会价值，具有较强的可实施性，在授权运营期限内有明确的目标和计划，能够取得显著成效，并设置数据安全保障措施。
        </div>
        <div className={style.imgWrap}>
          <Image
            alt="新闻详情图"
            src={currentNew.src}
            fill={true}
            className="hover-img"
          ></Image>
        </div>

        <div className={style.btnWrap}>
          {prevBtn}
          {nextBtn}
        </div>
      </div>
    </div>
  );
}
