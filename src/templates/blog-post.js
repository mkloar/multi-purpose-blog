import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainContent, BackButton } from '../theme'
import { Title } from '../components/blocks'
import { Box, Heading, Text, Button } from "rebass"
import BlogContent from '../components/blog-content'
import Header from '../components/header'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          minWidth: 0,
          maxWidth: 768,
          minHeight: "calc(100vh - 64px)",
          mx: "auto",
          px: [3, 4],
          pb: 5,
        }}
      >
        <BackButton>
          <Link to="/">Nazaj</Link>
        </BackButton>
        <BlogContent post={post} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default BlogPost