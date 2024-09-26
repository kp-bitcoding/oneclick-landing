"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Capabilities = () => {
    const contentMap = {
        dashboard: {
            title: "Unified Dashboard",
            description: "Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.",
            imageSrc: "/assets/images/Unified-Dashboard.png",
        },
        "order-management": {
            title: "Order Management",
            description: "Efficiently handle all your orders from multiple channels.",
            imageSrc: "/assets/images/Order-Management.png",
        },
        "inventory-management": {
            title: "Inventory Management",
            description: "Premium omni-channel inventory management and forecasting for all your locations.",
            imageSrc: "/assets/images/Inventory-Management.png",
        },
        "payment-reconciliation": {
            title: "Payment Reconciliation",
            description: "Seamlessly reconcile payments across multiple platforms.",
            imageSrc: "/assets/images/Payment-Reconciliation.png",
        },
        "return-management": {
            title: "Return Management",
            description: "Manage returns efficiently across all channels.",
            imageSrc: "/assets/images/Return-Management.png",
        },
        "one-click": {
            title: "One-Click Profit and Loss Reports",
            description: "Generate profit and loss reports with a single click.",
            imageSrc: "/assets/images/Profit-and-Loss-Reports.png",
        },
        "auto-click": {
            title: "Automated Ticket Creation & Claim Handling",
            description: "Automate ticket creation and claims handling seamlessly.",
            imageSrc: "/assets/images/Automated-Ticket.png",
        },
    };

    const [activeContent, setActiveContent] = useState('dashboard');
    const topSectionRef = useRef(null); // Reference to the top section
    const swiperRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset; // Get vertical scroll position
        const topSectionHeight = topSectionRef.current ? topSectionRef.current.offsetHeight : 0; // Get height of the top section

        if (scrollY < topSectionHeight) return; // Stop here if the top section is not fully scrolled past

        const adjustedScrollY = scrollY - topSectionHeight; // Adjust the scrollY to ignore the top section
        const totalSections = Object.keys(contentMap).length;

        const customScrollHeight = window.innerHeight * 4; // 300vh

        const scrollPercentageY = adjustedScrollY / (customScrollHeight - window.innerHeight);
        const activeIndex = Math.min(
            Math.floor(scrollPercentageY * totalSections),
            totalSections - 1
        );

        const keys = Object.keys(contentMap);
        if (keys[activeIndex] && activeContent !== keys[activeIndex]) {
            setActiveContent(keys[activeIndex]);
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(activeIndex);
            }
        }
    };

    const handleSlideChange = (swiper) => {
        const keys = Object.keys(contentMap);
        const activeIndex = swiper.activeIndex;
        if (keys[activeIndex] && activeContent !== keys[activeIndex]) {
            setActiveContent(keys[activeIndex]);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeContent, handleScroll]);

    return (
        <div className="sticky top-40" ref={topSectionRef}>
            <div className="container mx-auto md:px-4">
                <div className="text-center mb-8 md:mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                        A Fantastic Range of <span className="text-sky">Capabilities</span> To Suit Your Needs.
                    </h2>
                    <p className="mt-4 text-md md:text-xl text-gray inline-block">
                        Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.
                    </p>
                </div>

                <div className="flex md:flex-row flex-col justify-between items-center md:z-40">
                    <div
                        className="md:h-[400px] h-[100px] md:w-[400px] w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                        onScroll={handleScroll}
                    >
                        <div className="h-full w-full flex flex-col space-y-8 p-4 sticky top-0 mb-5 md:mb-0">
                            <Swiper
                                direction="vertical"
                                slidesPerView={3}
                                spaceBetween={30}
                                onSlideChange={handleSlideChange}
                                ref={swiperRef}
                                className="h-[400px] w-full"
                                breakpoints={{
                                    // When window width is >= 768px (tablet and above)
                                    768: {
                                        slidesPerView: 3, // Show 3 slides per view on tablets and larger screens
                                    },
                                    // When window width is < 768px (mobile devices)
                                    0: {
                                        slidesPerView: 1, // Show 1 slide per view on mobile devices
                                    },
                                }}
                            >
                                {Object.keys(contentMap).map((key) => {
                                    const content = contentMap[key];
                                    if (!content.title || !content.description) return null;

                                    return (
                                        <SwiperSlide key={key}>
                                            <div
                                                key={key}
                                                className={`icon-section flex md:justify-start justify-center items-center transition-opacity duration-500 snap-start ${activeContent === key ? "opacity-100" : "opacity-50"
                                                    }`}
                                            >
                                                <Image
                                                    src={content.imageSrc || "/default-icon.png"}
                                                    alt={`${content.title} Icon`}
                                                    className={`w-[70px] h-[70px] md:w-[112px] md:h-[112px] object-contain transition-transform duration-500 ${activeContent === key ? "scale-105" : ""
                                                        }`}
                                                    width={112}
                                                    height={112}
                                                />
                                                <p
                                                    className={`md:text-lg text-md font-bold ml-4 ${activeContent === key ? "text-sky-500" : "text-gray-500"
                                                        }`}
                                                >
                                                    {content.title}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end">
                        {activeContent && (
                            <div className="flex max-w-4xl md:flex-row flex-col items-center justify-center">
                                <Image
                                    src={contentMap[activeContent].imageSrc || "/default-icon.png"}
                                    alt={contentMap[activeContent].title || "Icon"}
                                    className="md:mr-4 md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:w-[370px] xl:h-[370px] h-[200px] w-[200px] animate-moveInHexagon"
                                    style={{ animationDuration: "6s" }}
                                    width={370}
                                    height={370}
                                />
                                <div>
                                    <p className="font-semibold text-2xl md:text-4xl text-center md:text-left mb-3">
                                        {contentMap[activeContent].title}
                                    </p>
                                    <p className="md:text-xl text-md text-center md:text-left font-normal text-gray-600">
                                        {contentMap[activeContent].description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
