'use client'

import Image from 'next/image';
import { useState } from 'react'

export function Faq() {

    // Set the first FAQ (index 0) to be open by default
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            id: "1",
            question: 'What is Oneclick OMS?',
            answer: 'Oneclick OMS is a platform that lets you manage orders, inventory, payments, and returns across multiple e-commerce marketplaces from a single dashboard.',
        },
        {
            id: "2",
            question: 'How does the OMS handle inventory management?',
            answer: 'Our OMS offers real-time inventory tracking, automatically updating stock levels when orders are placed across different platforms. It helps avoid overselling or running out of stock.',
        },
        {
            id: "3",
            question: 'What does the system offer for return management?',
            answer: 'Our OMS automates the return process by consolidating all return requests in one window. It manages return reconciliation, ensuring accurate inventory updates and payment tracking.',
        },
        {
            id: "4",
            question: 'How does the system help calculate profit and loss?',
            answer: 'The system provides a detailed profit and loss report for each sale, taking into account factors like commission fees, shipping charges, and returns. This allows sellers to view their net profitability in real-time.',
        },
        {
            id: "5",
            question: 'What kind of analytics does your OMS provide?',
            answer: 'The system offers a range of analytics, including sales performance, return rate, inventory turnover, and profit margins. These reports help in making data-driven decisions to optimize business operations.',
        },
        {
            id: "6",
            question: 'What are the system requirements to use the OMS?',
            answer: 'Our OMS is cloud-based, so you can access it via any internet-enabled device, including desktops, laptops, and smartphones.',
        },
        {
            id: "7",
            question: 'How secure is the system?',
            answer: 'We prioritize security with encryption, secure access protocols, and regular audits to ensure your data is safe.',
        },
    ];

    return (
        <section className='bg-skyBg'>
            <div className='container mx-auto px-4 md:px-0'>
                <div className="text-center mb-8 md:mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked <span className="text-sky">Questions</span></h2>
                    <p className="mt-4 text-lg md:text-xl text-gray inline-block">Here, your burning <Image src='/assets/images/noto_fire.gif' width={25} height={25} alt='noto_fire' className=' inline-block' />  questions about Bring get answered!</p>
                </div>

                {faqItems.map((item, index) => (
                    <div key={index} className="mb-4 border border-sky rounded-lg bg-offwhite px-4 md:px-[40px]">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between py-[20px] items-center text-left rounded-lg focus:outline-none"
                        >
                            <h3 className="font-semibold text-black text-xl md:text-2xl"><span className='mr-4 text-gray'>{item.id}</span>{item.question}</h3>
                            <svg
                                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                xmlns="http://www.w3.org/2000/svg" width="21" height="33" viewBox="0 0 21 33" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5645 18.538C9.83995 18.538 9.25195 17.95 9.25195 17.2255V1.56299C9.25195 0.838488 9.83995 0.250488 10.5645 0.250488C11.289 0.250488 11.877 0.838488 11.877 1.56299V17.2255C11.877 17.95 11.289 18.538 10.5645 18.538Z" fill="#078DEE" />
                                <mask id="mask0_198_2" maskUnits="userSpaceOnUse" x="0" y="15" width="21" height="18">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 15.9131H20.6284V32.427H0.5V15.9131Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_198_2)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.19172 18.5381L10.5652 28.6513L16.937 18.5381H4.19172ZM10.5652 32.4278C10.1137 32.4278 9.69547 32.1968 9.45397 31.8136L0.702219 17.9238C0.446719 17.5213 0.432719 17.0103 0.663719 16.5921C0.894719 16.1721 1.33397 15.9131 1.81347 15.9131H19.317C19.7947 15.9131 20.234 16.1721 20.465 16.5921C20.6977 17.0103 20.682 17.5213 20.4265 17.9238L11.6747 31.8136C11.435 32.1968 11.015 32.4278 10.5652 32.4278Z" fill="#078DEE" />
                                </g>
                            </svg>
                        </button>
                        <div
                            className={`accordion-content text-lg md:text-xl font-normal py-4 border-t border-[#D7E0EA] text-gray ${openIndex === index ? 'block' : 'hidden'
                                }`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
