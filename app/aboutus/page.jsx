// pages/aboutus.js
import AboutView from '@/components/AboutView';
import Basehero from '@/components/Basehero';
import React from 'react';

const AboutUs = () => {
    return (
        <section>
            <Basehero title={"About Us"} />

            <AboutView
                image={"/assets/images/about-1.png"}
                title={"About Us"}
                description={[
                    `At <span style="color: #078DEE; font-weight: 700;">Oneclick OMS</span>, we empower online marketplace sellers by providing a seamless solution to manage their e-commerce operations efficiently and profitably. Our Order Management System is designed to address the most critical pain points faced by sellers across multiple platforms like <span style="color: #078DEE; font-weight: 700;">Meesho, Flipkart, GlowRoad, Myntra, and Ajio,</span> allowing them to streamline their business operations from a single window.`,
                    `Our mission is simple: <span style="color: #078DEE; font-weight: 700;">To simplify online selling, enhance profitability, and reduce operational complexity.</span> We understand the challenges of managing multiple sales channels, keeping track of inventory, handling returns, calculating profit and loss, and executing business tasks in an increasingly competitive environment.That’s why we’ve developed a comprehensive OMS that enables sellers to stay on top of their business with ease.`,
                ]}
            />

            <AboutView
                image={"/assets/images/about-2.png"}
                title={"Why Choose Us?"}
                description={[
                    `<span style="color: #1C252E">Unified Platform:</span> Manage all your marketplace orders, inventory, and payments from a single dashboard.`,
                    `<span style="color: #1C252E">Inventory Control:</span> Real-time stock updates to prevent over-selling or stockouts.`,
                    `<span style="color: #1C252E">Return Management:</span> Automate return handling and reconciliation for faster resolutions.`,
                    `<span style="color: #1C252E">Profit & Loss Insights:</span> Get accurate, one-click reports on your profitability.`,
                    `<span style="color: #1C252E">Time-saving Automations:</span> Spend less time on manual tasks and focus more on growing your business.`,
                    `With a focus on user-friendly design, scalability, and advanced analytics, we aim to be the trusted partner for every e-commerce seller who wants to grow and succeed in the digital marketplace. Whether you’re a small business or a large-scale seller, our OMS is built to help you scale with confidence.`,
                ]}
                reverse={true}
            />

        </section>
    );
};

export default AboutUs;
