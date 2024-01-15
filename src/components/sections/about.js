import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--orange);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--dark-grey);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--orange);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            The year was 2022 when a random taught came to my mind, {' '}
            <i>"How could businesses make meaningful decisions when their customers generate a lot of data?"</i>.  
            A simple Google search lead me to this <a href="https://www.ted.com/talks/josh_jones_creating_insights_from_the_data_around_us" target='_blank' rel="noreferrer">TedTalk</a>, where data science entered my life.  My curiosity has led me to delve deeper into this field, later on shifting on a developer-leaning field of data engineering.  Since then, I've been focused on improving my technical and soft skills by participating in <a href="#jobs">volunteer organizations</a>, and obtaining <a href="#certifications">certifications</a>.
            </p>

            <p>
            Fast-forward to today, I've had the privilege to be a data science lead for a <a href="https://gdsc.community.dev/pamantasan-ng-lungsod-ng-maynila/" target='_blank' rel="noreferrer">student-led developer organization</a> where I provide study jams and <a href="https://www.facebook.com/gdsc.haribon/posts/pfbid0ke7zkntq7tz8uovDy1Tf171E78AA9ytTLPAEMit5Kp9pUR6BSEPaYbkCsgkTzP35l" >scholarships</a> to like-minded individuals in my university.
            </p>

            <p>
            Throughout my academic journey, I consistently pursued academic excellence. I've been a consistent Dean's Lister since my freshman years in my university, with a cumulative GPA of 1.2278.  
            </p>
          </div>

        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/petecastle_full.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
