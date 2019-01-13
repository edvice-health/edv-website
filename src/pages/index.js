import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Story from '../components/Story'
import ContactForm from '../components/ContactForm'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero data={data.contentfulHero}/>
    <Story data={data.contentfulStory}/>
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
        contentfulStory {
            title
            column1 { childMarkdownRemark { html } }
            column2 { childMarkdownRemark { html } }
            column3 { childMarkdownRemark { html } }
        }
    }
`

export default IndexPage
