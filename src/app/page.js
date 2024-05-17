"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import backgroundImage from "./images/44.jpg"
import backgroundImage2 from "./images/17.jpg"
import backgroundImage3 from "./images/44.jpg"
import { useEffect, useState } from "react";



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
      <div className="spacer"></div>
      {/* <Hero/> */}
    </main>
  );
}
