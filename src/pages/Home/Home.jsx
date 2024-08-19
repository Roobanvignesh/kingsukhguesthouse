import React from 'react';
import About from '../../components/About/About';
import BookingForm from '../../components/BookingForm/BookingForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import MapComponent from '../../components/MapComponent/MapComponent';
import QuickContact from '../../components/QuickContact/QuickContact';
import Room from '../../components/Room/Room';
import Service from '../../components/Services/Service';

const Home = () => {
    return (
        <div>
        <Header/>
        <About/>
        <Room/>
        <Service/>
        <Gallery/>
        <BookingForm/>
        <ContactForm/>
        <MapComponent/>
        <Footer/>
        <QuickContact/>
        </div>
    )
};

export default Home
