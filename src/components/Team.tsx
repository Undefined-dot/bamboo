"use client"
import Image from "next/image"
import { FC } from "react";
import { podkova } from "@/app/polices"
import { useLanguage } from "@/hook/useLanguage";
import { TEAM } from "@/constant/translation";

interface teamCardProps {
    name: string;
    text: string;
    number: string;
    img: string
}

const Teamcard:FC<teamCardProps> = ({
    name,
    text,
    number,
    img
}) => {

    return <div className="bg-containerteam py-3 rounded-2xl max-w-[500px] max-lg:m-auto">
      <div className="w-[80%] m-auto space-y-4">
        <p className="text-teamtext">{number}</p>
        <div style={{ backgroundImage: `url('/${img}')` }} className={`bg-[#DDDDDD] bg-cover bg-no-repeat h-[320px] rounded-2xl`}></div>
        <h1 className="text-white">{name}</h1>
        <p className="text-sm text-white">{text}</p>
      </div>
    </div>
}

const Team = () => {
    const {language} = useLanguage()
    return <div id="Team" className="2xl:w-[1080px] 2xl:mx-auto bg-header pt-24 relative bg-[url('/Grid.svg')]
    after:absolute after:-skew-y-1 after:-bottom-5 after:h-[45px] max-xs:-bottom-10 after:w-full after:bg-bambooGreen
    before:absolute before:-skew-y-1 before:-top-5 before:h-[45px] before:w-full before:bg-bambooGreen
">
    <Image src="star.svg" alt="start" className="absolute left-[25%] max-lg:hidden" width={30} height={30} />
    <Image src="star.svg" alt="start" className="absolute top-[15%] right-[10%] max-lg:hidden" width={30} height={30} />
    <div className="w-32 py-2 absolute -left-12 top-[15%] flex items-center justify-center bg-[#DDDDDD] -rotate-90 text-textHeader max-lg:hidden">TEAM</div>

    <div className={`${podkova.className} w-full flex items-center justify-center text-4xl text-white font-bold`}>
      <p className='font-bold max-lg:text-3xl max-sm:text-lg' translate="no">{TEAM[language].title}</p>
      <div className="p-1 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center ml-2 cursor-pointer">
        <p className="text-textHeader max-lg:text-3xl max-xs:text-base" translate="no">{TEAM[language].titleSpecial}</p>
      </div>
    </div>

    <div className="w-full rounded-2xl p-6">
      <p className="text-center text-sm text-white font-light" translate="no">{TEAM[language].subTitle}</p>
    </div>
    <div className="w-full grid lg:grid-cols-2 lg:grid-rows-2 max-lg:grid-rows-4 max-lg:px-32 max-md:px-16 max-xs:p-0 gap-24 lg:px-32 mt-20 relative z-10">
      {TEAM[language].text.map((item, index) => (
          <Teamcard number={`0${index}`} name={item.name} text={item.text} img={item.img}/>
      ))}
    </div>
</div>
}

export default Team