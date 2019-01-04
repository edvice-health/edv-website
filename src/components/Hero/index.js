import React from 'react'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import HeroImage from './HeroImage'
import './styles.scss'

const HeroBlock = () => (
<Hero size='fullheight'>
  <HeroImage/>
  <Hero.Body >
    <Container className='has-text-centered has-text-right-tablet'>
      <Heading className='has-font-bold'>
        your health is our PRIORITY
      </Heading>
      <Heading subtitle size={4} renderAs="h2" className='has-font-cursive'>
        some curvy polish text ^_^
      </Heading>
    </Container>
  </Hero.Body>
</Hero>
);

export default HeroBlock;
