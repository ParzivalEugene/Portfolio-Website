import React, {useEffect} from 'react';
import "aos/dist/aos.css"

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {AnimationType, ProjectsData} from '../../constants/constants';

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider  data-aos={AnimationType}/>
      <SectionTitle main data-aos={AnimationType}>Projects</SectionTitle>
      <GridContainer>
        {ProjectsData.map(({image, title, description, tags, source, visit}, index) => (
          <BlogCard key={index} data-aos={AnimationType}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>
              {description}
            </CardInfo>
            <br/>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Website</ExternalLinks>
              <ExternalLinks href={source} target="_blank">Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;