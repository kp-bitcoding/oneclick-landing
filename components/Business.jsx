'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react';

export function Business() {
    const sectionRef = useRef(null);
    const curvedElementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add curved-border class as soon as the section is visible
                        curvedElementsRef.current.forEach((element) => {
                            if (element) element.classList.add('curved-border');
                        });
                    }
                });
            },
            {
                threshold: 0.5 // Trigger as soon as even 1% of the section is visible
            }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section className="bg-[url('/assets/images/bg-business.png')] bg-cover bg-center">
            <div className='container' ref={sectionRef}>
                <div className="text-center mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Grow A Business That Matches Your <span className="text-sky">Vision For Success.</span></h2>
                    <p className="mt-4 text-md md:text-xl text-gray">Simplify your multichannel operations with OneClick OMS. Manage your inventory centrally and enjoy powerful features, so you can spend more time on what you love.</p>
                </div>
                <div className="grid grid-cols-1 gap-16">
                    <div className="flex items-center justify-start">
                        <div className='h-full w-full md:w-[500px] md:h-[350px] md:relative flex flex-col md:flex-row'>
                            <div className="h-full w-full md:w-[238px] md:h-[238px] mb-6 md:absolute md:top-0 md:right-0 mx-auto">
                                <Image src="/assets/images/Reclaim Your Time 1.png" alt="Clock Icon" width={238} height={238} className=" w-[200px] h-[200px] md:w-[238px] md:h-[238px] animate-moveInHexagon mx-auto" />
                            </div>
                            <div className='pt-auto flex flex-col justify-end'>
                                <h3 className=" text-2xl  md:text-4xl font-semibold text-black mb-4 text-center md:text-left">Reclaim Your<br /> Schedule And Your Freedom.</h3>
                                <p className="text-gray text-lg md:text-xl text-center md:text-left">
                                    <span className='relative' ref={(el) => curvedElementsRef.current[0] = el}>Replace manual inventory tasks</span>
                                    with <span className='relative' ref={(el) => curvedElementsRef.current[1] = el}>more time</span>
                                    for the <span className='relative' ref={(el) => curvedElementsRef.current[2] = el}>things you love.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className='h-full w-full md:w-[500px] md:h-[350px] md:relative flex flex-col md:flex-row'>
                            <div className="h-full w-full md:w-[238px] md:h-[238px] mb-6 md:absolute md:top-0 md:right-0 mx-auto">
                                <Image src="/assets/images/Mark.png" alt="Mark Icon" width={238} height={238} className=" w-[200px] h-[200px] md:w-[238px] md:h-[238px] animate-moveInHexagon mx-auto" />
                            </div>
                            <div className='pt-auto flex flex-col justify-end'>
                                <h3 className="text-2xl  md:text-4xl font-semibold text-black mb-4 text-center md:text-left">Make Smarter<br /> Choices With Ease.</h3>
                                <p className="text-gray text-md md:text-xl text-center md:text-left">
                                    <span className='relative' ref={(el) => curvedElementsRef.current[3] = el}>Access instant insights</span>
                                    to make <span className='relative' ref={(el) => curvedElementsRef.current[4] = el}>well-informed business</span>
                                    decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <div className='h-full w-full md:w-[500px] md:h-[350px] md:relative flex flex-col md:flex-row'>
                            <div className="h-full w-full md:w-[238px] md:h-[238px] mb-6 md:absolute md:top-0 md:right-0 mx-auto">
                                <Image src="/assets/images/Grow.png" alt="Grow Icon" width={238} height={238} className="w-[200px] h-[200px] md:w-[238px] md:h-[238px] animate-moveInHexagon mx-auto" />
                            </div>
                            <div className='pt-auto flex flex-col justify-end'>
                                <h3 className="text-2xl  md:text-4xl font-semibold text-black mb-4 text-center md:text-left">Elevate Your<br /> Business Reach</h3>
                                <p className="text-gray text-md md:text-xl text-center md:text-left">
                                    <span className='relative' ref={(el) => curvedElementsRef.current[5] = el}>Grow your business confidently</span>
                                    with OneClick OMS&#39;s effective tools and <span className='relative' ref={(el) => curvedElementsRef.current[6] = el}>supportive resources.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
