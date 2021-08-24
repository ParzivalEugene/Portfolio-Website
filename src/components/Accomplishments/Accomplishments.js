import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import {AccomplishmentData, AnimationType} from "../../constants/constants";
import "aos/dist/aos.css"

const Accomplishments = () => (
  <Section>
    <SectionTitle data-aos={AnimationType}>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentData.map((card, index) => (
        <Box key={index} data-aos={AnimationType}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;

