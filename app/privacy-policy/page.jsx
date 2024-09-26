import React from 'react'
import Basehero from '@/components/Basehero'
import Link from 'next/link'

const page = () => {
    return (
        <section>
            <Basehero
                title={"Privacy Policy"}
            />


            <section>
                <div className='container'>

                    <p className='mb-8'>At Bhadar Technologies Private Limited, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose information that we obtain through the OneClick OMS app.</p>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">1. Collection of Information</h2>
                        <p>We may collect the following types of information from you:</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, mailing address, phone number, and payment information when you register for our app, purchase a subscription, or contact us for support.</li>
                            <li><strong>Usage Information:</strong> We may collect information about your use of OneClick OMS, such as the features you access, the pages you view, and the actions you take within the app.</li>
                            <li><strong>Device Information:</strong> We may collect information about the device you use to access OneClick OMS, such as the operating system, device model, and IP address.</li>
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
                        <p>We may use the information we collect from you for the following purposes:</p>
                        <ul className="list-disc pl-5">
                            <li>To provide and improve our app: We use the information to enhance the functionality and performance of OneClick OMS, and to personalize your experience.</li>
                            <li>To communicate with you: We use your email address and phone number to send you updates and notifications about OneClick OMS, and to respond to your inquiries and requests.</li>
                            <li>To comply with legal obligations: We may use your information to comply with applicable laws, regulations, and legal processes.</li>
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">3. Disclosure of Information</h2>
                        <p>We do not share your personal information with third parties except as described below:</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Service Providers:</strong> We may share your information with service providers who perform functions on our behalf, such as payment processing, customer support, and email delivery.</li>
                            <li><strong>Business Transfers:</strong> We may share your information in connection with a merger, acquisition, or sale of our business or assets.</li>
                            <li><strong>Legal Obligations:</strong> We may share your information to comply with applicable laws, regulations, and legal processes.</li>
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">4. Security</h2>
                        <p>We take reasonable measures to protect the security of your personal information, including the use of encryption and secure server facilities. However, we cannot guarantee the security of your information, and we are not liable for any unauthorized access to or use of your information.</p>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                        <p>We retain your personal information for as long as necessary to provide you with the app and for the purposes described in this Privacy Policy. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">6. Your Choices</h2>
                        <p>You may update or delete your personal information at any time by contacting us at <a href="mailto:support@oneclickoms.com." className=' font-bold text-sky'>support@oneclickoms.com</a> Please note that we may be required to retain certain information for legal or administrative purposes.</p>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">7. Changes to Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. If we make material changes to the Privacy Policy, we will notify you by email or by posting a notice in OneClick OMS. Your continued use of OneClick OMS after any such changes shall constitute your consent to such changes.</p>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@oneclickoms.com." className=' font-bold text-sky'>support@oneclickoms.com</a>  </p>
                    </div>

                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-4">9. About Us</h2>
                        <p>More information about us can be found <a href="#">here</a>.</p>
                        <p>We care about your privacy, and we are committed to being transparent about our data practices. Thank you for using OneClick OMS!</p>
                    </div>



                </div>
            </section>
        </section>
    )
}

export default page