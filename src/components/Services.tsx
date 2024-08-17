"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import { SERVICES } from "@/constant/translation"
import { useLanguage } from "@/hook/useLanguage"
import { Reveal } from "./Reveal"


const Servicescard = ({name} : {name: string}) => {

    const {language} = useLanguage()

    return <div className="bg-header max-w-[500px] max-sm:w-full max-lg:w-[80%] max-lg:m-auto py-2 px-4 rounded-2xl text-white lg:h-[300px] max-lg:py-5 flex  lg:flex-col lg:justify-between  bg-[url('/Grid.svg')]">
                <div className="lg:w-1/2 max-lg:w-full">
                    <h1 translate="no" className={`${podkova.className} text-3xl max-md:text-base max-sm:text-sm max-lg:text-lg font-[Podkova] text-textServices`}>{name}</h1>
                </div>
                <Image src="arrow.svg" alt="arrow" width={30} height={30} className="lg:hidden" />
                <div className="w-full flex items-center justify-between max-lg:hidden">
                    <p className="text-xl cursor-pointer">{SERVICES[language].text}</p>
                <div className="h-[50px] w-[50px] rounded-full bg-spacialServices flex items-center justify-center cursor-pointer"><Image src="arrowtop.svg" alt="arrow" width="20" height={20} /></div>
                </div>
            </div>
}


const Services = () => {

    const {language} = useLanguage()

    return <div id="Services" className="relative my-28 2xl:w-[1080px] 2xl:mx-auto">
    <div className="w-32 py-2 absolute -left-12 top-[50%] flex items-center justify-center bg-bambooGreen -rotate-90 text-textHeader max-lg:hidden" translate="no">SERVICES</div>
    <Reveal width="100%">
        <h1 className={`${podkova.className} text-7xl text-textHeader text-center font-bold mb-16 max-sm:text-4xl duration-500`} translate="no">{SERVICES[language].title}</h1>
    </Reveal>
    <Reveal width="100%">
        <div className="max-lg:w-full lg:grid lg:grid-cols-3 lg:gap-20 lg:px-28 max-lg:space-y-4 px-4">
            {SERVICES[language].card.map((item, index) => (
                <Servicescard key={index} name={item} />
            ))}
        </div>
    </Reveal>
  </div>
}

export default Services