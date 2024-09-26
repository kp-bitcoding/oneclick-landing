'use client'
import { useState } from "react";
import Capabilities from "@/components/Capabilities";
import { Business } from "@/components/Business";
import { Connect } from "@/components/Connect";
import { Faq } from "@/components/Faq";
import Hero from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {


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
