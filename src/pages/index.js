import React from 'react'
import { Link } from 'gatsby'

import Section from 'react-bulma-components/lib/components/section'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'

const IndexPage = () => (
  <Layout>
    <Hero size='fullheight'>
      <HeroImage/>
      <Hero.Body >
        <Container className='has-text-centered has-text-right-tablet'>
          <Heading>
            your health is our PRIORITY
          </Heading>
          <Heading subtitle size={4} renderAs="h2" className='cursive'>
            some curvy polish text ^_^
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
    <Section>
      <Container>
        <p>Hello some text here</p>
      </Container>
    </Section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
