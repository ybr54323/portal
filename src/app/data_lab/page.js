'use client'
import style from './index.module.scss'
import Image from 'next/image'
import imgBg from '@/image/data_lab.bg.webp'
import imgLayerBg from '@/image/layer.bg.webp'
import iconRightArrow from '@/image/arrow_right.webp'
import { useEffect, useRef, useState } from 'react'

export default function DataLab() {



    const conList = useRef([])
    const targetList = useRef([])

    const [imgVisible, setImgVisible] = useState(false)



    useEffect(() => {
        const handleTranslate = () => {
            [...conList.current].forEach((con, i) => {
                const target = targetList.current[i]
                const position = con.getBoundingClientRect()

                const { y, height } = position
                const domToTop = y - (height / 2)
                // console.log(domToTop)
                if (domToTop <= 0) return
                target.style.transform = `translate3d(0, ${domToTop}px, 0)`

                if (imgVisible) return

                setImgVisible(true)

                setTimeout(() => {
                    target.style.opacity = 1;
                })

            }
            )
        }

        handleTranslate()
        window.addEventListener('scroll', handleTranslate)
        return () => {
            window.removeEventListener('scroll', handleTranslate)

        }

    }, [])
    const handlePushCon = (i, node) => {
        conList.current[i] = (node)
    }
    const handlePushTarget = (i, node) => {
        targetList.current[i] = (node)
    }
    return <div className={style.container}>
        <Image
            src={imgBg}
            height={1878}
            alt='data lab bg'
            className={style.bg}
            objectFit='contain'
        ></Image>
        <div className={style.title}>
            数据实验室
        </div>

        <div className={style.con}
            ref={handlePushCon.bind(null, 0)}
        >
            <div className={style.left}>

                <div className={style.title}>
                    数据沙箱
                </div>
                <div className={style.content}>
                    利用数据脱敏、加密、权限管理等技术，从网络、数据、业务等多层次建立安全隔离环境，并将数据放置在隔离环境中，并在隔离的沙箱内部进行计算，用户只能从沙箱中获取经过审核确认的计算结果，但无法取走原始数据，从而保证数据的安全
                </div>
                <button className={style.btn}>立即申请数据沙箱环境

                    <Image className={style.icon} src={iconRightArrow} height={10} alt='arrow' ></Image>
                </button>
            </div>

            <div ref={handlePushTarget.bind(null, 0)} className={[style.right].join(' ')}>
                {
                    imgVisible && (

                        <Image objectFit='cover' src={imgLayerBg} fill={true} alt='img layer'></Image>
                    )
                }


            </div>




        </div>

        <div ref={handlePushCon.bind(null, 1)} className={style.con}>



            <div
                ref={handlePushTarget.bind(null, 1)}

                className={[style.right].join(' ')}>
                {


                    imgVisible && <Image objectFit='cover' src={imgLayerBg} fill={true} alt='img layer'></Image>
                }


            </div>

            <div

                className={style.left}>

                <div className={style.title}>
                    隐私计算
                </div>
                <div className={style.content}>
                    在保护本身不会对外泄露的前提下实现对数据价值挖掘和开发利用的信息技术，可在无需改变数据存储位置的情况下支持数据查询、数据建模等多方数据协同利用的场景
                </div>
                <button className={style.btn}>立即申请隐私计算环境

                    <Image className={style.icon} src={iconRightArrow} height={10} alt='arrow' ></Image>
                </button>
            </div>

        </div>
    </div>
}