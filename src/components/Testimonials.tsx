"use client"
import Image from "next/image"
import { podkova } from "@/app/polices"
import SimpleSlider from "./caroussel"

const Testimonials = () => {

  
      
    return <section id="testimonial" className="bg-header bg-[url('/Grid.svg')] py-16 relative space-y-16 2xl:w-[1080px] 2xl:mx-auto
    after:absolute after:-skew-y-1 after:-bottom-5 after:h-[45px] max-xs:-bottom-10 after:w-full after:bg-bambooGreen
    before:absolute before:-skew-y-1 before:-top-5 before:h-[45px] before:w-full before:bg-bambooGreen
">
            <div className="w-32 py-2 absolute -left-12 top-[30%] flex items-center justify-center bg-[#DDDDDD] -rotate-90 text-textHeader max-lg:hidden">TESTIMONIALS</div>
            <div className={`${podkova.className} w-full flex items-center justify-center text-4xl text-white font-[Podkova] font-semibold`}>
            <div className="p-1 -skew-x-6 rounded-lg bg-bambooGreen flex items-center justify-center mr-2 cursor-pointer">
            <p className="text-textHeader max-lg:text-3xl max-xs:text-base">Testimonials</p>
            </div>

            <p className="font-bold max-lg:text-3xl max-xs:text-base">that Speak to Our Results</p>
            </div>

            <div className="w-[50%] max-md:w-[80%] m-auto"><p className="text-center text-textServices text-sm font-[400]">Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p></div>

            <div className="w-full rounded-2xl p-6">
                <Image src="star.svg" alt="start" className="absolute top-[10%] right-[10%] max-lg:hidden" width={30} height={30}/>
                <Image src="star.svg" alt="start" className="absolute left-[15%] top-28 max-lg:hidden" width={30} height={30}/>
            <div id="caroussel2">
                <SimpleSlider>
                    {[...Array(10)].map((_, index) => (
                        <div className="text-white ">
                        <div className="flex items-center">
                          <div className="w-[50px] h-[50px] rounded-full bg-[#DDDDDD] mr-2"></div>
                          <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Alan Baker</h1>
                            <p className="font-light">CEO of Redbird Company</p>
                          </div>
                        </div>
                        <p className="italic font-light mt-4 ml-6">Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!</p>
                      </div>
                    ))}
                </SimpleSlider>
            </div>
            </div>
            </section>
}

export default Testimonials