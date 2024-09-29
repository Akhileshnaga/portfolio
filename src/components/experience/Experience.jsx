import React from "react";
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">What Skills I Have </h5>
      <h2 className="text-light">My Experience</h2>
      <div className="container experience__container">
        <div className="experience__Frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details" >
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>HTML/CSS</h5>
              </div>
              <progress value="90" max="100">
                95%
              </progress>
            </article>
            <article className="experience__details" >
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5>Python</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details" >
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5>SQL/PostGreSql</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details" >
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5>C/C++</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5 title="Vanilla, ES5, ES6, Jquery">JavaScript</h5>
              </div>
              <progress value="40" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5>ReactJs</h5>
              </div>
              <progress value="55" max="100"></progress>
            </article>
            <article className="experience__details" >
              
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Software Tools</h3>
          <div className="experience__content">
            <article className="experience__details" >
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>MongoDB</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>GitHub</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Key Courses</h3>
          <div className="experience__content">
            <article className="experience__details" title="Edição e tratamento">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h5>Data Structures</h5>
              </div>
              <progress value="75" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>Operating System</h5>
              </div>
              <progress value="85" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>Computer Vision</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsPatchCheckFill  className="experience__details-icon" />
                <h5>DBMS</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
