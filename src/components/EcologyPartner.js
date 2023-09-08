"use client";
import Image from "next/image";
import style from "./EcologyPartner.module.scss";
import Test from "@/image/test.png";
export default function EcologyPartner() {
  return (
    <div className={style.container}>
      <div className={style.title}>生态伙伴</div>

      <div className={style.animateCon}>
        <Image
          src={Test}
          width={3006}
          height={80}
          alt="partner"
          className={style.animateWrap}
        ></Image>
        <Image
          src={Test}
          width={3006}
          height={80}
          alt="partner"
          className={style.animateWrap}
        ></Image>
      </div>
      <div className={[style.animateCon, style.reverse].join(" ")}>
        <Image
          src={Test}
          width={3006}
          height={80}
          alt="partner"
          className={style.animateWrap}
        ></Image>
        <Image
          src={Test}
          width={3006}
          height={80}
          alt="partner"
          className={style.animateWrap}
        ></Image>
      </div>
    </div>
  );
}
