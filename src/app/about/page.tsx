import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About(){
    return(
        <>
            <Navbar />
            <div className="pt-40 pb-10 flex flex-column items-center justify-center h-screen bg-[#faf3e9]">
                <div className="flex xl:flex-row min-[360px]:flex-col xl:justify-evenly  min-[360px]:justify-normal items-center text-center p-5 mx-5 text-amber-800">
                    <p className="xl:p-60 merienda-900 text-3xl">Our Journey</p>
                    <p className="xl:p-32 min-[360px]:p-5 merienda-500">From humble beginnings as a small roadside inn, The Traveler&apos;s Respite has grown into a renowned haven for adventurers and wanderers alike. Founded centuries ago by the intrepid explorer Elysia Stormrider, our tavern began as a simple shelter for weary travelers seeking rest and refuge from the perils of the road. Over time, the tavern became a vibrant gathering place, where tales of heroic quests, epic battles, and lost treasures are exchanged over hearty meals and fine brews. Through the years, The Traveler&apos;s Respite has weathered storms, witnessed countless journeys, and evolved into a cherished landmark, known far and wide as a beacon of warmth, hospitality, and camaraderie. Today, we continue to honor Elysia&apos;s legacy, welcoming all who enter our doors with open arms and a promise of comfort, good cheer, and the timeless spirit of adventure. </p>
                </div>
            </div>
            <hr className="border-dashed"/>
            <div className="flex flex-column items-center justify-center h-screen bg-[#faf3e9]">
                <div className="flex xl:flex-row min-[360px]:flex-col xl:justify-evenly  min-[360px]:justify-normal items-center text-center p-5 mx-5 text-amber-800">
                    <div className="xl:p-32 min-[360px]:p-5 space-y-5 merienda-500 text-justify">
                        <ul>
                            <li>Provide a sanctuary for adventurers, explorers, and wanderers from all walks of life.</li>
                            <li>Create a warm and welcoming environment where stories are shared, friendships are forged, and memories are made.</li>
                            <li>Offer exceptional service, nourishing meals, and comfortable accommodations that rejuvenate the body and spirit.</li>
                            <li>Uphold the legacy of hospitality and camaraderie that has defined our tavern for centuries.</li>
                            <li>Ensure that every guest leaves with a full heart, a satisfied appetite, and a renewed sense of adventure.</li>
                        </ul>
                        
                    </div>
                    <p className="xl:p-60 merienda-900 text-3xl">We strive to please you, Travelers</p>
                    
                </div>
            </div>
            
            <Footer />
        </>
    )
}