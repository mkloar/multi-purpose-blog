import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IndexContent, RootDir } from '../theme'

const Videos = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const groups = data.allMarkdownRemark.group

    // TODO: improve menu
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All video posts" />
        <section>
          <h1>Menu</h1>
          {groups.map((group) => {
            const fieldValue = group.fieldValue
            const edges = group.edges
            return (
              <div>
                <h4>{ fieldValue }</h4>
                <ul>
                  {edges.map(({ node }) => {
                    return (
                      <li><Link to={`${node.fields.slug}`}>{node.frontmatter.title}</Link></li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </section>
        <section>
          <h1>TOP posts</h1>
        </section>
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {root: {eq: "/videos/"}}}) {
      group(field: frontmatter___section) {
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
              section
            }
          }
        }
        fieldValue
      }
    }
  }
`