import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{ display: 'flex', flexDirection: 'column', padding: '4rem' }}
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  </div>
)

export default IndexPage
