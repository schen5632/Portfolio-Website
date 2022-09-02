import React from "react";
import "./portfolio.css";
import IMG from "../../assets/Capture.PNG";

const data = [
  {
    id: 1,
    image: IMG,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG,
    github: "https://github.com",
    demo: "https://github.com",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="img"></img>
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
