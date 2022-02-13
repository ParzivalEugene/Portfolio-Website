import React from 'react';

import "../AboutSection/AboutSection.scss"
import "./ProjectsSection.scss"
import {ProjectsData} from "../../data/data";

const ProjectsSection = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">Projects</h1>
      {ProjectsData.map(({title, projects}, index) => (
        <div className="project-section-container" key={index}>
          <h2 className="skills-header">{title}</h2>
          <div className={projects.length > 1 ? "project-cards-container" : "project-cards-container__one-item"}>
            {projects.map(({title, description, image, tags, website, source}, key) => (
              <div className="project-card" key={key}>
                <img className="project-card-banner" src={image} alt="ProjectBanner"/>
                <div className="project-card-info-container">
                  <div className="project-card-header-container">
                    <h2 className="skills-header">{title}</h2>
                    <p className="project-card-text">{description}</p>
                  </div>
                  <div className="project-card-stack-buttons-container">
                    <div className="project-card-stack-container">
                      <h3 className="project-card-stack-header">Stack</h3>
                      <div className="project-card-tags">
                        {tags.map((tag, i) => (
                          <p className="project-card-text" key={i}>{tag}</p>
                        ))}
                      </div>
                    </div>
                    <div className={source.length === 0 ?
                      "project-card-buttons-container__one-item" :
                      "project-card-buttons-container"}>
                      <a
                        href={website}
                        className="project-card-button"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Website
                      </a>
                      {source && <a
                        href={source}
                        className="project-card-button"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Source Code
                      </a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;