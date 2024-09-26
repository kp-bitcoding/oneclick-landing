import Basehero from '@/components/Basehero'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <section>
            <Basehero
                title={"Terms and Conditions"}
            />
            <section>
                <div className='container'>
                    <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
                    <p>&quot;OneClick OMS&quot; refers to the OMS app developed by Bhadar Technologies Private Limited.</p>
                    <p>&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;, or &quot;Bhadar Technologies Private Limited&quot; refers to Bhadar Technologies Private Limited, a company based in India.</p>
                    <p>&quot;You&quot; or &quot;User&quot; refers to any individual or entity who uses OneClick OMS app.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">2. Use of OneClick OMS</h2>
                    <p>OneClick OMS is a mobile application designed to help users manage their orders and inventory.</p>
                    <p>You may use OneClick OMS for personal or commercial use as long as it does not violate our terms and conditions or any applicable laws.</p>
                    <p>By using OneClick OMS, you agree to provide accurate and complete information.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">3. No Refund Policy</h2>
                    <p>All purchases made through OneClick OMS are non-refundable. We do not offer refunds or exchanges for any reason.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">4. Intellectual Property</h2>
                    <p>OneClick OMS and all its content, including but not limited to text, images, graphics, logos, and software, are the property of Bhadar Technologies Private Limited or its licensors.</p>
                    <p>You may not use OneClick OMS or its content for any commercial purpose without our prior written consent.</p>
                    <p>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from OneClick OMS.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">5. Privacy Policy</h2>
                    <p>We take your privacy seriously. Our Privacy Policy can be found at <Link href='/privacy-policy' className=' font-semibold text-sky'>click here</Link>.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">6. Disclaimer of Warranties</h2>
                    <p>OneClick OMS is provided on an &quot;as is&quot; and &quot;as available&quot; basis.</p>
                    <p>We make no warranties or representations of any kind, express or implied, as to the operation of OneClick OMS or the information, content, materials, or products included in it.</p>
                    <p>We disclaim all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">7. Limitation of Liability</h2>
                    <p>We will not be liable for any damages of any kind arising from the use of OneClick OMS, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
                    <p>We will not be liable for any errors, omissions, interruptions, defects, delays, computer viruses, or any other harmful components.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">8. Governing Law</h2>
                    <p>These terms and conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising from the use of OneClick OMS shall be subject to the jurisdiction of the courts located in India.</p>

                    <h2 className="text-2xl font-bold mt-6 mb-4">9. Changes to Terms and Conditions</h2>
                    <p>We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of OneClick OMS after any such changes shall constitute your consent to such changes.</p>
                </div>
            </section>
        </section>
    )
}

export default Page
