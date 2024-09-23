import Image from 'next/image'
import React from 'react'

export default function Hero() {


    return (
        <section className="bg-[url('/assets/images/bg-Hero.png')] bg-cover bg-center mt-20">
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    <div className='space-y-6'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl md:text-6xl font-bold inline-block'>
                                Manage All <span className='text-sky'>Your Orders</span> From One <span className='text-sky'>Easy Place.</span> <Image src='/assets/images/box.png' height={50} width={50} className=' inline-block w-[30px] h-[30px] md:w-[50px] md:h-[50px]' alt='box' /><Image src='/assets/images/star.png' height={50} width={50} className=' inline-block w-[30px] h-[30px] md:w-[50px] md:h-[50px]' alt='star' />
                            </h1>
                            <p className='text-lg md:text-xl text-gray'>
                                Monitor your inventory across multiple sales channels with OneClick OMS, offering a complete overview of every order through its multichannel order and warehouse management system.
                            </p>
                        </div>
                        <a href='/' className='p-[16px] bg-black text-white text-sm font-bold rounded-lg inline-block'>
                            Request Demo
                        </a>
                    </div>
                    <div className='relative w-full h-full flex justify-center items-center'>
                        <div className='md:justify-self-end'>
                            <Image src='/assets/images/hero.png' alt='Basket' width={564} height={564} className='animate-moveInHexagon' />

                            <Image src='/assets/images/Ellipse-16.png' alt='Ellipse-16' width={10} height={10} className="absolute top-20 left-20 animate-moveInY" />
                            <Image src='/assets/images/noto_fire.gif' alt='noto_fire' width={30} height={30} className="absolute top-4 right-24 animate-moveInX" />
                            <Image src='/assets/images/Rectangle-7.png' alt='Rectangle-7' width={18} height={18} className="absolute left-0 top-52 animate-moveInX" />
                            <Image src='/assets/images/Rectangle-8.png' alt='Rectangle-8' width={15} height={15} className="absolute bottom-0 right-0 animate-moveInX" />
                            <Image src='/assets/images/Vector-1.png' alt='vector-1' width={100} height={200} className="absolute top-28  right-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
