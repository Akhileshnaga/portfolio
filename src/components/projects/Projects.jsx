import React from "react";
import "./Projects.css";
import portfolio1 from "../../assests/portfolio1.jpg";
import portfolio2 from "../../assests/portfolio2.jpg";
import portfolio3 from "../../assests/portfolio3.jpg";
import portfolio4 from "../../assests/portfolio4.jpg";
import portfolio5 from "../../assests/portfolio5.png";
import portfolio6 from "../../assests/portfolio6.jpg";

// Data Array para preenhcer o portfolio
const projectsData = [
  {
    id: 1,
    image: portfolio1,
    title: "React-Admin-Dashboard",
    github: "https://github.com/Akhileshnaga/React-Admin-dashboard",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Brain-Tumor-Detection-using-CNN",
    github: "https://github.com/Akhileshnaga/Brain-Tumor-detection-using-CNN-",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Music Recommender",
    github: "https://github.com/Akhileshnaga/Projects",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Country-Onboarding-System",
    github: "https://github.com/Akhileshnaga/country-onboarding-system",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Blog-Website",
    github: "https://github.com/Akhileshnaga/Blog-System",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Portfolio",
    github: "https://github.com/Akhileshnaga/SME-Assignment",
  },
  
];

const Projects = () => {
  return (
    <section id="projects">
      <h5 className="text-light">My Recent Works</h5>
      <h2 className="text-light">Projects</h2>
      <div className="container projects__container">
        {projectsData.map(({ id, image, title, github}) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img src={image} className="image" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                
             </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

