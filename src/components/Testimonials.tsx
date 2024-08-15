"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import SimpleSlider from "./caroussel"
import { useLanguage } from "@/hook/useLanguage"
import { TESTIMONIALS } from "@/constant/translation"
import { Reveal } from "./Reveal"

const Testimonials = () => {

  const {language} = useLanguage()
      
    return <section id="Testimonials" className="bg-header bg-[url('/Grid.svg')] py-16 relative space-y-16 2xl:w-[1080px] 2xl:mx-auto
    after:absolute after:-skew-y-1 after:-bottom-5 after:h-[45px] max-xs:-bottom-10 after:w-full after:bg-bambooGreen
    before:absolute before:-skew-y-1 before:-top-5 before:h-[45px] before:w-full before:bg-bambooGreen
">
        <div className="w-32 py-2 absolute -left-12 top-[30%] flex items-center justify-center bg-[#DDDDDD] -rotate-90 text-textHeader max-lg:hidden">TESTIMONIALS</div>
        <Reveal width="100%">
          <div className={`${podkova.className} w-full flex items-center justify-center text-4xl text-white font-[Podkova] font-semibold`}>
            <div className="p-1 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center mr-2 cursor-pointer">
              <p className="text-textHeader max-lg:text-3xl max-xs:text-base">{TESTIMONIALS[language].titleSpecial}</p>
            </div>

            <p className="font-bold max-lg:text-3xl max-xs:text-base">{TESTIMONIALS[language].title}</p>
          </div>
          <div className="w-[50%] max-md:w-[80%] m-auto"><p className="text-center text-textServices text-sm mt-4 font-[400]" translate="no">{TESTIMONIALS[language].subTitle}</p></div>
        </Reveal>

        <div className="w-full rounded-2xl p-6">
            <Image src="star.svg" alt="start" className="absolute top-[10%] right-[10%] max-lg:hidden" width={30} height={30}/>
            <Image src="star.svg" alt="start" className="absolute left-[15%] top-28 max-lg:hidden" width={30} height={30}/>
            <Reveal width="100%">
            <div id="caroussel2">
                <SimpleSlider>
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="text-white ">
                        <div className="flex items-center">
                          <div className="w-[50px] h-[50px] rounded-full bg-[#DDDDDD] mr-2"></div>
                          <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Alan Baker</h1>
                            <p className="font-light">{TESTIMONIALS[language].occupation}</p>
                          </div>
                        </div>
                        <p className="italic font-light mt-4 ml-6" translate="no">{TESTIMONIALS[language].testimonials}</p>
                      </div>
                    ))}
                </SimpleSlider>
            </div>
            </Reveal>
            </div>
            </section>
}

export default Testimonials