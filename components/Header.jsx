'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="bg-offwhite shadow-lg fixed w-full top-0 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-[40px]">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src='/assets/images/one-click-logo.png'
                                width={159}
                                height={51}
                                alt="OneClick Logo"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-[56px]">
                        <nav className="hidden md:flex space-x-[56px]">
                            <Link href="/" className="text-gray hover:text-black font-medium">Home</Link>
                            <Link href="/aboutus" className="text-gray hover:text-black font-medium">About Us</Link>
                            <a href="#contact" className="text-gray hover:text-black font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const connect = document.getElementById('contact');
                                    if (connect) {
                                        connect.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    } else {
                                        window.location.href = "/";
                                    }
                                }}
                            >Contact Us</a>
                        </nav>
                        <Link href="/" className="p-[16px] text-sm text-white bg-black rounded-lg font-bold">
                            Sign in / Sign Up
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="mobile-menu-button text-gray hover:text-black focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (controlled via state) */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="block text-gray hover:bg-offwhite px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/aboutus" className="block text-gray hover:bg-offwhite px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <a href="#contact" className="block text-gray hover:bg-offwhite px-3 py-2 rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            const connect = document.getElementById('contact');
                            if (connect) {
                                connect.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            } else {
                                window.location.href = "/";
                            }
                            setMobileMenuOpen(false);
                        }}
                    >Contact Us</a>
                    <Link href="/" className="block text-gray hover:bg-offwhite px-3 py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>Sign in / Sign Up</Link>
                </div>
            </div>
        </header>
    )
}