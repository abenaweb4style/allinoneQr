import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className="hero_main">
        <div className="container">
          <div>testing</div>
        </div>


      </div>
      <Socials/>
      <div className="spacer"></div>
      {/* <Hero/> */}
    </main>
  );
}
