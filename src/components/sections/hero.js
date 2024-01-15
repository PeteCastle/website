import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const PicturedHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
 
    padding: 0;

    min-height: 100vh;
    height: 100vh;

    img {
        width: 40%;
        height: 50%;
        object-fit: contain ;
        border-radius: var(--border-radius);
        transition: var(--transition);
        pointer-events: none;
    
    }

    @media (max-width: 620px) {
        img {
            width: 50%;
            height: 20%;
        }
        // display:block;
        flex-direction: column-reverse;

        
    }   
`

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi there! I'm</h1>;
  const two = <h2 className="big-heading">Francis Mark.</h2>;
  const three = <h3 className="big-heading">I want to engineer data.</h3>;
  const four = (
    <>
      <p>
       Currently a senior computer engineering student at 
        <a href="https://www.plm.edu.ph/" target="_blank" rel="noreferrer">Pamantasan ng Lungsod ng Maynila</a>
        {' '}driven by strong interest in the fields of data science and engineering. 
        I hold a pivotal role as a Data Science Lead volunteer at {' '}
        <a href="https://gdsc.community.dev/pamantasan-ng-lungsod-ng-maynila/" class="inline-link">GDSC-PLM</a>
        , where I actively contribute to leveraging data-driven insights for impactful solutions.
        
       
      </p>
    </>
  );
  const five = (
    <a
        className="email-link"
        href="Francis Mark Cayco - Resume V1.5.pdf"
        target="_blank"
        rel="noreferrer">
        Download my resume
    </a>
  
  );

    

  const items = [one, two, three, four, five];

  return (
    <PicturedHeroSection>
        <StyledHeroSection>
        {prefersReducedMotion ? (
            <>
            {items.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
                
            </>
            
        ) : (
            <TransitionGroup component={null}>
            {isMounted &&
                items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
                ))}
                
            </TransitionGroup>
            
        )}
        </StyledHeroSection>
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition key={7} classNames="fadeup" timeout={loaderDelay}>
                <img
                    style={{ transitionDelay: `100ms` }}
                    src="petecastle_frontpage.png"
                    alt="PeteCastle_front"
                />
                </CSSTransition>
            )}
        </TransitionGroup>
        
       
    </PicturedHeroSection>
    
  );
};

export default Hero;
