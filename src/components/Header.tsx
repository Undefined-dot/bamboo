"use client"
import Image from "next/image"
import { FC, useState } from "react"
import Link from "next/link"
import { podkova } from "@/app/polices"
import { useLanguage } from "@/hook/useLanguage"
import { HEADER } from "@/constant/translation"

interface LiensProps {
    name : "home"|"services"|"pricing" |"portefolio" |"testimonials" |"qa" |"team" |"about" | "btn1" | "btn2" | "Headers1"
    link: string
    type: "desktop" | "mobile"
}

const Liens:FC<LiensProps> = ({
    name,
    link,
    type
}) => {
    const language = useLanguage()
    return <span className={
              type === "desktop" ?`relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[-2px] after:duration-300 after:bg-bambooGreen hover:after:w-full hover:text-textHoverHeader` :
                                  `hover:underline hover:text-textHoverHeader border-b py-2 hover:bg-header/80`

            }>
                <Link href={link} id="pathname" data-translate="home" translate="no">{HEADER[language.language][name]}</Link>
            </span>
} 

const Header = () => {
    const language = useLanguage()
    const [hidden, setHidden] = useState(true)
    return <section className="relative w-full bg-header bg-[url('/Grid.svg')]" id="header">
    <header className="w-full flex items-center justify-between px-4 lg:px-16 py-4">
      <div className="">
        <Image src="bamboo.svg" width="80" height="80" alt="logo" />
    </div>
    <div className="w-[50%] max-w-[750px] min-w-[650px] flex items-center justify-between text-gray-100 leading-5 max-lg:hidden">
        <Liens name="home" link="#" type="desktop"/>
        <Liens name="services" link="#services" type="desktop"/>
        <Liens name="team" link="#services" type="desktop"/>
        <Liens name="portefolio" link="#portfolio" type="desktop"/>
        <Liens name="testimonials" link="#testimonials" type="desktop"/>
        <Liens name="qa" link="#qa" type="desktop"/>
        <Liens name="pricing" link="#" type="desktop"/>
        <Liens name="about" link="#" type="desktop"/>
    </div>
    <div className={`${podkova.className} py-2 px-5 -skew-x-6 font-bold rounded-lg bg-bambooGreen flex items-center justify-center cursor-pointer max-lg:hidden duration-500 hover:bg-white`}>
        <p>book call</p>
    </div>
    <div className="lg:hidden">
      <Image src="menu.svg" alt="menu" width="30" height="30" onClick={() => setHidden(false)} className="cursor-pointer" id="menu" />
    </div>
    </header>
    <section className="2xl:w-[1500px] 2xl:m-auto h-[800px] relative">
      <section className="fixed top-0 left-0 right-0 bg-header z-50 text-white duration-300" style={{
          transform: hidden ? "translate(0, -1000px)" : "translate(0, 0)"
        }}>
        <div className="w-full flex items-center justify-between px-4">
          <Image src="bamboo.svg" width="80" height="80" alt="logo" />
          <Image src="close.svg" alt="close" width="20" height="20" id="close" onClick={() => setHidden(true)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col mt-4 space-y-4 text-lg px-4">
          <Liens name="home" link="#" type="mobile"/>
          <Liens name="services" link="#services" type="mobile"/>
          <Liens name="team" link="#services" type="mobile"/>
          <Liens name="portefolio" link="#portfolio" type="mobile"/>
          <Liens name="testimonials" link="#testimonials" type="mobile"/>
          <Liens name="qa" link="#qa" type="mobile"/>
          <Liens name="pricing" link="#" type="mobile"/>
          <Liens name="about" link="#" type="mobile"/>
        </div>
      </section>
      <section id="" className="w-full h-[800px] overflow-hidden after:absolute after:skew-y-1 after:-bottom-8 after:h-[45px] after:w-full after:bg-bambooGreen">
        <section className="relative h-auto lg:pt-24">
          <div className="w-full space-y-10 lg:w-1/2  lg:pl-16 lg:space-y-16 max-lg:m-auto max-sm:mt-8">
            <div className="w-full space-y-8">
              <div className="flex items-center max-lg:flex-col">
                <div className="py-1.5 px-3 -skew-x-6 rounded-xl bg-bambooGreen flex items-center justify-center lg:mr-4">
                  <p className={`${podkova.className} xl:text-[80px] lg:text-[78px] max-lg:text-7xl max-sm:text-6xl text-textHeader font-bold`}>Bamboo</p>
                </div>
                <div>
                  <h1 className={`${podkova.className} xl:text-[90px] lg:text-[78px] max-lg:text-7xl max-sm:text-6xl font-bold text-white`} translate="no">creative</h1>
                </div>
              </div>
              <div className="max-w-[550px] max-sm:w-[300px] max-lg:m-auto text-base">
                <p className="font-light text-lg max-sm:text-sm text-white max-lg:text-center" translate="no" data-translate="Headers1">
                  We love create experience that enables people to connect, express themselves and establish meaningful relationship 
                </p>
            </div>
            </div>
        <div className="flex text-white space-x-4 max-lg:justify-center">
          <div className="py-2 px-8 -skew-x-6 rounded-lg bg-bambooGreen text-textHeader flex items-center justify-center cursor-pointer duration-500 hover:bg-primary hover:text-white">
            <p className={`${podkova.className} font-bold`} translate="no">book call</p>
          </div>
          <div className="p-2 -skew-x-6 rounded-lg border border-white flex items-center justify-center cursor-pointer duration-500 hover:bg-primary">
            <p className={`${podkova.className} font-bold`} translate="no" data-translate="btn1">See our work</p>
            <Image src="arrow.svg" width={30} height={30} alt="" />
          </div>
        </div>
        <div id="more" className="grid grid-cols-3 gap-3 max-lg:hidden">
          <div className="w-auto flex flex-col text-white">
            <div className="font-bold flex text-lg items-center mb-3"><p className="text-2xl">2000</p><Image src="bx-plus.svg" alt="plus" width="30" height={30} /></div>
            <h1 className="text-white font-light">Company</h1>
          </div>
          <div className="w-auto flex flex-col text-white">
            <div className="font-bold flex text-lg items-center mb-3"><p className="text-2xl">10</p><Image src="bx-plus.svg" alt="plus" width="30" height={30} /></div>
            <h1 className="text-white font-light">Year Exp.</h1>
          </div>
          <div className="w-auto flex flex-col text-white">
            <div className="font-bold flex text-lg items-center mb-3"><p className="text-2xl">800</p><Image src="bx-plus.svg" alt="plus" width="30"height={30} /></div>
            <h1 className="text-white font-light">Hours of Digital</h1>
          </div>
        </div>
          </div>
          <div className="max-sm:w-[90%] max-lg:w-[60%] lg:w-1/2 max-lg:mt-8 max-lg:m-auto lg:absolute lg:top-24 xl:top-12 lg:-right-20">
            <Image src="group.svg" width={600} height={600} alt="global image" loading="lazy" className="m-auto" />
          </div>
        </section>
      </section>
    </section>
  </section>
}

export default Header