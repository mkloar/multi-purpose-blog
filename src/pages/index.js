import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from '../components/blocks'
import { IndexContent, RootDir } from '../theme'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const rootDirs = data.allMarkdownRemark.distinct

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      
      <Banner>Multi purpose blog made with love. Different categories like sports, funny, interesting etc. </Banner>

      <IndexContent>
        {rootDirs.map((rootDir) => (
          <RootDir>
            <Link to={rootDir}>
              <h3>{ rootDir.replace(/\//g, "") }</h3>
            </Link>
          </RootDir>
        ))}
      </IndexContent>
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
    allMarkdownRemark {
      distinct(field: fields___root)
    }
  }
`