import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Workshops = () => (
  <Layout>
    <SEO title="Workshops" />
    <h1>Workshops</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Workshops
