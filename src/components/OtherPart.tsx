"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"


const OtherPart = () => {
    return <><section id="other" className={`${podkova.className} 2xl:w-[1080px] 2xl:mx-auto w-[70%] max-md:w-[90%] m-auto flex items-center justify-between text-5xl max-md:text-xl`}>
        <h1 className="font-bold">Innovate</h1>
        <Image src="star2.svg" alt="star" width={30} height={30} />
        <h1 className="font-bold">Create</h1>
        <Image src="star2.svg" alt="star" width={30} height={30} />
        <h1 className="font-bold">Create</h1>
    </section><section id="other2" className="2xl:w-[1080px] 2xl:mx-auto flex items-center justify-around m-auto my-20">
            <div className="w-[41%] bg-header pt-1"></div>
            <Image src="star2.svg" alt="star" width={50} height={50} />
            <div className="w-[41%] h-2 bg-header pt-1"></div>
        </section><section id="orther" className="2xl:w-[1080px] 2xl:mx-auto my-20">
            <div className="w-[60%] max-md:w-[80%] m-auto mb-10">
                <p className="text-center max-xs:text-sm text-textColor">Finding the right talent for your business can be a daunting task. Let Catalyst Studio's hiring agency take the guesswork out of the process and help you find the perfect fit for your team</p>
            </div>
            <div className="w-[80%] m-auto flex gap-8 max-md:gap-4 justify-center">
                <button className="border-2 border-textHeader bg-header text-white py-3 px-16 max-md:px-12 max-md:py-1 max-xs:text-sm rounded-3xl duration-500 hover:bg-[#F6F6F6]  hover:text-textHeader">Hire Us</button>
                <button className="border-2 border-textHeader text-textHeader py-3 px-10 max-md:px-6 max-md:py-1 max-xs:text-sm rounded-3xl duration-500 hover:bg-header hover:text-white">Book Consultation</button>
            </div>
        </section></>
}

export default OtherPart