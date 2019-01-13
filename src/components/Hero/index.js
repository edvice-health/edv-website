import React from 'react'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import CMSImage from '../elements/CMSImage'
import './styles.scss'

const HeroBlock = ({data}) => (
  <Hero size='fullheight'>
    <CMSImage
      image={data.image}
      style={{position: 'absolute'}}
      className='hero-bg'
    />
    <Hero.Body >
      <Container className='has-text-centered has-text-right-tablet'>
        <Heading className='has-font-bold'>{data.title}</Heading>
        <Heading subtitle size={4} renderAs="h2" className='has-font-cursive'>
          {data.subtitle}
        </Heading>
      </Container>
    </Hero.Body>
  </Hero>
);

export default HeroBlock;
