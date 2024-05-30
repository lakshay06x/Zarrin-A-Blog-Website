/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Header from "../components/includes/header/header";
import Footer from "../components/includes/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import Ap from "../public/asset/images/about.png";
import CardSection from "../components/about/cards";


function about() {
  return (
    <div>
      <Header/>
      <section className="aboutUs">
        <div className="aboveHeading">ABOUT US</div>
        <h1 className="aboutHeading">Creative Blog Writting and</h1>
        <h1 className="belowHeading">publishing site</h1>
        <div className="aboutText">
            <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
                to
                corporate strategy foster </div>
            <div>collaborative thinking to further the overall value proposition. Organically grow the holistic world
                view
                of disruptive innovation via workplace</div>
            <div>diversity and empowerment.</div>
        </div>
    </section>
   
    <div className="text-center aboutImg ">
        <Image className="img-fluid" src={Ap} alt=""/>
    </div>
    <section className="container  belowImgContainer">
        <p className="containerHeading">HOW WE WORK</p>
        <h1 className=" col-md-5 belowImgHeading">I will show you how our team works</h1>
        <p className="belowImgP">Bring to the table win-win survival strategies to ensure</p>
        <p className="belowP">perfect articles.</p>
    </section>
    <CardSection/>

      <Footer/>
    </div>
  );
}


export default about;