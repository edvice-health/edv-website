import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Story from '../components/Story'
import ContactForm from '../components/ContactForm'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.contentfulHero}/>
    <Story/>
    <ContactForm/>
  </Layout>
)

export const query = graphql`
    {
        contentfulHero {
            title,
            subtitle,
            image {
                fluid {
                    sizes
                    src
                    srcSet
                }
            }
        }
    }
`

export default IndexPage
