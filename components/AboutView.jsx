import Image from 'next/image';
import React from 'react';

export default function AboutView({ reverse = false, description, image, title }) {
    return (
        <section className="py-8 md:py-16">
            <div className='container mx-auto px-4'>
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:space-x-8`}>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <Image src={image} alt='about' width={520} height={520} className={`${reverse ? 'md:ml-auto' : 'md:mr-auto'} animate-moveInHexagon`} />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col space-y-4 px-4 md:px-0">
                        <h2 className='font-semibold text-2xl md:text-4xl'>{title}</h2>
                        {description.map((item, index) => (
                            <p className='font-normal text-gray-700 text-lg md:text-xl' key={index} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
