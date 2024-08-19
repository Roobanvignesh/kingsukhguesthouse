import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import BookingForm from './components/BookingForm/BookingForm';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import MapComponent from './components/MapComponent/MapComponent';
import Navbar from './components/Navbar/Navbar';
import QuickContact from './components/QuickContact/QuickContact';
import Room from './components/Room/Room';
import Service from './components/Services/Service';
import Home from './pages/Home/Home';


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Room' element={<Room/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route element={<BookingForm/>}/>
        <Route path='/Contact' element={<ContactForm/>}/>
        <Route element={<MapComponent/>}/>
        <Route element={<Footer/>}/>
        <Route element={<QuickContact/>}/>
      </Routes>
    </div>
  )
}

export default App

