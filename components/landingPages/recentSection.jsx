import React from "react";
import Link from "next/link";
import Image from "next/image";
import Lp3 from "../../public/asset/images/landing_page/landing-image3.png";
import Lp4 from "../../public/asset/images/landing_page/landing-image4.png";
import Lp5 from "../../public/asset/images/landing_page/landing-image5.png";
import Lp6 from "../../public/asset/images/landing_page/landing-image6.png";

const posts = [
  {
    category: "Development",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    description:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.",
    image: Lp3,
    link: "/blog",
  },
  {
    category: "Travel",
    title: "8 Rules of Travelling In Sea You Need To Know",
    description:
      "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs",
    image: Lp4,
    link: "/blog",
  },
  {
    category: "Development",
    title: "How to build strong portfolio and get a Job in UI/UX",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional",
    image: Lp5,
    link: "/blog",
  },
  {
    category: "Sports",
    title: "How to Be a Professional Footballer in 2023",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure",
    image: Lp6,
    link: "/blog",
  },
];
const RecentSection = ({ title, viewAllLink, posts }) => {
  return (
    <section className="recentSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <h1 className="recentHeading mb-0">{title}</h1>
          </div>
          <div className=" col-4 text-end ">
          <Link href={viewAllLink} legacyBehavior>
              <a className="recentButton">View All</a>
            </Link>
          </div>
        </div>
        <div className="recentBelowSection">
          <div className="horizontalCard desktop-only">
            <div className="card mb-3 border-0">
              <div className="row">
                <div className="col-md-7">
                  <Image
                    src={posts[0].image}
                    className="card-img img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-5">
                  <div className="horizontalHeader">{posts[0].category}</div>
                  <div className="card-body">
                    <h2 className="card-title recentHeadingFont">
                      {posts[0].title}
                    </h2>
                    <p className="card-text recentTextFont">
                      {posts[0].description}
                    </p>
                    <Link href={posts[0].link} legacyBehavior>
                      <a className=" HorizontalCardButton">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myRecentCard">
            <div className="row">
              {posts.slice(1).map((post, index) => (
                <div key={index} className="col-md-4">
                  <div className="card border-0 customRecentCard">
                    <Image
                      className="card-img-top img-fluid"
                      src={post.image}
                      alt="Card cap"
                    />
                    <div className="recentHeader">{post.category}</div>
                    <div className="card-body">
                      <h2 className="card-title recentCardHeading">
                        {post.title}
                      </h2>
                      <p className="card-text recentCardText">
                        {post.description}
                      </p>
                      <Link href={post.link} legacyBehavior>
                        <a className="recentAnchor">Read More...</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
    return(
        <RecentSection
        title="Our Recent Post"
        viewAllLink="/blog"
        posts={posts}
      />
    );
};
export default App;