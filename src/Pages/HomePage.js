import React from "react";
import HeroSection from "../HomeComponents/HeroSection";
import HomeSec2 from "../HomeComponents/HomeSec2";
import HomeSec3 from "../HomeComponents/HomeSec3";
import HomeSec4 from "../HomeComponents/HomeSec4";
import HomeSec5 from "../HomeComponents/HomeSec5";
import HomeSec6 from "../HomeComponents/HomeSec6";
import HomeSec7 from "../HomeComponents/HomeSec7";
import HomeSec8 from "../HomeComponents/HomeSec8";
import HomeSec9 from "../HomeComponents/HomeSec9";
import HomeSec10 from "../HomeComponents/HomeSec10";

function HomePage() {
  return (
    <section className="">
    <div className="desktop-fallback hidden lg:block">
      Please use mobile to view this website

    </div>
    <div className="">
      <HeroSection></HeroSection>
      <HomeSec2></HomeSec2>
      <HomeSec3></HomeSec3>
      <HomeSec4></HomeSec4>
      <HomeSec5 />
      <HomeSec6 />
      <HomeSec7 />
      <HomeSec8 />
      <HomeSec9 />
      <HomeSec10 />
    </div>
    </section>
  );
}

export default HomePage;
