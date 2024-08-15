"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import { useState } from "react"
import { useLanguage } from "@/hook/useLanguage"
import { STARTED } from "@/constant/translation"
import { Reveal } from "./Reveal"

const Arrow = ({color , show}: {color: string, show: boolean}) => {
    return <svg style={show ? {
         transform: 'rotate(90deg)',
         transition: ".5s"
    } : {
         transform: "rotate(0)",
         transition: ".5s"
    }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.293L11.293 6.707L15.586 11H6V13H15.586L11.293 17.293Z" fill={color}/>
    </svg>
    
}

const StartedCard = ({text, text2, hideText}: {text: string, text2: string, hideText: string}) => {
    const [ show, setShow ] = useState(false)
    return <div onClick={() =>  {show === false ? setShow(true) : setShow(false)}} className={!show ? "w-[90%] border border-[#DDDDDD] rounded-[40px] mb-12 mt-4 p-6 cursor-pointer duration-500" : "w-[90%] text-white border-none bg-header rounded-[10px] mt-4 mb-12 p-6 cursor-pointer duration-500"}>
            <div className="flex items-center justify-between">
                <div className={`${podkova.className}`}>{text}</div>
                <div className="w-[75%]"><h1>{text2}<p className="inline" translate="no"></p></h1></div>
                <div className=""><Arrow color={show ? "white" : "black"} show={show} /></div>
            </div>
            <div className={show ? "block text-white" : "hidden"}>
                <p className="text-sm mt-4">{hideText}</p>
            </div>
        </div>
}

const Started = () => {
    const {language} = useLanguage()
    return <section id="Q & A" className="2xl:w-[1080px] 2xl:mx-auto relative mt-28 lg:mb-32">
        <div className="w-32 py-2 absolute -left-12 top-[30%] flex items-center justify-center bg-bambooGreen -rotate-90 text-textHeader max-lg:hidden">Q & A</div>
        <div className="flex items-center justify-between">
        <div className="w-1/2 pl-16 text-textColor space-y-8 max-lg:w-full">
        <Reveal width="100%">
            <div className={`${podkova.className} w-auto flex items-center justify-start text-4xl text-textColor font-[Podkova] font-semibold`}>
                <p className="font-bold max-lg:text-3xl max-xs:text-base" translate="no">{STARTED[language].title}</p>
                <div className="p-1 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center ml-2 cursor-pointer">
                  <p className="max-lg:text-3xl max-xs:text-base font-bold">{STARTED[language].titleSpecial}</p>
                </div>
            </div>
            <p className="text-textColor max-xs:text-sm mt-4">{STARTED[language].subTitle}</p>
        </Reveal>
        <Reveal width="100%">
            <StartedCard 
                text="01" 
                text2={STARTED[language].text}
                hideText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum atque, aut vitae asperiores modi numquam rem accusantium tempora provident ad repellat dolor voluptas sint quos ab ipsa quibusdam sequi."
            />
            <StartedCard 
                text="02" 
                text2={STARTED[language].text}
                hideText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum atque, aut vitae asperiores modi numquam rem accusantium tempora provident ad repellat dolor voluptas sint quos ab ipsa quibusdam sequi."
            />
            <StartedCard 
                text="03" 
                text2={STARTED[language].text}
                hideText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum atque, aut vitae asperiores modi numquam rem accusantium tempora provident ad repellat dolor voluptas sint quos ab ipsa quibusdam sequi."
            />
        </Reveal>
        <div className="w-[45%] absolute top-0 right-0 max-lg:hidden">
            <Reveal width="100%">
                <Image src="man.svg" alt="man" width={500} height={500}/>
            </Reveal>
        </div>
        </div>
        </div>
    </section>
}

export default Started