const { resolve } = require('path')

module.exports = async ({ actions, graphql }) => {
    const { createPage } = actions

    const articleTemplate = resolve(__dirname, '../src/templates/blog-post.js')

    const result = await graphql(`
        query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }`
    )

    if (result.errors) {
        console.error(allMarkdown.errors)

        throw Error(allMarkdown.errors)
    }


    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)



    posts.forEach(( post, i ) => {
        const previous = i === posts.length - 1 ? null : posts[i + 1].node
        const next = i === 0 ? null : posts[i - 1].node

        createPage({
            path: `${post.node.fields.slug}`,
            component: articleTemplate,
            context: { 
                slug: post.node.fields.slug,
                previous,
                next
            }, // additional data can be passed via context
        })
    })

}