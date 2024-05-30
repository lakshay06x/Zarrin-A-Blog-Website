import React from "react";
import PopularPostsSection from "../popularCard";
import Link from "next/link";
import Lp7 from "../../public/asset/images/landing_page/landing-image7.png";
import Lp8 from "../../public/asset/images/landing_page/landing-image8.png";
import Lp9 from "../../public/asset/images/landing_page/landing-image9.png";
import Lp10 from "../../public/asset/images/landing_page/landing-image10.png";
import Lp11 from "../../public/asset/images/landing_page/landing-image11.png";
import Lp12 from "../../public/asset/images/landing_page/landing-image12.png";

const popularPosts = [
  {
    category: 'Travel',
    title: 'Train Or Bus Journey? Which one suits?',
    description: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and...',
    image: Lp7,
    link: '/blog',
  },
  {
    category: 'Development',
    title: 'Best Website to research for your next project',
    description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional...',
    image: Lp8,
    link: '/blog',
  },
  {
    category: 'Sports',
    title: 'How to Be a Dancer in 2023 with proper skills?',
    description: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure...',
    image: Lp9,
    link: '/blog',
  },
  {
    category: 'Travel',
    title: 'Who is the best singer on chart? Know him?',
    description: 'Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and...',
    image: Lp10,
    link: '/blog',
  },
  {
    category: 'Development',
    title: 'How to start export import business from home?',
    description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional...',
    image: Lp11,
    link: '/blog',
  },
  {
    category: 'Sports',
    title: 'Make some drinks with chocolates and milk',
    description: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Survival strategies to ensure...',
    image: Lp12,
    link: '/blog',
  },
];
const App = () => {
    return(
      <section className="popularPost">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 ">
            <h1 className="popularHeading mb-0">Popular Posts</h1>
          </div>
          <div className="col-4 text-end ">
          <Link href="/blog" legacyBehavior>
            <a className=" popularButton">View All</a>
          </Link>
          </div>
        </div>
      </div>
      <PopularPostsSection
      title="Popular Post"
      viewAllLink="/blog"
      posts={popularPosts}
    />
    </section>
    );
};
export default App;