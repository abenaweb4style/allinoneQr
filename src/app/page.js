"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import backgroundImage from "./images/44i.jpg"
import backgroundImage2 from "./images/17i.jpg"
import backgroundImage3 from "./images/8ci.jpg"
import backgroundImage4 from "./images/8O3A8822-Edit.jpg"
import backgroundImage5 from "./images/33i.jpg"
import backgroundImage6 from "./images/53i.jpg"
import backgroundImage7 from "./images/67i.jpg"
import { Suspense, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaPhone } from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Loading from "./Loading";



export default function Home() {
  const img = [backgroundImage, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5, backgroundImage6, backgroundImage7]

  const [num, setNum] = useState(0);
  const timeoutRef = useRef(null);
  const imgCount = img.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setNum((prevIndex) => (prevIndex + 1) % imgCount);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [num, imgCount]);

  return (
    <Suspense fallback={<Loading />}>
    <main className=" main"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay for readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.85)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      {/* <div className="hero_main hidden md:block"> */}
        {/* <div className="container ">
          <div className="hero-container">
            <div className="hero-text">testing</div>
          </div>

        </div> */}



      {/* </div> */}
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Sliding Images */}
        <div className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${num * 100}%)` }}>
          {img.map((image, idx) => (
            <div
              key={idx}
              className="w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0.85)',
                transition: 'transform 4s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          ))}
        </div>
        {/* Permanent Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'rgba(0,0,0,0.24)' }} />
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="container hero-container">
            <div className="hero-text">
              <div className="discount">
                <p>Up to</p>
                <div className="discount-text">
                  <p className="bold">50%</p>
                  <p className="bold">Discount</p>
                </div>
                <p>On</p>
                <p>Local purchases</p>
              </div>
              <Link href="https://4stylegh.store/" target="_blank"><button> Visit Our Online Shop</button></Link>
              <Link className ="phone-icon" href="tel:+233 543645082" target="_blank"><IconContext.Provider value={{ color: 'white', size: '40px', marginTop:'40px' }}> <div className="fon-icon"><FaPhone /></div> </IconContext.Provider ><p>Contact us</p> </Link>
            </div>
          </div>
        </div>
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
          {img.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setNum(idx)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${num === idx ? 'bg-white scale-125 shadow-lg' : 'bg-gray-400 opacity-60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* <Socials /> */}

      {/* Explore 4style Header */}
      <div className="flex flex-col items-center mt-12 mb-8">
        <h2
          className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-gray-600"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '0.2em', textShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
        >
          Explore 4style
        </h2>
        <div className="w-16 h-1 mt-3 bg-gray-300 rounded-full"></div>
      </div>

      {/* Adieyiee Section Label */}
      <div className="flex flex-col items-center mb-[-8px]">
        <span
          className="text-xl md:text-2xl italic font-bold text-gray-500 tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(80,80,80,0.08)' }}
        >
          Adieyie
        </span>
        <div className="w-12 h-0.5 mt-1 bg-gray-200 rounded-full"></div>
      </div>

      {/* Adieyiee Image Section */}
      <div className="w-full flex justify-center items-center py-8" style={{ position: 'relative' }}>
        <Link href="/adieyielinks" className="w-full flex justify-center items-center" style={{ position: 'relative', width: '80%' }}>
          <img
            src="/adieyiee.png"
            alt="Adieyiee"
            style={{ width: '100%', display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: '25px' }}
          />
          {/* Caret Icon */}
          <span style={{
            position: 'absolute',
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
      {/* End Adieyiee Image Section */}

      {/* Gallery Section Label */}
      <div className="flex flex-col items-center mb-[-8px]">
        <span
          className="text-xl md:text-2xl italic font-bold text-gray-500 tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(80,80,80,0.08)' }}
        >
          Gallery
        </span>
        <div className="w-12 h-0.5 mt-1 bg-gray-200 rounded-full"></div>
      </div>

      {/* Gallery Image Section */}
      <div className="w-full flex justify-center items-center py-8" style={{ position: 'relative' }}>
        <Link href="/gallerylinks" className="w-full flex justify-center items-center" style={{ position: 'relative', width: '80%' }}>
          <img
            src="/gallery.png"
            alt="Gallery"
            style={{ width: '100%', display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: '25px' }}
          />
          {/* Caret Icon */}
          <span style={{
            position: 'absolute',
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
      {/* End Gallery Image Section */}

      {/* Clothing Section Label */}
      <div className="flex flex-col items-center mb-[-8px]">
        <span
          className="text-xl md:text-2xl italic font-bold text-gray-500 tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(80,80,80,0.08)' }}
        >
          Clothing
        </span>
        <div className="w-12 h-0.5 mt-1 bg-gray-200 rounded-full"></div>
      </div>

      {/* Clothing Image Section */}
      <div className="w-full flex justify-center items-center py-8" style={{ position: 'relative' }}>
        <Link href="/clothinglinks" className="w-full flex justify-center items-center" style={{ position: 'relative', width: '80%' }}>
          <img
            src="/clothing.png"
            alt="Clothing"
            style={{ width: '100%', display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: '25px' }}
          />
          {/* Caret Icon */}
          <span style={{
            position: 'absolute',
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
      {/* End Clothing Image Section */}

      {/* Fabric Section Label */}
      <div className="flex flex-col items-center mb-[-8px]">
        <span
          className="text-xl md:text-2xl italic font-bold text-gray-500 tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(80,80,80,0.08)' }}
        >
          Fabric
        </span>
        <div className="w-12 h-0.5 mt-1 bg-gray-200 rounded-full"></div>
      </div>

      {/* Fabric Image Section */}
      <div className="w-full flex justify-center items-center py-8" style={{ position: 'relative' }}>
        <Link href="/fabriclinks" className="w-full flex justify-center items-center" style={{ position: 'relative', width: '80%' }}>
          <img
            src="/fabric.png"
            alt="Fabric"
            style={{ width: '100%', display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', borderRadius: '25px' }}
          />
          {/* Caret Icon */}
          <span style={{
            position: 'absolute',
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
      {/* End Fabric Image Section */}

      <div className='map-wrapper '>
        <div className="container">
          <h1 className=""> Drop by one of our 4style Clothing outlets</h1>
        </div>
        <div className='google-map map-height'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.189688085716!2d-0.11913672612612175!3d5.685704694295934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d7edf0feff9%3A0xb700798e6efd9c0d!2s4style%20Clothing!5e0!3m2!1sen!2sgh!4v1715961357638!5m2!1sen!2sgh"
            style={{ border: '0' }} allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='map-text'>
            <h3>4style Clothing</h3>
            <p>Official Store </p>
            <Link target='_blank' href='https://www.google.com/maps/dir//Lancaster+Accra,+Liberation+Road,+Accra/@5.5934084,-0.1807772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf9afa0e163461:0xf035cab6e6449125!2m2!1d-0.180741!2d5.5934003?hl=en&entry=ttu'>Get Directions</Link>
            <Link  className ="phone-ico" href="tel:+233 543645082"  target="_blank"><IconContext.Provider value={{ color: 'red', size: '10px', marginTop:'10px' }}> <span className="fon-ico"><FaPhone /></span> </IconContext.Provider ><p>4style Clothing</p> </Link>
            <Link  className ="phone-ico" href="tel:+233 302511909" target="_blank"><IconContext.Provider value={{ color: 'red', size: '10px', marginTop:'10px' }}> <span className="fon-ico"><FaPhone /></span> </IconContext.Provider ><p>4style Clothing Office</p> </Link>
            <Link  className ="phone-ico" href="https://wa.me/+233543645082" target="_blank"><IconContext.Provider value={{ color: 'green', size: '30px', marginTop:'10px', marginRight:"" }}> <span className="fon-ico-wa"><FaWhatsapp /></span> </IconContext.Provider ><p>Whastsapp 4style</p> </Link>
          </div>
        </div>
        <div className='google-map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8212785584456!2d-0.1833521261269684!3d5.59340839438738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9afa0e163461%3A0xf035cab6e6449125!2sLancaster%20Accra!5e0!3m2!1sen!2sgh!4v1715960113674!5m2!1sen!2sgh"
            style={{ border: '0' }} allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='map-text'>
            <h3>Lancaster Hotel, African Store</h3>
            <p>Lancaster </p>
            <Link target='_blank' href='https://www.google.com/maps/dir//Lancaster+Accra,+Liberation+Road,+Accra/@5.5934084,-0.1807772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf9afa0e163461:0xf035cab6e6449125!2m2!1d-0.180741!2d5.5934003?hl=en&entry=ttu'>Get Directions</Link>
            <Link  className ="phone-ico" href="tel:+233 242050500" target="_blank"><IconContext.Provider value={{ color: 'red', size: '10px', marginTop:'10px' }}> <span className="fon-ico"><FaPhone /></span> </IconContext.Provider ><p>Auntie Charlotte</p> </Link>
          </div>
        </div>
        <div className='google-map'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127063.52225777223!2d-0.3123190566406309!3d5.606095500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1fff72b87d%3A0xff2fe8ba5dfa0561!2sKotoka%20International%20Airport%20-%20Accra!5e0!3m2!1sen!2sgh!4v1715962032642!5m2!1sen!2sgh"
            style={{ border: '0' }} allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='map-text'>
            <h3>Airport Terminal 3</h3>
            <p>Maykrams Clothing </p>
            <Link target='_blank' href="https://www.google.com/maps/dir//Kotoka+International+Airport+-+Accra,+KA+PMB+36+KIA,+Accra/@5.606095,-0.168123,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf9b1fff72b87d:0xff2fe8ba5dfa0561!2m2!1d-0.1681235!2d5.6060955?hl=en&entry=ttu">Get Directions</Link>
            <Link  className ="phone-ico" href="tel:+233 501193032" target="_blank"><IconContext.Provider value={{ color: 'red', size: '10px', marginTop:'10px' }}> <span className="fon-ico"><FaPhone /></span> </IconContext.Provider ><p>Keskim Clothing</p> </Link>

          </div>
        </div>
      </div>
    </div>
    </main>
    </Suspense>
  );
}
