'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';

export function Testimonial() {



    return (
        <section>
            <div className='container px-4'>
                <div className="text-center mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-3xl">Success Stories from Our <span className="text-sky">Users</span></h2>
                    <p className="mt-4 text-xl text-gray sm:text-lg">Happy Customers Share Their Experiences</p>
                </div>

                <Swiper
                    modules={[Mousewheel]}
                    spaceBetween={30}
                    slidesPerView={1}
                    // loop={true}
                    mousewheel={true}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <div className='flex flex-col justify-center text-center'>
                            <div className='w-full mx-auto flex flex-col justify-center gap-6 sm:w-[90%] md:w-[700px] lg:w-[800px]'>
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                        <path d="M18.0835 1.72065V8.72912C18.0835 9.67962 17.313 10.4498 16.3625 10.4498C12.9712 10.4498 11.1265 13.928 10.8709 20.7929H16.3625C17.313 20.7929 18.0835 21.5638 18.0835 22.514V37.312C18.0835 38.262 17.313 39.0323 16.3625 39.0323H1.72065C0.769788 39.0323 0 38.2614 0 37.312V22.514C0 19.223 0.331353 16.2031 0.984554 13.537C1.65448 10.8033 2.68283 8.41304 4.04012 6.43251C5.43676 4.3971 7.18376 2.7999 9.233 1.6872C11.2961 0.567776 13.6952 0 16.3631 0C17.313 0 18.0835 0.770149 18.0835 1.72065ZM40.2789 10.4499C41.2289 10.4499 42 9.67902 42 8.72924V1.72077C42 0.770269 41.229 0.000120251 40.2789 0.000120251C37.612 0.000120251 35.2126 0.568016 33.1502 1.68733C31.1006 2.80002 29.3526 4.39722 27.9558 6.43263C26.5989 8.41316 25.5706 10.8035 24.9006 13.5378C24.2477 16.2048 23.9164 19.2247 23.9164 22.5141V37.3121C23.9164 38.2621 24.6871 39.0324 25.6374 39.0324H40.2787C41.2288 39.0324 41.9992 38.2615 41.9992 37.3121V22.514C41.9992 21.5639 41.2289 20.7929 40.2787 20.7929H34.8654C35.1173 13.9281 36.935 10.4499 40.2789 10.4499Z" fill="#078DEE" />
                                    </svg>
                                </div>
                                <h3 className='text-black text-3xl font-semibold sm:text-2xl'>
                                    "Managing multiple channels used to be a nightmare. But with this OMS system, I can handle all orders, inventory, and reconciliations from a single window. It's saved me hours of work!"
                                </h3>
                                <div className='text-center flex flex-col gap-4 sm:gap-3'>
                                    <h5 className='text-2xl font-normal text-gray sm:text-xl'>Raj</h5>
                                    <div className='flex justify-between items-center gap-3'>
                                        <Image src='/assets/images/N.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <div className='border border-sky rounded-full p-2'>
                                            <Image src='/assets/images/R.png' width={80} height={80} alt='user face' />
                                        </div>
                                        <Image src='/assets/images/P.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex flex-col justify-center text-center'>
                            <div className='w-full mx-auto flex flex-col justify-center gap-6 sm:w-[90%] md:w-[700px] lg:w-[800px]'>
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                        <path d="M18.0835 1.72065V8.72912C18.0835 9.67962 17.313 10.4498 16.3625 10.4498C12.9712 10.4498 11.1265 13.928 10.8709 20.7929H16.3625C17.313 20.7929 18.0835 21.5638 18.0835 22.514V37.312C18.0835 38.262 17.313 39.0323 16.3625 39.0323H1.72065C0.769788 39.0323 0 38.2614 0 37.312V22.514C0 19.223 0.331353 16.2031 0.984554 13.537C1.65448 10.8033 2.68283 8.41304 4.04012 6.43251C5.43676 4.3971 7.18376 2.7999 9.233 1.6872C11.2961 0.567776 13.6952 0 16.3631 0C17.313 0 18.0835 0.770149 18.0835 1.72065ZM40.2789 10.4499C41.2289 10.4499 42 9.67902 42 8.72924V1.72077C42 0.770269 41.229 0.000120251 40.2789 0.000120251C37.612 0.000120251 35.2126 0.568016 33.1502 1.68733C31.1006 2.80002 29.3526 4.39722 27.9558 6.43263C26.5989 8.41316 25.5706 10.8035 24.9006 13.5378C24.2477 16.2048 23.9164 19.2247 23.9164 22.5141V37.3121C23.9164 38.2621 24.6871 39.0324 25.6374 39.0324H40.2787C41.2288 39.0324 41.9992 38.2615 41.9992 37.3121V22.514C41.9992 21.5639 41.2289 20.7929 40.2787 20.7929H34.8654C35.1173 13.9281 36.935 10.4499 40.2789 10.4499Z" fill="#078DEE" />
                                    </svg>
                                </div>
                                <h3 className='text-black text-3xl font-semibold sm:text-2xl'>
                                    "I was constantly struggling with return management until I switched to this OMS. Now, the entire process is seamless, and I'm more confident handling customer queries!"
                                </h3>
                                <div className='text-center flex flex-col gap-4 sm:gap-3'>
                                    <h5 className='text-2xl font-normal text-gray sm:text-xl'>Priya</h5>
                                    <div className='flex justify-between items-center gap-3'>
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/R.png' width={80} height={80} alt='user face' />
                                        <div className='border border-sky rounded-full p-2'>
                                            <Image src='/assets/images/P.png' width={80} height={80} alt='user face' />
                                        </div>
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/N.png' width={80} height={80} alt='user face' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center text-center'>
                            <div className='w-full mx-auto flex flex-col justify-center gap-6 sm:w-[90%] md:w-[700px] lg:w-[800px]'>
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                        <path d="M18.0835 1.72065V8.72912C18.0835 9.67962 17.313 10.4498 16.3625 10.4498C12.9712 10.4498 11.1265 13.928 10.8709 20.7929H16.3625C17.313 20.7929 18.0835 21.5638 18.0835 22.514V37.312C18.0835 38.262 17.313 39.0323 16.3625 39.0323H1.72065C0.769788 39.0323 0 38.2614 0 37.312V22.514C0 19.223 0.331353 16.2031 0.984554 13.537C1.65448 10.8033 2.68283 8.41304 4.04012 6.43251C5.43676 4.3971 7.18376 2.7999 9.233 1.6872C11.2961 0.567776 13.6952 0 16.3631 0C17.313 0 18.0835 0.770149 18.0835 1.72065ZM40.2789 10.4499C41.2289 10.4499 42 9.67902 42 8.72924V1.72077C42 0.770269 41.229 0.000120251 40.2789 0.000120251C37.612 0.000120251 35.2126 0.568016 33.1502 1.68733C31.1006 2.80002 29.3526 4.39722 27.9558 6.43263C26.5989 8.41316 25.5706 10.8035 24.9006 13.5378C24.2477 16.2048 23.9164 19.2247 23.9164 22.5141V37.3121C23.9164 38.2621 24.6871 39.0324 25.6374 39.0324H40.2787C41.2288 39.0324 41.9992 38.2615 41.9992 37.3121V22.514C41.9992 21.5639 41.2289 20.7929 40.2787 20.7929H34.8654C35.1173 13.9281 36.935 10.4499 40.2789 10.4499Z" fill="#078DEE" />
                                    </svg>
                                </div>
                                <h3 className='text-black text-3xl font-semibold sm:text-2xl'>
                                    "Before using this OMS, calculating profits was a time-consuming task. Now, I get instant insights into my profit and loss status with just one click. It's a game-changer for my business."
                                </h3>
                                <div className='text-center flex flex-col gap-4 sm:gap-3'>
                                    <h5 className='text-2xl font-normal text-gray sm:text-xl'>Ajay K</h5>
                                    <div className='flex justify-between items-center gap-3'>
                                        <Image src='/assets/images/R.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/P.png' width={80} height={80} alt='user face' />
                                        <div className='border border-sky rounded-full p-2'>
                                            <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        </div>
                                        <Image src='/assets/images/N.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center text-center'>
                            <div className='w-full mx-auto flex flex-col justify-center gap-6 sm:w-[90%] md:w-[700px] lg:w-[800px]'>
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                        <path d="M18.0835 1.72065V8.72912C18.0835 9.67962 17.313 10.4498 16.3625 10.4498C12.9712 10.4498 11.1265 13.928 10.8709 20.7929H16.3625C17.313 20.7929 18.0835 21.5638 18.0835 22.514V37.312C18.0835 38.262 17.313 39.0323 16.3625 39.0323H1.72065C0.769788 39.0323 0 38.2614 0 37.312V22.514C0 19.223 0.331353 16.2031 0.984554 13.537C1.65448 10.8033 2.68283 8.41304 4.04012 6.43251C5.43676 4.3971 7.18376 2.7999 9.233 1.6872C11.2961 0.567776 13.6952 0 16.3631 0C17.313 0 18.0835 0.770149 18.0835 1.72065ZM40.2789 10.4499C41.2289 10.4499 42 9.67902 42 8.72924V1.72077C42 0.770269 41.229 0.000120251 40.2789 0.000120251C37.612 0.000120251 35.2126 0.568016 33.1502 1.68733C31.1006 2.80002 29.3526 4.39722 27.9558 6.43263C26.5989 8.41316 25.5706 10.8035 24.9006 13.5378C24.2477 16.2048 23.9164 19.2247 23.9164 22.5141V37.3121C23.9164 38.2621 24.6871 39.0324 25.6374 39.0324H40.2787C41.2288 39.0324 41.9992 38.2615 41.9992 37.3121V22.514C41.9992 21.5639 41.2289 20.7929 40.2787 20.7929H34.8654C35.1173 13.9281 36.935 10.4499 40.2789 10.4499Z" fill="#078DEE" />
                                    </svg>
                                </div>
                                <h3 className='text-black text-3xl font-semibold sm:text-2xl'>
                                    "I was losing money due to improper inventory sync across platforms. This system keeps my inventory up-to-date in real-time, helping me avoid stockouts and overselling!"
                                </h3>
                                <div className='text-center flex flex-col gap-4 sm:gap-3'>
                                    <h5 className='text-2xl font-normal text-gray sm:text-xl'>Nidhi</h5>
                                    <div className='flex justify-between items-center gap-3'>
                                        <Image src='/assets/images/P.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <div className='border border-sky rounded-full p-2'>
                                            <Image src='/assets/images/N.png' width={80} height={80} alt='user face' />
                                        </div>
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/R.png' width={80} height={80} alt='user face' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center text-center'>
                            <div className='w-full mx-auto flex flex-col justify-center gap-6 sm:w-[90%] md:w-[700px] lg:w-[800px]'>
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40" fill="none">
                                        <path d="M18.0835 1.72065V8.72912C18.0835 9.67962 17.313 10.4498 16.3625 10.4498C12.9712 10.4498 11.1265 13.928 10.8709 20.7929H16.3625C17.313 20.7929 18.0835 21.5638 18.0835 22.514V37.312C18.0835 38.262 17.313 39.0323 16.3625 39.0323H1.72065C0.769788 39.0323 0 38.2614 0 37.312V22.514C0 19.223 0.331353 16.2031 0.984554 13.537C1.65448 10.8033 2.68283 8.41304 4.04012 6.43251C5.43676 4.3971 7.18376 2.7999 9.233 1.6872C11.2961 0.567776 13.6952 0 16.3631 0C17.313 0 18.0835 0.770149 18.0835 1.72065ZM40.2789 10.4499C41.2289 10.4499 42 9.67902 42 8.72924V1.72077C42 0.770269 41.229 0.000120251 40.2789 0.000120251C37.612 0.000120251 35.2126 0.568016 33.1502 1.68733C31.1006 2.80002 29.3526 4.39722 27.9558 6.43263C26.5989 8.41316 25.5706 10.8035 24.9006 13.5378C24.2477 16.2048 23.9164 19.2247 23.9164 22.5141V37.3121C23.9164 38.2621 24.6871 39.0324 25.6374 39.0324H40.2787C41.2288 39.0324 41.9992 38.2615 41.9992 37.3121V22.514C41.9992 21.5639 41.2289 20.7929 40.2787 20.7929H34.8654C35.1173 13.9281 36.935 10.4499 40.2789 10.4499Z" fill="#078DEE" />
                                    </svg>
                                </div>
                                <h3 className='text-black text-3xl font-semibold sm:text-2xl'>
                                    "Managing thousands of orders daily used to overwhelm my team. This OMS makes bulk order processing a breeze, and we've seen a significant improvement in efficiency."
                                </h3>
                                <div className='text-center flex flex-col gap-4 sm:gap-3'>
                                    <h5 className='text-2xl font-normal text-gray sm:text-xl'>Ankit</h5>
                                    <div className='flex justify-between items-center gap-3'>
                                        <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/N.png' width={80} height={80} alt='user face' />
                                        <div className='border border-sky rounded-full p-2'>
                                            <Image src='/assets/images/A.png' width={80} height={80} alt='user face' />
                                        </div>
                                        <Image src='/assets/images/R.png' width={80} height={80} alt='user face' />
                                        <Image src='/assets/images/P.png' width={80} height={80} alt='user face' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
