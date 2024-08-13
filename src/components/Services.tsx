import Image from "next/image"
import { podkova } from "@/app/polices"

const Servicescard = ({name} : {name: string}) => {
    return <div className="bg-header max-w-[500px] max-sm:w-full max-lg:w-[80%] max-lg:m-auto py-2 px-4 rounded-2xl text-white lg:h-[300px] max-lg:py-5 flex  lg:flex-col lg:justify-between  bg-[url('/Grid.svg')]">
                <div className="lg:w-1/2 max-lg:w-full">
                    <h1 className={`${podkova.className} text-3xl max-md:text-base max-sm:text-sm max-lg:text-lg font-[Podkova] text-textServices`}>{name}</h1>
                </div>
                <Image src="arrow.svg" alt="arrow" width={30} height={30} className="lg:hidden" />
                <div className="w-full flex items-center justify-between max-lg:hidden">
                    <p className="text-xl">see how <br/> to do</p>
                <div className="h-[50px] w-[50px] rounded-full bg-spacialServices flex items-center justify-center cursor-pointer"><Image src="arrowtop.svg" alt="arrow" width="20" height={20} /></div>
                </div>
            </div>
}


const Services = () => {
    return <div id="services" className="relative my-28 2xl:w-[1080px] 2xl:mx-auto">
    <div className="w-32 py-2 absolute -left-12 top-[50%] flex items-center justify-center bg-bambooGreen -rotate-90 text-textHeader max-lg:hidden">SERVCES</div>
    <h1 className={`${podkova.className} text-7xl text-textHeader text-center font-bold mb-16 max-sm:text-4xl`}>Our services</h1>
    <div className="max-lg:w-full lg:grid lg:grid-cols-3 lg:gap-28 lg:px-28 max-lg:space-y-4 px-4">
            <Servicescard name="Branding and Graphic design" />
            <Servicescard name="Web Designe and Development" />
            <Servicescard name="Social media managment" />
     </div>
  </div>
}

export default Services