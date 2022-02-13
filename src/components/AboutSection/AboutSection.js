import React from 'react';
import {links} from "../../data/data";
import {FaReact} from "react-icons/fa";
import ShapeAnimation from "../ShapeAnimation";
import {SiDjango, SiFigma, SiFlask, SiNextdotjs, SiPostgresql, SiThreedotjs} from "react-icons/si";
import {DiSass} from "react-icons/di";

import "./AboutSection.scss"

const AboutTextLink = (props) => (
  <a
    href={props.href}
    className="about-text-link"
    rel="noreferrer"
    target="_blank"
  >
    {props.text}
  </a>
)

const AboutLink = ({link, children}) => (
  <a
    href={link}
    className="about-link"
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
)

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <div className="about-shape-container">
          <ShapeAnimation shape={"sphere"}/>
        </div>
        <div className="about-info-container">
          <h1 className="about-header">About me</h1>
          <div className="about-text-container">
            <p className="about-text">
              I am a young developer based in Moscow, Russia. I like to create things using code that blow people's
              brains out. I know python and javascript at the junior programmer level and can create absolutely
              anything that comes into my head.
            </p>
            <p className="about-text">
              At the moment I am working on an online store for renting construction tools {" "}
              <AboutTextLink href={links.toroconstructor} text="Toro Contsructor"/>, but always open to internship or job offers.
            </p>
          </div>
        </div>
      </div>
      <h1 className="about-header">Skills</h1>
      <div className="skills-container">
        <div className="skills-card">
          <h2 className="skills-header">Front-end</h2>
          <p className="about-text">
            I know how to handle <AboutTextLink href={links.react} text="React" /> functions.js, create interactive
            pages and optimize information. With <AboutTextLink href={links.three} text="Three.js" /> can create 3d
            scenes, also familiar with <AboutTextLink href={links.next} text="Next.js" /> and {" "}
            <AboutTextLink href={links.scss} text="SCSS" />
          </p>
          <div className="skills-links-container">
            <AboutLink link={links.react}><FaReact className="about-icon"/></AboutLink>
            <AboutLink link={links.three}><SiThreedotjs className="about-icon"/></AboutLink>
            <AboutLink link={links.next}><SiNextdotjs className="about-icon"/></AboutLink>
            <AboutLink link={links.scss}><DiSass className="about-icon"/></AboutLink>
          </div>
        </div>

        <div className="skills-card">
          <h2 className="skills-header">Back-end</h2>
          <p className="about-text">
            I can create a REST API using {" "}
            <AboutTextLink href={links.django_rest_framework} text="Django rest framework"/>, as well as {" "}
            <AboutTextLink href={links.postgres} text="PostgreSQL"/> as a database. Also had experience
            with <AboutTextLink href={links.flask} text="Flask"/>
          </p>
          <div className="skills-links-container">
            <AboutLink link={links.django}><SiDjango className="about-icon"/></AboutLink>
            <AboutLink link={links.postgres}><SiPostgresql className="about-icon"/></AboutLink>
            <AboutLink link={links.flask}><SiFlask className="about-icon"/></AboutLink>
          </div>
        </div>

        <div className="skills-card">
          <h2 className="skills-header">Front-end</h2>
          <p className="about-text">
            I have good design skills in <AboutTextLink href={links.figma} text="Figma"/>. All my sites were
            primarily made in this app
          </p>
          <div className="skills-links-container">
            <AboutLink link={links.figma}><SiFigma className="about-icon"/></AboutLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;