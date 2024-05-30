import React from "react";
import PopularPostsSection from "../popularCard";
import Lp4 from "../../public/asset/images/landing_page/landing-image4.png";
import Lp5 from "../../public/asset/images/landing_page/landing-image5.png";
import Lp6 from "../../public/asset/images/landing_page/landing-image6.png";
import Lp7 from "../../public/asset/images/landing_page/landing-image7.png";
import Lp8 from "../../public/asset/images/landing_page/landing-image8.png";
import Lp9 from "../../public/asset/images/landing_page/landing-image9.png";
import Lp10 from "../../public/asset/images/landing_page/landing-image10.png";
import Lp11 from "../../public/asset/images/landing_page/landing-image11.png";
import Lp12 from "../../public/asset/images/landing_page/landing-image12.png";

const posts = [
  {
    image: Lp7,
    category: "Travel",
    title: "Train Or Bus Journey?Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and ",
    link: "/blog",
  },
  {
    image: Lp8,
    category: "Development",
    title: "Best Website to research for your next project",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional ",
    link: "/blog",
  },
  {
    image: Lp9,
    category: "Sports",
    title: "How to Be a Dancer in 2023 with proper skills?",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure ",
    link: "/blog",
  },
  {
    image: Lp10,
    category: "Travel",
    title: "Who is the best singer on chart?Know him?",
    description:
      "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and ",
    link: "/blog",
  },
  {
    image: Lp11,
    category: "Development",
    title: "How to start export import business from home?",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional ",
    link: "/blog",
  },
  {
    image: Lp12,
    category: "Sports",
    title: "Make some drinks with chocolates chocolates and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure ",
    link: "/blog",
  },
  {
    image: Lp4,
    category: "Travel",
    title: "Who is the best singer on chart?Know him?",
    description:
      "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and ",
    link: "/blog",
  },
  {
    image: Lp5,
    category: "Development",
    title: "How to start export import business from home?",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional ",
    link: "/blog",
  },
  {
    image: Lp6,
    category: "Sports",
    title: "Make some drinks with chocolates chocolates and milk",
    description:
      "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure ",
    link: "/blog",
  },
];


const App = () => {
    return(
        <PopularPostsSection
        title="Popular Post"
        viewAllLink="/blog"
        posts={posts}
      />
    );
};
export default App;