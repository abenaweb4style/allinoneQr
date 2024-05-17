"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import backgroundImage from "./images/44.jpg"
import backgroundImage2 from "./images/17.jpg"
import backgroundImage3 from "./images/44.jpg"
import { useEffect, useState } from "react";
import Link from "next/link";



export default function Home() {
  const img = [backgroundImage, backgroundImage2]

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
    <main className="">
      <Navbar />
      <div className="hero_main hidden md:block">
        <div className="container">
          <div>testing</div>
        </div>
        


      </div>
      <div className="hero_main_mob" style={{
        backgroundImage: `url(${img[num].src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div>testing</div>
        </div>


      </div>
      <Socials />

      <div className='map-wrapper'>


        <div className='google-map'>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.189688085716!2d-0.11913672612612175!3d5.685704694295934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d7edf0feff9%3A0xb700798e6efd9c0d!2s4style%20Clothing!5e0!3m2!1sen!2sgh!4v1715961357638!5m2!1sen!2sgh" 
            style={{ border: '0' }} allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='map-text'>
            <h3>4style Clothing</h3>
            <p>Official Store </p>
            <Link target='_blank' href='https://www.google.com/maps/place/Nagla+Cl,+Accra/@5.592356,-0.256042,16z/data=!4m6!3m5!1s0xfdf99b1ea6b313d:0xca8f465a57b43f0a!8m2!3d5.5923556!4d-0.256042!16s%2Fg%2F11f5w8xg_l?hl=en&entry=ttu'>Get Directions</Link>

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
            <Link target='_blank' href='https://www.google.com/maps/place/Nagla+Cl,+Accra/@5.592356,-0.256042,16z/data=!4m6!3m5!1s0xfdf99b1ea6b313d:0xca8f465a57b43f0a!8m2!3d5.5923556!4d-0.256042!16s%2Fg%2F11f5w8xg_l?hl=en&entry=ttu'>Get Directions</Link>

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
            <Link target='_blank' href='https://www.google.com/maps/place/Nagla+Cl,+Accra/@5.592356,-0.256042,16z/data=!4m6!3m5!1s0xfdf99b1ea6b313d:0xca8f465a57b43f0a!8m2!3d5.5923556!4d-0.256042!16s%2Fg%2F11f5w8xg_l?hl=en&entry=ttu'>Get Directions</Link>

          </div>
        </div>
      </div>
      <div className="spacer"></div>
      {/* <Hero/> */}
    </main>
  );
}
