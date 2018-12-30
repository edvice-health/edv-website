import React from 'react'
import { Link } from 'gatsby'

import { Section, Hero, Container, Heading } from 'react-bulma-components'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Section>
        <Hero>
          <Hero.Body>
            <Container>
              <Heading>
                ABOUT EDVICE
              </Heading>
              <Heading subtitle size={4}>
                The first platform to connect patiensts and eating disorders specialists worldwide.
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
    </Section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
