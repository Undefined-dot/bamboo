"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import SimpleSlider from "./caroussel"
import { useLanguage } from "@/hook/useLanguage"
import { PORTEFOLIO } from "@/constant/translation"
import { Reveal } from "./Reveal"





const Portefolio = () => {

    const {language} = useLanguage()
  
    return <section id="Portefolio" className="2xl:w-[1080px] 2xl:mx-auto relative w-full lg:px-8 pt-10 mt-28 mb-36">
      <div className="w-32 py-2 absolute -left-12 z-20 top-[15%] flex items-center justify-center bg-bambooGreen -rotate-90 text-textHeader max-lg:hidden" translate="no">PORTFOLIO</div>
      <Reveal width="100%">
        <div className={`${podkova.className} max-md:w-[80%] m-auto flex flex-col items-center lg:items-start text-textHeader text-4xl max-md:text-xl max-sm:text-base lg:ml-16 max-lg:text-center font-semibold`}>
          <div className="flex items-center">
            <p className="" translate="no">
              {PORTEFOLIO[language].title}
          </p>
          <div className="py-1 px-3 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center mx-2 cursor-pointer">
            <p className="text-textHeader" translate="no"> {PORTEFOLIO[language].titleSpecial}</p>
          </div>
        </div>
        <p className="text-center" translate="no"> {PORTEFOLIO[language].title2}</p>
    </div>
    </Reveal>
    <div id="half-black-half-white" className="relative py-8 after:absolute after:-skew-y-1 after:-bottom-5 after:h-[45px] after:w-full after:bg-header">
      <Reveal width="100%">
      <div className="relative">
        <div className="px-12">
          <SimpleSlider>
            {[...Array(10)].map((_, index) => (
              <div id="carousselChild" key={index} className="h-[350px] max-w-[500px] bg-[#DDDDDD] text-white rounded-2xl text-5xl">0{index}</div>
            ))}
          </SimpleSlider>
        </div>
      </div>
      </Reveal>
      <Reveal width="100%">
        <div className="w-[60%] gap-4 flex items-center justify-between m-auto mb-8 max-lg:hidden">
          <span className="py-1 px-2 bg-bambooGreen rounded-2xl text-textHeader text-sm" translate="no">Branding and graphic Design</span>
          <span className="py-1 px-2 bg-[#F0F0F0] rounded-2xl text-sm" translate="no">Branding and graphic Design</span>
          <span className="py-1 px-2 bg-[#F0F0F0] rounded-2xl text-sm" translate="no">Branding and graphic Design</span>
        </div>
      </Reveal>
      <Reveal width="100%">
        <div className="max-md:w-[80%] w-1/2 flex items-center justify-center text-white m-auto my-8">
         <p className="text-lg max-md:text-base max-md:text-center" translate="no">Coca - Tech Startup Landing Page</p>
          <div className="max-md:hidden h-[35px] w-[35px] rounded-full bg-spacialServices flex items-center justify-center cursor-pointer ml-4"><Image src="arrowtop.svg" alt="arrow" width="20" height={20} /></div>
        </div>
      </Reveal>
      <Reveal width="100%">
        <div className="max-md:w-[80%] w-1/2 m-auto">
          <p className="text-center text-sm text-textServices"> {PORTEFOLIO[language].text}</p>
        </div>
      </Reveal>
    </div>
  </section>
}

export default Portefolio