import React from "react";
import Link from "next/link";
import Image from "next/image";
import Lp2 from "../../public/asset/images/landing_page/landing-image2.png";

const VrDiv = () => {
  return (
    <section className="vrDiv">
      <div className="container img-fluid">
        <div className="position-relative">
          <Image className="img-fluid w-100" src={Lp2} alt="..." />

          <div className="card vrCard border-0">
            <div className="vrHeader category">Development</div>
            <div className="card-body">
              <h2 className="card-title vrCardTitleFont">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h2>
              <p className="card-text vrCardTextFont">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </p>
              <Link href="/singleBlog" legacyBehavior>
                <a className=" vrButton">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VrDiv;