"use client";
import { Breadcrumb, Table, Tag, Divider } from "antd";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import style from "./index.module.scss";
import iconLink from "@/image/link.webp";
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    render: (i) => i + 1,
  },
  {
    title: "字段名称",
    dataIndex: "dataIndex",
    key: "dataIndex",
  },
  {
    title: "是否必填",
    dataIndex: "isRequired",
    key: "isRequired",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
  },
  { title: "说明", dataIndex: "description", key: "description" },
];
const keyList = [1, 2, 3, 4, 5, 6].map((item) => item.toString());

export default function DataDirectory({ params }) {
  const searchParams = useSearchParams();
  return (
    <div className={style.container}>
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
            href: `/data_product?${searchParams.toString()}`,
            title: "数据产品",
          },
          {
            type: "separator",
            separator: ">",
          },
          {
            title: "数据目录详情",
          },
        ]}
      />
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.top}>
            <Image alt="product image" width={48} height={48} />
            <div className={style.right}>
              <div className={style.titleWrap}>
                <Tag>API</Tag>
                <div>身份证实名认证</div>
              </div>
              <div className={style.desc}>
                行业分析: 金融
                <Divider type="vertical" />
                成交量: 2,999
              </div>
              <div className={style.content}>
                身份证实名认证-身份证二要素认证-身份证二要素实名认证-身份证实名核验-身份证实名认证核验身份证实名认证-身份证二要素认证-身份证身份证实名认证-身份证二要素认…
              </div>
              <div className={style.priceWrap}>
                <div className={style.count}>1999</div>
                <div className={style.unit}>元/年</div>
              </div>
              <div className={style.row}>
                <div className={style.key}>数据主题:</div>
                <div className={style.value}>保险</div>
              </div>
              <div className={style.row}>
                <div className={style.key}>数据来源:</div>
                <div className={style.value}>XXXXXXXXXXXXXX</div>
              </div>
              <div className={style.row}>
                <div className={style.key}>数据覆盖地域:</div>
                <div className={style.value}>全国</div>
              </div>
              <div className={style.row}>
                <div className={style.key}>数据覆盖周期:</div>
                <div className={style.value}>7天</div>
              </div>
              <div className={style.row}>
                <div className={style.key}>更新频率:</div>
                <div className={style.value}>每天1次</div>
              </div>
            </div>
          </div>
          <div className={style.mid}>
            <div className={style.title}>使用信息</div>
            <div className={style.row}>
              <div className={style.key}>请求方式</div>
              <div className={style.value}>GET</div>
            </div>
            <div className={[style.tableCon, style.tableTitle].join(" ")}>
              <div className={style.title}>请求头参数</div>
              <Table columns={columns} />
            </div>
            <div className={[style.tableCon, style.tableTitle].join(" ")}>
              <div className={style.title}>请求体参数</div>
              <Table columns={columns} />
            </div>
            <div className={[style.tableCon, style.tableTitle].join(" ")}>
              <div className={style.title}>响应体参数</div>
              <Table columns={columns} />
            </div>
            <div className={style.title}>应用场景</div>
            <div className={style.desc}>
              部场景，营销拓客，企业建站，办公协同，财税工商，运维管理，安全防护，企业代办，合同法务，线上开店，销售管理，仓储物流，采购管理，生产管理，人力薪酬，数据分析，小程序生态，API服务，直播视频，政府/园区服务
            </div>
            <div className={style.title}>产品详情</div>
            <Image width={773} height={435} alt="product detail" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.title}>合规评估报告</div>
          <div className={style.title}>资产评估报告</div>
          <div className={style.title}>关键字</div>
          <div className={style.tagCon}>
            {keyList.map((item) => {
              return (
                <Tag color="processing" key={item}>
                  {item}
                </Tag>
              );
            })}
          </div>

          <div className={style.title}>数据附件</div>

          <div className={style.linkWrap}>
            {/* <Link download={}></Link> */}
            <Image src={iconLink} width={10} height={12} alt="link" />
            <div className={style.name}>数据附件5.xlsx</div>
          </div>
        </div>
      </div>
    </div>
  );
}
