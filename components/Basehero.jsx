import React from 'react'

export default function Basehero({ title }) {
    return (
        <section className="bg-[url('/assets/images/bg-Hero.png')] bg-cover bg-center">
            <div className='container'>
                <div className='py-[30px]  mt-10 md:mt-0'>
                    <h1 className='text-4xl md:text-6xl font-semibold text-black text-center'>{title}</h1>
                </div>
            </div>
        </section>
    )
}
