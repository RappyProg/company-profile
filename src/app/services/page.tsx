"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Services(){
    interface Accommodation {
        id: number;
        name: string;
        description: string;
        image: string;
    }
    interface FoodBev{
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }

    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
    const [foodBevs, setFoodBevs] = useState<FoodBev[]>([]);
    useEffect(() => {
        fetch('/accommodations.json')
            .then((response) => response.json())
            .then((data) => setAccommodations(data));
    }, []);
    useEffect(() => {
        fetch('/fnb.json')
            .then((response) => response.json())
            .then((data) => setFoodBevs(data));
    }, []);

    return(
        <>
            <Navbar />
            <div className="bg-[#faf3e9] h-auto m-auto flex flex-col items-center pt-40">
                <p className="merienda-900 text-amber-900 text-4xl mb-10">Our Accommodations</p>
                <p className="text-black cinzel-700 lg:text-md min-[360px]:text-sm text-center">We open our accommodations to you with a mere 50 golds. You can relax in your room, enjoy our beautiful natural hotspring and ravish our wide selections of foods and beverages.</p>
                <p className="text-black text-[12px]"><u>foods and beverages are sold separately</u></p>
                <hr className="p-[1px] m-10 w-full border-double border-[5px] border-black rounded-full"/>
                <div>
                    {accommodations.map((accommodation) => (
                        <>
                            <div key={accommodation.id} className="flex lg:flex-row min-[360px]:flex-col w-full justify-between items-center text-center xl:m-10 min-[360px]:m-0">
                                <Image src={accommodation.image} alt={accommodation.name} width={400} height={400}/>
                                <div className="cinzel-700 space-y-5">
                                    <p className="merienda-900 text-2xl text-amber-800">{accommodation.name}</p>
                                    <p className="text-sm text-black">{accommodation.description}</p>
                                </div>
                                
                            </div>
                            
                        </>
                        
                    ))}
                </div>
                <hr className="p-[1px] m-10 w-full border-double border-[5px] border-black rounded-full"/>
            </div>
            <div className="bg-[#faf3e9] h-auto m-auto flex flex-col items-center ">
                <p className="merienda-900 text-amber-900 text-4xl mb-10">Our Foods and Beverages</p>
                <div className="grid md:grid-cols-3 min-[360px]:grid-cols-1 sm:grid-cols-2 gap-2">
                    {foodBevs.map((foodBev) => (
                        <>
                            <div key={foodBev.id} className="flex flex-col w-full items-center text-center">
                                <Image src={foodBev.image} alt={foodBev.name} width={400} height={400}/>
                                <div className="cinzel-900 max-w-[500px] mt-2">
                                    <p className="merienda-900 text-xl text-amber-800">{foodBev.name}</p>
                                    <p className="text-[12px] text-black">{foodBev.description}</p>
                                    <p className="text-[10px] text-black">Price: {foodBev.price} golds</p>
                                </div>
                                
                            </div>
                            
                        </>
                        
                    ))}
                </div>
                <hr className="p-[1px] m-10 w-full border-double border-[5px] border-black rounded-full"/>
            </div>
            <Footer />
        </>
    )
}