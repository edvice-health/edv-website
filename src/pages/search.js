import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import SearchMap from '../components/SearchMap'

const SearchPage = ({ data }) => (
  <Layout>
    <SearchMap data={{ specialists: data.allContentfulSpecialist.edges }}/>
  </Layout>
)

export const query = graphql`
    {
      allContentfulSpecialist (filter: {node_locale: { eq: "de-DE" } }) {
        totalCount,
        edges {
          node {
            name
            id
            profession
            category
            desctiption {
              childMarkdownRemark { html }
            }
            picture {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
              }
            }
            location {
              lat
              lon
            }
          }
        }
      }
    }

`

export default SearchPage
