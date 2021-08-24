import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillRobot} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {Section} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:michkov.evgeny@gmail.com">michkov.evgeny@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Links tree</LinkTitle>
          <LinkItem href="https//links.michkoff.com">links.michkoff.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Work smarter, not harder</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ParzivalEugene/" target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/_parzival.eugene_/" target="_blank">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://michkoff.medium.com/" target="_blank">
            <AiFillMediumCircle size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://links.michkoff.com/" target="_blank">
            <AiFillRobot size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
