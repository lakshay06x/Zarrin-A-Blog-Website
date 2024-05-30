import React from "react";
import Header from "../components/includes/header/header";
import Footer from "../components/includes/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import PopularPostSection from "../components/landingPages/populaarPostSection";
import RecentSection from "../components/landingPages/recentSection";
import AiDiv from "../components/landingPages/aiDiv";
import VrDiv from "../components/landingPages/vrDiv";

function Landing() {
  return (
    <div>
      <Header />
      <AiDiv />
      <VrDiv />
      <RecentSection/>
      <PopularPostSection />
      <Footer />
    </div>
  );
}

export default Landing;
