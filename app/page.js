'use client'
import { useState } from "react";
import Capabilities from "@/components/Capabilities";
import { Business } from "@/components/Business";
import { Connect } from "@/components/Connect";
import { Faq } from "@/components/Faq";
import Hero from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  const [isCapabilitiesActive, setIsCapabilitiesActive] = useState(true);
  const handleCapabilitiesEnter = () => {
    setIsCapabilitiesActive(true);
  };

  const handleCapabilitiesExit = () => {
    setIsCapabilitiesActive(false);
  };


  return (
    <>
      <div>
        <Hero />

        <section className="bg-white h-[400vh]">
          <Capabilities />
        </section>

        {/* Business section */}
        <Business />

        <Testimonial />

        <Faq />

        {/* Make Connect section scrollable */}
        <Connect />
      </div>
    </>
  );
}
