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
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import { FaPhone } from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Loading from "./Loading";



export default function Home() {
  const img = [backgroundImage, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5, backgroundImage6, backgroundImage7]

  const [num, setNum] = useState(0)

  const ImageRotator = () => {


    useEffect(() => {
      const intervalId = setInterval(() => {
        setNum((prevIndex) => (prevIndex + 1) % img.length);
      }, 4000); // Change image every 500ms
      return () => clearInterval(intervalId); // Clean up on unmount
    }, [img.length])

  }

  ImageRotator()
  // setInterval(Imageslider,850);



  // useEffect(()=>{
  //   setNum(intervalId)
  // }, intervalId)



  return (
    <Suspense fallback={<Loading />}>
    <main className=" main">
      <Navbar />
      <div className="hero_main hidden md:block">
        {/* <div className="container ">
          <div className="hero-container">
            <div className="hero-text">testing</div>
          </div>

        </div> */}



      </div>
      <div className="hero_main_mob" style={{
        backgroundImage: `url(${img[num].src})`,
        backgroundColor: 'black',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
            <Link  className ="phone-icon" href="tel:+233 543645082" target="_blank"><IconContext.Provider value={{ color: 'white', size: '40px', marginTop:'40px' }}> <div className="fon-icon"><FaPhone /></div> </IconContext.Provider ><p>Contact us</p> </Link>

          </div>
        </div>


      </div>
      <Socials />


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
      <div className="spacer"></div>
      {/* <Hero/> */}
      <Footer />
    </main>
    </Suspense>
  );
}
