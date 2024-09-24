'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Capabilities = ({ onEnter, onExit }) => {
    const contentMap = {
        dashboard: {
            title: 'Unified Dashboard',
            description: 'Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.',
            imageSrc: '/assets/images/Unified-Dashboard.png',
        },
        'order-management': {
            title: 'Order Management',
            description: 'Efficiently handle all your orders from multiple channels.',
            imageSrc: '/assets/images/Order-Management.png',
        },
        'inventory-management': {
            title: 'Inventory Management',
            description: 'Premium omni-channel inventory management and forecasting for all your locations.',
            imageSrc: '/assets/images/Inventory-Management.png',
        },
        'payment-reconciliation': {
            title: 'Payment Reconciliation',
            description: 'Seamlessly reconcile payments across multiple platforms.',
            imageSrc: '/assets/images/Payment-Reconciliation.png',
        },
        'return-management': {
            title: 'Return Management',
            description: 'Manage returns efficiently across all channels.',
            imageSrc: '/assets/images/Return-Management.png',
        },
        'one-click': {
            title: 'One-Click Profit and Loss Reports',
            description: 'Generate profit and loss reports with a single click.',
            imageSrc: '/assets/images/Profit-and-Loss-Reports.png',
        },
        'auto-click': {
            title: 'Automated Ticket Creation & Claim Handling',
            description: 'Automate ticket creation and claims handling seamlessly.',
            imageSrc: '/assets/images/Automated-Ticket.png',
        },
        // Add your two new "black" items here
        'black-1': {
            title: '',
            description: '',
            imageSrc: '/assets/images/white-bg.png',
        },
        'black-2': {
            title: '',
            description: '',
            imageSrc: '/assets/images/white-bg.png',
        }
    };

    const [activeContent, setActiveContent] = useState('dashboard');
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    // Handle scroll to update activeContent
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        // Find the total height of the scrollable content
        const scrollPosition = container.scrollTop;
        const sectionHeight = container.scrollHeight / Object.keys(contentMap).length;
        const currentIndex = Math.floor(scrollPosition / sectionHeight);

        // Update activeContent based on scroll position
        const keys = Object.keys(contentMap);
        if (keys[currentIndex] && activeContent !== keys[currentIndex]) {
            setActiveContent(keys[currentIndex]);
        }
    };

    // IntersectionObserver to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onEnter();
                    } else {
                        onExit();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [onEnter, onExit]);

    return (
        <div ref={sectionRef} className="container sticky top-0">
            <div className="text-center mb-8 md:mb-16 max-w-[1000px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Fantastic Range of <span className="text-sky">Capabilities</span> To Suit Your Needs.</h2>
                <p className="mt-4 text-lg md:text-xl text-gray inline-block">Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.</p>
            </div>
            <div className="md:relative flex md:flex-row flex-col justify-end items-center md:z-40">
                {/* Scrollable Content */}
                <div
                    ref={containerRef}
                    className="md:h-[400px] h-[100px] w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                    onScroll={handleScroll}
                >
                    <div className="flex h-full">
                        {/* Sidebar Icons */}
                        <div className="w-[300px] flex flex-col space-y-8 p-4 sticky top-0 ">
                            {Object.keys(contentMap).map((key) => (
                                <div
                                    key={key}
                                    className={`icon-section flex justify-start items-center transition-opacity duration-500 snap-start ${activeContent === key ? 'opacity-100' : 'opacity-50'
                                        }`}
                                >
                                    <Image
                                        src={contentMap[key].imageSrc}
                                        alt={`${contentMap[key].title} Icon`}
                                        className={`w-[70px] h-[70px] md:w-[112px] md:h-[112px] object-contain transition-transform duration-500 ${activeContent === key ? 'scale-105' : ''
                                            }`}
                                        width={112}
                                        height={112}
                                    />
                                    <p
                                        className={`md:text-lg text-md font-bold ml-4 ${activeContent === key ? 'text-sky-500' : 'text-gray-500'
                                            }`}
                                    >
                                        {contentMap[key].title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="md:max-w-4xl md:ml-12 flex items-center md:absolute md:top-0 md:bottom-0 md:-z-40">
                    {activeContent && (
                        <div className="flex md:flex-row flex-col items-center justify-center">
                            <Image
                                src={contentMap[activeContent]?.imageSrc || '/default-icon.png'}
                                alt={contentMap[activeContent]?.title || 'Icon'}
                                className="md:mr-4 md:h-[370px] md:w-[370px] h-[200px] w-[200px] animate-moveInHexagon"
                                style={{ animationDuration: '6s' }}
                                width={370}
                                height={370}
                            />
                            <div>
                                <p className="font-semibold text-2xl md:text-4xl text-center md:text-left mb-3">
                                    {contentMap[activeContent].title || 'Title'}
                                </p>
                                <p className="md:text-xl text-md text-center md:text-left font-normal text-gray-600">
                                    {contentMap[activeContent].description || 'Description'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
