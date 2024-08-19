import React from 'react';
import '../Header/Header.css';

const Header = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+919007062180'; // WhatsApp number with country code
        const message = encodeURIComponent('Hello, I would like to make a reservation.');
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <div className='header' id='home'>
                <div className='header-contents'>
                    <p>Simple - Yourself - Friendly</p>
                    <h2>Make Yourself At Home In our Guest House</h2>
                    <button className='btn' onClick={handleWhatsAppClick}>Book now</button>
                </div>
            </div>
        </>
    );
};

export default Header;
