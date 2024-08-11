"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from 'react';

// Define the interface for the team data structure
interface Team {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
    id: {
        value: string;
    };
}

// Define the interface for the fetched data structure
interface FetchResult {
    results: Team[];
}

export default function Teams() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        fetch('/randomapi/teams.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data: FetchResult) => {
            console.log('Fetched data:', data.results); // Inspect the results
            setTeams(data.results); // Set the team data
            setLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => {
            console.error('Error fetching teams:', error);
            setLoading(false); // Set loading to false on error
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="pt-40 pb-10 flex flex-col items-center justify-center h-auto m-auto bg-[#faf3e9]">
                <div className="flex xl:flex-row min-[360px]:flex-col xl:justify-evenly min-[360px]:justify-normal items-center text-center p-5 mx-5 text-amber-800">
                    <p className="xl:p-60 merienda-900 text-3xl">Our Teams</p>
                    <p className="xl:p-32 min-[360px]:p-5 merienda-500">
                        Our teams are composed of dedicated individuals who share a passion for creating memorable experiences for our guests. From the talented chefs who craft our delectable dishes to the friendly servers who ensure every guest feels welcome, each member of our team plays a vital role in upholding the spirit of hospitality and camaraderie that defines The Traveler&apos;s Respite. Together, we strive to provide exceptional service, nourishing meals, and a warm, welcoming environment that invites travelers to rest, revel, and rejuvenate in the company of kindred spirits. Whether you&apos;re seeking a hearty meal, a cozy room, or a friendly face to share your tales with, our teams are here to make your visit an unforgettable journey.
                    </p>
                </div>
                <hr className="p-[1px] m-10 w-full border-double border-[5px] border-black rounded-full"/>
                <div className="flex flex-row h-auto m-auto">
                    {loading ? (
                        <p>Loading teams...</p>
                    ) : (
                        teams.length === 0 ? (
                            <p>No teams available.</p>
                        ) : (
                            teams.map((team) => (
                                <div key={team.id.value} className="flex flex-col w-full justify-evenly items-center text-center m-6">
                                    <Image 
                                        src={team.picture.large} 
                                        alt={`${team.name.first} ${team.name.last}`} 
                                        width={150} 
                                        height={50} 
                                        className="rounded-full shadow-lg m-4"
                                    />
                                    
                                    <div>
                                        <p className="merienda-900 text-amber-800">{team.name.first} {team.name.last}</p>
                                        <p className="text-black">{team.email}</p>
                                    </div>
                                    
                                    
                                </div>
                            ))
                        )
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
