import React from 'react';
import Img from 'gatsby-image';
import uuid from 'uuid/v4';
import { HeroContainer, HeroHeading, HeroImage, HeroSection, HeroTitle } from './components';
import { HeroProps } from './types';
import { Salutations } from '../Salutations';

const Hero = ({ salutations, heroImage, componentId = uuid() }: HeroProps): React.ReactElement<HeroProps> => {
  return (
    <>
      <HeroSection id={componentId}>
        <HeroContainer>
          <HeroHeading>
            <Salutations salutations={salutations} />
            <HeroTitle>
              I am <strong>Damien</strong>, digital <strong>designer</strong> specialised in{' '}
              <strong>accessibility</strong> and <strong>design systems</strong>.
            </HeroTitle>
          </HeroHeading>
        </HeroContainer>
      </HeroSection>
      {heroImage && (
        <HeroImage>
          <Img
            fixed={heroImage}
            alt="Face portrait of Damien Senger, looking directly at the camera. The person is smiling while wearing an overall outfit. They also have blue hair and several piercings."
          />
        </HeroImage>
      )}
    </>
  );
};

export default Hero;
