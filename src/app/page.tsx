import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Testimonial from "@/components/testimonials";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <div className="pt-[12.5rem] xl:h-[833px] md:h-[750px] sm:h-[700px] min-[360px]:h-[550px] w-full bg-[url('/images/tavern.png')] bg-no-repeat">
        <div className="bg-white bg-opacity-95 justify-evenly xl:h-[500px] items-center text-black rounded-full min-[360px]:flex min-[360px]:flex-col xl:flex-row">
            <Image 
              src="/images/Stew.png"
              alt="stew"
              width={250}
              height={50}
              className="transition-width xl:w-[250px] md:w-[150px] sm:w-[100px] min-[360px]:w-[75px]"
            />
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-lg font-serif">Welcome To</p>
              <br />
              <p className="sm:text-6xl min-[360px]:text-lg merienda-900">The Traveler&apos;s Respite</p>
              <hr className="transition-width my-5 border-black w-[1000px] xl:max-w-[900px] md:max-w-[500px] sm:max-w-[250px] min-[360px]:max-w-[150px]" />
              <p className="sm:text-lg min-[360px]:text-[10px] cinzel-700">where travelers can relax their mind and body before continuing their journey</p>
              
                      
            </div>
            <Image 
              src="/images/Ale.png"
              alt="ale"
              width={250}
              height={50}
              className="transition-width xl:w-[250px] md:w-[150px] sm:w-[100px] min-[360px]:w-[75px]"
            />
        </div>
      </div>
      {/* company overview */}
      <div className="pt-10 bg-[#faf3e9] min-[360px]:h-[1200px] md:h-[800px] w-full flex justify-evenly items-center">
        <div className="mx-4 text-amber-800">
          <p className="text-center merienda-900 text-5xl">Rest, Revel, and Rejuvenate: The Traveler&apos;s Respite Awaits.</p>
          <br />
          <p className="text-black text-justify">Welcome to The Traveler&apos;s Respite, a renowned sanctuary nestled in the heart of the Enchanted Realm. Our medieval tavern is a haven for wanderers, adventurers, and seekers of solace from across the lands. At The Traveler&apos;s Respite, we offer a warm hearth, hearty fare, and tales of valor that make every visit an unforgettable journey. Whether you&apos;re in need of a hearty meal after a quest or a place to unwind with fellow travelers, our doors are always open to welcome you. Come, rest your weary feet and revive your spirit in the company of kindred souls.</p>
          <br />
          <p className="text-black text-justify">We pride ourselves on offering a range of services to cater to every traveler&apos;s needs. Enjoy our warm, hearty meals crafted from the finest ingredients of the realm, or sip on cold, refreshing beverages that provide the perfect respite. For those seeking a place to rest, our cozy accommodations offer a peaceful retreat, complete with comfortable lodgings and a touch of medieval charm. Whether you&apos;re here for a quick refreshment or an extended stay, we ensure that every guest feels right at home.</p>

        </div>
        <div className="mx-4">
          <Image 
            src="/images/travelers.png"
            alt="travelers"
            width={4000}
            height={1}
            className="transition-width xl:w-[4000px] xl:block min-[360px]:hidden"
          />
        </div>

      </div>
      {/* service overview */}
      <div className="w-full my-5 text-center text-5xl merienda-900 text-amber-300">
        Products and Services
      </div>
      <div className="my-5 flex xl:h-[500px] min-[360px]:h-[1000px] xl:flex-row min-[360px]:flex-col min-[360px]:items-center justify-evenly w-full ">
        <div className="carousel carousel-center bg-neutral rounded-box xl:max-w-md min-[360px]:max-w-sm space-x-4 p-4 cinzel-900">
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/F&B/dragonchips.jpeg"
                alt="dragon chips"
                width={400}
                height={300}
                className="rounded-box my-2 xl:w-[400px] min-[360px]:w-[300px]" />
              <p className="text-amber-500 text-center">Dragon Chips</p>
            </div>
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/F&B/elvenwine.jpeg"
                alt="elven wine"
                width={400}
                height={300}
                className="rounded-box my-2 xl:w-[400px] min-[360px]:w-[300px]" />
              <p className="text-amber-500 text-center">Elven Wine</p>
            </div>
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/F&B/giantbreakfast.jpeg"
                alt="giant breakfast"
                width={400}
                height={300}
                className="rounded-box my-2 xl:w-[400px] min-[360px]:w-[300px]" />
              <p className="text-amber-500 text-center">Giant Breakfast</p>
            </div>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-2xl space-x-4 p-4 cinzel-900">
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/Accommodations/tavernroom.png"
                alt="Tavern Room"
                width={600}
                height={300}
                className="rounded-box my-2 xl:w-[600px] min-[360px]:w-[350px]" />
              <p className="text-amber-500 text-center">Tavern Room</p>
            </div>
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/Accommodations/tavernhotspring.png"
                alt="Tavern Hotspring"
                width={600}
                height={300}
                className="rounded-box my-2 xl:w-[600px] min-[360px]:w-[350px]" />
              <p className="text-amber-500 text-center">Tavern Hotspring</p>
            </div>
            <div className="carousel-item flex flex-col">
              <Image
                src="/images/Accommodations/tavernlayout.png"
                alt="Tavern Layout"
                width={650}
                height={300}
                className="rounded-box my-2 xl:w-[650px] min-[360px]:w-[350px] " />
              <br /><br />
              <p className="text-amber-500 text-center">Tavern Layout</p>
            </div>
           
        </div>
      </div>
      {/* testimonials */}
      <div className="w-full pt-5 text-center text-5xl merienda-900 text-amber-800 bg-[#faf3e9]">
        Testimonials
      </div>
      <Testimonial />
      <Footer />
    </>
  );
}
    
