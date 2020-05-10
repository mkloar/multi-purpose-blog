import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IndexContent, RootDir } from '../theme'

const Videos = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const sections = data.allMarkdownRemark.distinct
  
    return (
      <Layout location={location} title={siteTitle}>
        <IndexContent>
          {sections.map((section) => (
            <RootDir>
              <Link to={`${location.pathname}${section}`}>
                <h3>{ section.replace(/\//g, "") }</h3>
              </Link>
            </RootDir>
          ))}
        </IndexContent>
        <SEO title="All video posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={`${node.fields.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p>{ node.frontmatter.description || node.excerpt } </p>
              </section>
              <hr />
            </article>
          )
        })}
      </Layout>
    )
}

export default Videos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {root: {eq: "/videos/"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
      distinct(field: frontmatter___section)
    }
  }
`