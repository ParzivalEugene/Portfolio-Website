import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import {HeroInfo} from "../../constants/constants";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {HeroInfo.title}
      </SectionTitle>
      <SectionText>
        {HeroInfo.description}
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;