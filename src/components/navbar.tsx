import Image from "next/image"
import { useState } from "react";
import Burger from "./burger";



export default function Navbar(){
    
    return(
        <>
            <div className="absolute items-center w-full p-5 bg-[rgba(179,171,160,255)] text-amber-800 font-bold">
                <ul className="flex justify-between items-center text-center ml-20 mr-20 cinzel-900">
                    <div className="min-[360px]:block sm:hidden"></div>
                    <li className="p-3 rounded-full min-[360px]:hidden sm:block hover:bg-[#868077] hover:text-amber-300 duration-300"><a href={'/'}>Home</a></li>
                    <li className="p-3 rounded-full min-[360px]:hidden sm:block hover:bg-[#868077] hover:text-amber-300 duration-300"><a href={'/about'}>About Us</a></li>
                    <Image
                        src="/images/Stew-Logo.png"
                        alt="Company Logo"
                        width={75}
                        height={50}
                    />
                    <li className="p-3 rounded-full min-[360px]:hidden sm:block hover:bg-[#868077] hover:text-amber-300 duration-300"><a href={'/services'}>Products</a></li>
                    <li className="p-3 rounded-full min-[360px]:hidden sm:block hover:bg-[#868077] hover:text-amber-300 duration-300"><a href={'/teams'}>Teams</a></li>
                    <Burger />
                </ul>
            </div>
        </>
    )
}
