import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title, Banner } from '../components/blocks'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      
      <Banner>Multi purpose blog made with love. Different categories like sports, funny, interesting etc. </Banner>
       
      <section>
        <Link to={'/blog'}>Visit blog</Link>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`