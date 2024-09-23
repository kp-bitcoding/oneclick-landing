'use client'
import { useState } from "react";
import Capabilities from "@/components/Capabilities";
import { Business } from "@/components/Business";
import { Connect } from "@/components/Connect";
import { Faq } from "@/components/Faq";
import Hero from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  const [isCapabilitiesActive, setIsCapabilitiesActive] = useState(true); // Initially true to lock scroll

  const handleCapabilitiesEnter = () => {
    setIsCapabilitiesActive(true);
  };

  const handleCapabilitiesExit = () => {
    setIsCapabilitiesActive(false);
  };

  const handleCapabilitiesComplete = () => {
    // Scroll to the next section after the Capabilities section is fully viewed
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <Hero />

        <section className="bg-white">
          <Capabilities
            onEnter={handleCapabilitiesEnter}
            onExit={handleCapabilitiesExit}
            onComplete={handleCapabilitiesComplete}
          />
        </section>

        {/* Business section with id to scroll to */}
        <section id="next-section">
          <Business />
        </section>

        <Testimonial />

        <Faq />

        <Connect />
      </div>
    </>
  );
}
