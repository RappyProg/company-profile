// components/Testimonial.js
"use client";
import { useEffect, useState } from 'react';

export default function Testimonial() {
  interface Testimonial {
    id: number;
    name: string;
    country: string;
    testimonial: string;
  }
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch testimonials from the JSON file
    fetch('/testimony.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="py-10 bg-[#faf3e9]">
      <div className="grid grid-flow-col gap-6 xl:max-w-6xl sm:max-w-lg lg:max-w-4xl md:max-w-2xl min-[360px]:max-w-sm mx-auto overflow-scroll duration-300 ease-in-out">
        {testimonials.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-600">&quot;{user.country}&quot;</p>
            <p className="text-gray-500 mt-4">&quot;{user.testimonial}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
