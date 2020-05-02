const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode, basePath: `content` })
      const splitSlugFixed = value.split('/')

      createNodeField({
        node,
        name: `slug`,
        value
      })

      createNodeField({
        node,
        name: 'root',
        value: `${splitSlugFixed.slice(0, 2).join('/')}/`,
      })

    }
  }