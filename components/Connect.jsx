import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha';

export function Connect() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        let valid = true;
        if (!formData.full_name.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                full_name: "Full name is required"
            }))
            valid = false;
        }
        if (!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email is required"
            }))
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Invalid email format"
            }))
            valid = false;
        }
        if (!formData.phone || formData.phone.length !== 10) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Phone number must be 10 digits"
            }))
            valid = false;
        }
        if (!captchaToken) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                captcha: "Please verify you are not a robot"
            }))
            valid = false;
        }
        return valid;
    };

    // Handle input changes, especially for phone to prevent typing non-numeric values
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        if (validateForm()) {
            try {
                const payload = {
                    ...formData,
                    phone: `+91${formData.phone}`,
                };

                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}contact-us`, payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_AUTH_TOKEN,
                    }
                })

                if (response.status === 200 || response.status === 201) {
                    toast.success("Message sent successfully!", {
                        position: "bottom-right",
                    });
                    setFormData({
                        full_name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                    setCaptchaToken(null);
                } else {
                    toast.error("Something went wrong.");
                }

                console.log(payload, "payload");
            } catch (error) {
                console.log(error, "error")
                toast.error(error.message);
            }
        }

    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
        if (token) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                captcha: ''
            }));
        }
    };

    return (
        <section id='contact'>
            <div className='container'>
                <div className="text-center mb-8 md:mb-16 max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        <span className="text-sky">Connect </span>With Us Today
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray">
                        Reach out with any questions or thoughts; we’re here to help and eager to hear from you!
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <Image src='/assets/images/Contact-us.png' width={568} height={568} alt='Contact-us' />
                    </div>
                    <div className='p-6 border border-sky rounded-lg flex flex-col justify-between gap-[24px] max-w-lg ml-auto'>
                        <div>
                            <h3 className='text-3xl font-semibold mb-4'>Here To<br />Help <span className='text-sky'>24/7</span></h3>
                            <p className='text-base text-gray font-normal'>We’re available around the clock—contact us anytime with your questions or concerns!</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-[24px]">
                                    <input
                                        id="full_name"
                                        type="text"
                                        placeholder="Full Name"
                                        className={`w-full px-4 py-2 border ${errors.full_name ? 'border-red-500' : 'border-[#a6d9fe]'} focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none`}
                                        value={formData.full_name}
                                        onChange={(event) => {
                                            handleChange(event);
                                            setErrors((prevErrors) => ({
                                                ...prevErrors,
                                                full_name: '',
                                            }))
                                        }}
                                    />
                                    {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
                                </div>

                                <div className="mb-[24px]">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-[#a6d9fe]'} focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none`}
                                        value={formData.email}
                                        onChange={(event) => {
                                            handleChange(event);
                                            setErrors((prevErrors) => ({
                                                ...prevErrors,
                                                email: '',
                                            }))
                                        }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div className="mb-[24px]">
                                    <div className="flex items-center">
                                        <span className="bg-gray-100 border border-sky px-3 py-2 rounded-l-md">+91</span>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Your phone"
                                            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-[#a6d9fe]'} focus:border-sky rounded-r-md text-black placeholder:text-black placeholder:font-normal focus:outline-none`}
                                            value={formData.phone}
                                            onChange={(event) => {
                                                if (/^\d*$/.test(event.target.value) && event.target.value.length <= 10) {
                                                    handleChange(event);
                                                    setErrors((prevErrors) => ({
                                                        ...prevErrors,
                                                        phone: '',
                                                    }))
                                                }
                                            }}
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                <div className="mb-[24px]">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Write your Message (optional)"
                                        className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-[#a6d9fe]'} focus:border-sky rounded-[6px] text-black placeholder:text-black placeholder:font-normal focus:outline-none`}
                                        value={formData.message}
                                        onChange={(event) => {
                                            handleChange(event);
                                            setErrors((prevErrors) => ({
                                                ...prevErrors,
                                                message: '',
                                            }))
                                        }}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                {/* reCAPTCHA */}
                                {/* <div className="mb-[24px] re-captcha overflow-x-hidden">
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                                        onChange={handleCaptchaChange}
                                        className='overflow-x-hidden'
                                    />
                                    {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
                                </div> */}

                                <button
                                    type="submit"
                                    className="w-full bg-sky text-white font-bold py-2 px-4 rounded-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
