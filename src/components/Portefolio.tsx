"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import SimpleSlider from "./caroussel"





const Portefolio = () => {
  
    return <section id="portefolio" className="2xl:w-[1080px] 2xl:mx-auto relative w-full lg:px-8 pt-10 mt-28 mb-36">
    <div className="w-32 py-2 absolute -left-12 z-20 top-[15%] flex items-center justify-center bg-bambooGreen -rotate-90 text-textHeader max-lg:hidden">PORTFOLIO</div>
    <div className={`${podkova.className} max-md:w-[80%] m-auto flex flex-col items-center lg:items-start text-textHeader text-4xl max-md:text-xl max-sm:text-base lg:ml-16 max-lg:text-center font-semibold`}>
      <div className="flex items-center">
        <p className="">
          Our Best Work of
        </p>
        <div className="py-1 px-3 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center mx-2 cursor-pointer">
          <p className="text-textHeader">successful</p>
        </div>
      </div>
      <p className="text-center">Projects</p>
    </div>
    <div id="half-black-half-white" className="relative py-8 after:absolute after:-skew-y-1 after:-bottom-5 after:h-[45px] after:w-full after:bg-header">
      <div className="relative">
        <div className="px-12">
          <SimpleSlider>
            {[...Array(10)].map((_, index) => (
              <div id="carousselChild" className="h-[350px] max-w-[500px] bg-[#DDDDDD] text-white rounded-2xl text-5xl">0{index}</div>
            ))}
          </SimpleSlider>
        </div>
      </div>

      <div className="w-[60%] gap-4 flex items-center justify-between m-auto mb-8 max-lg:hidden">
          <span className="py-1 px-2 bg-bambooGreen rounded-2xl text-textHeader text-sm">Branding and graphic Design</span>
          <span className="py-1 px-2 bg-[#F0F0F0] rounded-2xl text-sm">Branding and graphic Design</span>
          <span className="py-1 px-2 bg-[#F0F0F0] rounded-2xl text-sm">Branding and graphic Design</span>
      </div>
      <div className="max-md:w-[80%] w-1/2 flex items-center justify-center text-white m-auto my-8">
        <p className="text-lg max-md:text-base max-md:text-center">Coca - Tech Startup Landing Page</p>
        <div className="max-md:hidden h-[35px] w-[35px] rounded-full bg-spacialServices flex items-center justify-center cursor-pointer ml-4"><Image src="arrowtop.svg" alt="arrow" width="20" height={20} /></div>
      </div>
      <div className="max-md:w-[80%] w-1/2 m-auto">
        <p className="text-center text-sm text-textServices">We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs</p>
      </div>
    </div>
  </section>
}

export default Portefolio