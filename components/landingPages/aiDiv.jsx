import React from "react";
import Link from "next/link";
import Image from "next/image";
import Lp1 from "../../public/asset/images/landing_page/landing-image1.png";

const AiDiv = () => {
  return (
    <section className="aiDiv">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <div className="mt-4 aiGroup">
              <h1 className=" aiHeading">How AI will Change the Future</h1>
              <p className="lead">
                The future of AI will see home robots having enhanced
                intelligence, increased capabilities, and becoming more personal
                and possibly cute. For example, home robots will overcome
                navigation, direction{" "}
              </p>
              <Link href="/blog" legacyBehavior>
               <a className=" aiButton">Read More</a> 
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <Image className="img-fluid" src={Lp1} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AiDiv;