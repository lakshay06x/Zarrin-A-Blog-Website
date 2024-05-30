import React from "react";
import Link from "next/link";
import Image from "next/image";

const PopularPostsSection = ({posts }) => {
  return (
    <section className="popularPost">
      <div className="container">
        <div className="myPopularCard">
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 customPopularCard">
                  <Image
                    className="card-img-top img-fluid"
                    src={post.image}
                    alt="Card cap"
                  />
                  <div className="popularHeader">{post.category}</div>
                  <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.description}</p>
                    {post.link ? (
                      <Link href={post.link} legacyBehavior>
                        <a className="popularAnchor">Read More...</a>
                      </Link>
                    ) : (
                      <span className="popularAnchor">Read More...</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularPostsSection;