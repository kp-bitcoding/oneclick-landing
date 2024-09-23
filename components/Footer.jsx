import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <section className='pb-0 bg-skyBg'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Links */}
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        {/* Logo */}
                        <Image
                            src='/assets/images/one-click-logo.png'
                            width={160}
                            height={50}
                            alt="One Click OMS Logo"
                        />
                        {/* Links */}
                        <ul className="flex justify-between mx-2 md:mx-0  space-x-2 md:space-y-0 md:space-x-8 mt-6">
                            <li>
                                <a href="/" className="text-gray-700 hover:text-sky font-semibold text-gray">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-700 hover:text-sky font-semibold text-gray">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-700 hover:text-sky font-semibold text-gray">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* Placeholder for additional content if needed */}
                    <div className="w-full md:w-[550px] gap-3 flex flex-col md:flex-row justify-center items-center">
                        <Image src='/assets/images/footer-box.png' width={155} height={128} alt='footer-box' />
                        <h3 className='text-xl md:text-2xl font-bold text-center md:text-left'><span className='text-sky'>“Simplify</span> your online business with <span className='text-sky'>cutting-edge</span> tools.”</h3>
                    </div>
                </div>
                {/* Footer Bottom Text */}
                <div className="text-sm md:text-base text-gray font-medium flex flex-col md:flex-row justify-between items-center mt-10 py-8 border-t border-offwhite">
                    <p className="mb-4 md:mb-0">© 2024 BB. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="/terms" className="hover:underline">Terms</a>
                        <a href="/privacy" className="hover:underline">Privacy</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
