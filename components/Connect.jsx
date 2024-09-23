import Image from 'next/image'
import React from 'react'

export function Connect() {
    return (
        <section id='contact'>
            <div className=' container'>
                <div className="text-center mb-8 md:mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900"><span className="text-sky">Connect </span>With Us Today</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray">Reach out with any questions or thoughts; we’re here to help and eager to hear from you!</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <Image src='/assets/images/Contact-us.png' width={568} height={568} alt='Contact-us' />
                    </div>
                    <div className='p-6 border border-sky rounded-lg flex flex-col justify-between gap-[24px] max-w-lg ml-auto'>
                        <div>
                            <h3 className='text-3xl font-semibold mb-4'>Here To<br />Help <span className='text-sky'>24/7</span></h3>
                            <p className='text-base	text-gray font-normal'> We’re available around the clock—contact us anytime with your questions or concerns!</p>
                        </div>
                        <div>
                            <form>
                                <div className="mb-[24px]">
                                    <input id="full-name" type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-[#a6d9fe] focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none" />
                                </div>

                                <div className="mb-[24px]">
                                    <input id="email" type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-[#a6d9fe] focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none" />
                                </div>

                                <div className="mb-[24px]">
                                    <input id="phone" type="tel" placeholder="Your phone" className="w-full px-4 py-2 border border-[#a6d9fe] focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none" />
                                </div>

                                <div className="mb-[24px]">
                                    <textarea id="message" rows="4" placeholder="Write your Message" className="w-full px-4 py-2 border border-[#a6d9fe] focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-sky text-white font-bold py-2 px-4 rounded-md ">
                                    Send Messages
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
