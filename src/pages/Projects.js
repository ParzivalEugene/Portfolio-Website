import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

const Projects = () => {
  return (
    <>
      <Navbar active_tab="projects" />
      <ProjectsSection />
    </>
  );
};

export default Projects;