"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import { useLanguage } from "@/hook/useLanguage"
import { OTHER } from "@/constant/translation"
import { Reveal } from "./Reveal"


const OtherPart = () => {

    const {language} = useLanguage()

    return <>
    <section id="other" className={`${podkova.className} 2xl:w-[1080px] 2xl:mx-auto w-[70%] max-md:w-[90%] m-auto flex items-center justify-between text-5xl max-md:text-xl`}>
        <h1 className="font-bold" translate="no">Innovate</h1>
        <Image src="star2.svg" alt="star" width={30} height={30} />
        <h1 className="font-bold" translate="no">Create</h1>
        <Image src="star2.svg" alt="star" width={30} height={30} />
        <h1 className="font-bold" translate="no">Inspirate</h1>
    </section>
    <Reveal width="100%">
    <section className="2xl:w-[1080px] 2xl:mx-auto flex items-center justify-around m-auto my-20">
            <div className="w-[41%] bg-header pt-1"></div>
            <Image src="star2.svg" alt="star" width={50} height={50} />
            <div className="w-[41%] h-2 bg-header pt-1"></div>
        </section>
    </Reveal>
        
    <section id="orther" className="2xl:w-[1080px] 2xl:mx-auto my-20">
        <Reveal width="100%">
            <div className="w-[60%] max-md:w-[80%] m-auto mb-10">

                <p className="text-center max-xs:text-sm text-textColor" translate="no">{OTHER[language].text}</p>

            </div>
        </Reveal>
        <Reveal width="100%">
            <div className="w-[80%] m-auto flex gap-8 max-md:gap-2 justify-center">
                <button className="border-2 border-textHeader bg-header text-white py-3 px-16 max-md:px-12 max-md:py-1 max-xs:text-sm rounded-3xl duration-500 hover:bg-[#F6F6F6]  hover:text-textHeader" translate="no">{OTHER[language].btn}</button>
                <button className="border-2 border-textHeader text-textHeader py-3 px-10 max-md:px-6 max-md:py-1 max-xs:text-sm rounded-3xl duration-500 hover:bg-header hover:text-white" translate="no">{OTHER[language].btn2}</button>
            </div>
        </Reveal>
    </section>
    </>
}

export default OtherPart