import Static from "../components/Static";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import TimeLine from "../components/TimeLine";

function Landing() {


  return (
    <div>
     <HeroSection />
      <Static/>
      <Feature/>
      <Testimonial />
      <Hero />
      <TimeLine />
    </div>
  );
}

export default Landing;
