import React from 'react';
import largeImage from '../../assets/large.jpg';
import room1Image from '../../assets/room1.jpg';
import smallImage from '../../assets/small.jpg';
import './Room.css';

const Room = () => {
    const rooms = [
        {
            image: largeImage,
            title: "Spacious Serenity Suite",
            desc1: "Indulge in luxury and sample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
            desc2: "Starting from ",
            rate: "Rs. 1500/night",
            star: "4.3",
            heart: "150"
        },
        {
            image: smallImage,
            title: "Cozy Haven Room",
            desc1: "Escape to comfort in our Cozy Haven Room, a retreat for the soul, a snug retreat designed for intimate relaxation.",
            desc2: "Starting from ",
            rate: "Rs. 1000/night",
            star: "4.4",
            heart: "180"
        },
        {
            image: room1Image,
            title: "Double Suite room",
            desc1: "Our Double suite offers all the comforts of home with the added touch of hotel luxury, featuring stunning views.",
            desc2: "Starting from ",
            rate: "Rs. 2000/night",
            star: "4.5",
            heart: "200"
        }
    ];

    const handleWhatsAppClick = () => {
        const phoneNumber = '+919007062180'; // WhatsApp number with country code
        const message = encodeURIComponent('Hello, I would like to make a reservation.');
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <div className='room-container' id='rooms'>
            <h2 className='section-title'>Our Rooms</h2>
                <div className='room-grid'>
                    {rooms.map((data, index) => (
                        <div key={index} className='room-card'>
                            <div className="room-img-container">
                                <img src={data.image} alt={data.title} />
                                <div className='overlay'>
                                    <div className='rating'>
                                        <span className='star'>⭐</span>{data.star}
                                    </div>
                                    <div className='likes'>
                                        <span className='heart'>❤️</span>{data.heart}
                                    </div>
                                </div>
                            </div>
                            <div className="room-info">
                                <h3 className='room-title'>{data.title}</h3>
                                <p className='room-desc'>{data.desc1}</p>
                                <div className='room-desc2-rate'>
                                    <p className='room-desc2'>{data.desc2}</p>
                                    <p className='room-rate'>{data.rate}</p>
                                </div>
                            </div>
                            <button className='btn-room' onClick={handleWhatsAppClick}>Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Room;
