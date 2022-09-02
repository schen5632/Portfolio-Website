import React from "react";
import "./experience.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiHtml5 />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3 />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJavascript1 />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiReact />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiPython />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <DiJava />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <DiNodejs />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <SiExpress />
              <h4>Express.js</h4>
            </article>
            <article className="experience__details">
              <DiMongodb />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
