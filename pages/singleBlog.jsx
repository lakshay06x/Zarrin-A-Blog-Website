import React from "react";
import Header from "../components/includes/header/header";
import Footer from "../components/includes/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import MainSection from "../components/singleBlog/mainSection";
import PopularPostSection from "../components/singleBlog/post";

function singleBlog() {
  return (
    <div>
      <Header />
      <MainSection />
      <PopularPostSection />
      <Footer />
    </div>
  );
}

export default singleBlog;
