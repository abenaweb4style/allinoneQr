import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";



export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="hero_main hidden md:block">
        <div className="container">
          <div>testing</div>
        </div>


      </div>
      <div className="hero_main_mob md:hidden" style={{
        backgroundImage: `url(images/44.jpg)`,
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
