import React from 'react';
import { assets } from '../../assets/assets';
import './About.css';

const About = () => {
    const data = [
        {
            title: "The Best Holiday Start Here!",
            desc1: "Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.",
            desc2: "Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156",
            desc3: "Contact us: +91 9007062180 ",
            cover: "./../../assets/out.jpg"
        }
    ];

    const handleWhatsAppClick = () => {
        const phoneNumber = '+919007062180'; // WhatsApp number with country code
        const message = encodeURIComponent('Hello, I would like to make a reservation.');
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <section className="about" id="about">
                <h2 className="section_title">About me</h2>
                <div className="about_container">
                    <div className="left">
                        <img className='about_img' src={assets.out} alt="" />
                    </div>
                    <div className="right">
                        <div className="about_data">
                            {data.map((val, index) => (
                                <div key={index}>
                                    <h1>{val.title}</h1>
                                    <p>{val.desc1}</p>
                                    <h4>{val.desc2}</h4>
                                    <h4>{val.desc3}</h4>
                                    <button className="btn" onClick={handleWhatsAppClick}>Book Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
