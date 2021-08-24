import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillMediumCircle, AiFillRobot} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {Container, Div1, Div2, Div3, Logo, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <Logo>
          <DiCssdeck size="3rem"/>
          <Span>Portfolio</Span>
        </Logo>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
