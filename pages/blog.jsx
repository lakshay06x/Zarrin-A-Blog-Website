/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../components/includes/header/header";
import Footer from "../components/includes/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import PopularPostsSection from "../components/blog/post";


function blog() {
  return (
    <div>
      <Header />
      <section className="ourBlog">
      <div className="aboveBlogHeading">OUR BLOGS</div>
      <h1 className="blogHeading">Find our all blogs from here</h1>
      <div className="blogText">
        our blogs are written from very research research and well known writers
        writers so that we can provide{" "}
      </div>
      <div>
        you the best blogs and articles articles for you to read them all along
      </div>
    </section>

      <PopularPostsSection/>
      <Footer />
    </div>
  );
}


export default blog;
