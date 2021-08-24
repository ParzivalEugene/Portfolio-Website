import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';
import {AnimationType, TechnologiesData, TechnologiesInfo} from "../../constants/constants";
import "aos/dist/aos.css";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider data-aos={AnimationType}/>
    <br/>
    <SectionTitle data-aos={AnimationType}>{TechnologiesInfo.title}</SectionTitle>
    <SectionText data-aos={AnimationType}>{TechnologiesInfo.description}</SectionText>
    <List>
      {TechnologiesData.map(({icon, title, description}, index) => (
        <ListItem key={index} data-aos={AnimationType}>
          {icon}
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            {description}
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
