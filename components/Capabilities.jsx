'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';

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
    };

    const [activeContent, setActiveContent] = useState('dashboard');
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    // Handle scroll to update activeContent
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

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
                        onEnter(); // Notify parent that the section is in view
                    } else {
                        onExit(); // Notify parent that the section is out of view
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
        <div ref={sectionRef} className="container">
            <div className="relative flex justify-end items-center z-40">
                {/* Scrollable Content */}
                <div
                    ref={containerRef}
                    className="h-[400px] w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
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
                                        className={`w-[112px] h-[112px] object-contain transition-transform duration-500 ${activeContent === key ? 'scale-105' : ''
                                            }`}
                                        width={112}
                                        height={112}
                                    />
                                    <p
                                        className={`text-lg font-bold ml-4 ${activeContent === key ? 'text-sky-500' : 'text-gray-500'
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
                <div className="max-w-4xl ml-12 flex items-center absolute top-0 bottom-0 -z-40">
                    {activeContent && (
                        <div className="flex items-center justify-center">
                            <Image
                                src={contentMap[activeContent].imageSrc || '/default-icon.png'}
                                alt={contentMap[activeContent].title || 'Icon'}
                                className="mr-4 animate-moveInHexagon"
                                style={{ animationDuration: '6s' }}
                                width={370}
                                height={370}
                            />
                            <div>
                                <p className="font-semibold text-4xl mb-3">
                                    {contentMap[activeContent].title || 'Title'}
                                </p>
                                <p className="text-xl font-normal text-gray-600">
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
