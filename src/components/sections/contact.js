import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
  ul {
    ${({ theme }) => theme.mixins.fancyList};
    display: flex;
    flex-direction: column;

    
    line-height: 1.2;

    padding-left: 50px;
    padding-right: 50px;

    margin-top: 10px;

    li {
      text-align: left;
      margin-bottom: 0px;
    }

  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        As part of my academic requirements, I'm currently <b>looking for internship opportunities in Manila</b>, preferrably positions related to data science, engineering, or analytics.  
        <ul>
          <li>Internship should be <b>hybrid or onsite</b> setup.</li>
          <li>Internship should last <b>at least 240 hours</b>.</li>
          <li>I can start on or before <b>February 5, 2024</b>.</li>
          <li>Company must agree to sign a <b>Memorandum of Agreement</b> with my university.</li>
        </ul>
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Email Me
      </a>
    </StyledContactSection>
  );
};

export default Contact;
