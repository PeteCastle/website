import React from 'react'

import  Layout  from '@components/layout';
import styled from 'styled-components';

import { Hero, About, Skills, Jobs, Certifications, Featured, Projects, Contact } from '@components';



const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function IndexPage({location}) {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero/>
        <About/>
        <Skills/>
        <Jobs/>
        <Certifications/>
        <Featured/>
        <Projects/>
        <Contact/>

      </StyledMainContainer>

    </Layout>
  )
}
