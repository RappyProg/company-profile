import Image from "next/image";

export default function Footer(){
    return(
        <>
            <div className="w-full h-[300px] bg-[rgba(179,171,160,255)]">
                
                <div className="flex w-full justify-evenly">
                    
                    <div className="h-[300px] flex flex-row items-center text-center">
                        <Image 
                            src="/images/Stew-Logo.png"
                            alt="logo"
                            width={250}
                            height={50}
                            className="transition-width xl:w-[250px] min-[360px]:w-[150px]"
                        />
                        <div>
                            <p className="text-amber-800 min-[360px]:text-[16px] md:text-2xl merienda-900">The Traveler&apos;s Respite</p>
                            <p className="text-amber-800 min-[360px]:text-[12px] md:text-lg">Ever Woods, Hearth Kingdom</p>
                            <hr className="my-3"/>
                            <p className="text-amber-800 min-[360px]:text-[10px] md:text-sm">Accommodation, Foods and Beverages</p>
                        </div>
                    </div>
                    
                    
                </div>
                
                
                    
            </div>
        </>
    )
}