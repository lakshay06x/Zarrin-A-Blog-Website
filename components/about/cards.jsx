import React from "react";
import Link from "next/link";

const cards = [
  {
    number: '01',
    title: 'Brainstorming',
    text: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated',
    link: '#'
  },
  {
    number: '02',
    title: 'Analysing',
    text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.'
  },
  {
    number: '03',
    title: 'News Publishing',
    text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
  }
];

const CardSection = () => {
  return (
    <section className="container cardContainer">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className={`card border-0 service-card ${index === 0 ? 'first' : ''}`}>
              <div className="card-header border-0">
                {card.number}
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>{card.title}</h3>
                </div>
                <div className="card-text">
                  {card.text}
                </div>
                {card.link && (
                  <Link href={card.link} legacyBehavior>
                    <a className="customLink">Learn More</a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default CardSection;
