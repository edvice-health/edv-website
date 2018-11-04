import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const SecondPage = () => (
  <Layout>
    <div style={{ maxWidth: '600px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
