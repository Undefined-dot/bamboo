"use client"
import Image from "next/image"

const Footer = () => {
    return <section className="2xl:w-[1080px] 2xl:mx-auto bg-header bg-[url('/Grid.svg')] text-white flex flex-col py-12">
    <div className="px-8 mb-32">
      <Image src="bamboo.svg" width="80" height="80" alt="logo" />
      <div className="flex gap-4">
          <p>Innovate.</p>
          <p>Inspire.</p>
          <p>Create.</p>
      </div> 
    </div>
    <div className="flex justify-between px-8 max-md:flex-col max-md:text-sm max-md:space-y-2">
          <p className="text-light">Copyright © 2024 Catalyst Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] bg-spacialServices rounded-full flex items-center justify-center"><Image src="facebook.svg" alt="f" width={30} height={30} /></div>
            <div className="w-[50px] h-[50px] bg-spacialServices rounded-full flex items-center justify-center"><Image src="linkedin.svg" alt="l" width={30} height={30} /></div>
            <div className="w-[50px] h-[50px] bg-spacialServices rounded-full flex items-center justify-center"><Image src="githab.svg" alt="g" width={30} height={30} /></div>
            <div className="w-[50px] h-[50px] bg-spacialServices rounded-full flex items-center justify-center"><Image src="dribbble.svg" alt="d" width={30} height={30} /></div>
          </div>
    </div>
</section>
}

export default Footer