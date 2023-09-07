"use client";
import { Breadcrumb, Table } from "antd";
import Image from "next/image";
import style from "./index.module.scss";
import iconView from "@/image/view.webp";
import { useSearchParams } from "next/navigation";
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    render: (i) => i + 1,
  },
  {
    title: "英文名称",
    dataIndex: "nameEn",
    key: "nameEn",
  },
  {
    title: "中文名称",
    dataIndex: "nameCn",
    key: "nameCn",
  },
  {
    title: "数据格式",
    dataIndex: "format",
    key: "format",
  },
  { title: "中文描述", dataIndex: "description", key: "description" },
];

export default function DataDirectory({ params }) {
  const searchParams = useSearchParams();
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
              href: `/data_directory?${searchParams.toString()}`,
              title: "数据目录",
            },
            {
              type: "separator",
              separator: ">",
            },
            {
              title: "数据产品详情",
            },
          ]}
        />

        <div className={style.top}>
          <Image
            width={137}
            height={137}
            objectFit="contain"
            alt="数据目录缩略图"
          ></Image>
          <div className={style.right}>
            <div className={style.title}>审计局行政检查实施情况说明</div>
            <div className={style.content}>
              广州市审计局行政检查实施情况说明，包括:年份、行政检查总数、行政检查被申请行政复议、行政检查直接被提起行政诉讼、更新时间等信息。广州市审计局行政检查实施情况说明，包括:年份、行政检查总数、行政检查被申请行政复议、行政检查直接被提起行政诉讼、更新时间等信息。
            </div>
            <div className={style.viewWrap}>
              <Image
                width={16}
                height={16}
                objectFit="contain"
                alt="view icon"
                src={iconView}
              ></Image>
              1,345
            </div>
          </div>
        </div>
        <div className={style.mid}>
          <div className={style.title}>基本信息</div>
          <div className={style.row}>
            <div className={style.key}>所属主题:</div>
            <div className={style.val}>金融业</div>
            <div className={style.key}>数据来源:</div>
            <div className={style.val}>广州市住房公积金管理中心</div>
            <div className={style.key}>更新时间:</div>
            <div className={style.val}>2023-07-18 11:15:25</div>
            <div className={style.key}>更新频率:</div>
            <div className={style.val}>每年</div>
            <div className={style.key}>数据来源</div>
            <div className={style.val}>金融业</div>
            <div className={style.key}>数据格式:</div>
            <div className={style.val}>数据集、文件集、API服务、地图服务</div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.title}>数据项信息</div>
          <Table columns={columns}></Table>
        </div>
      </div>
    </div>
  );
}
