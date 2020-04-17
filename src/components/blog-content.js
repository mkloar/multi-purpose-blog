import React from "react"
import { Box } from "rebass"
import { Title } from './blocks'
import { MainContent } from '../theme'
import { ArticleMetaData } from './ArticleMetaData'


const BlogContent = ({ post }) => {
    return (
        <Box>
            {post.frontmatter && post.frontmatter.title && (
                <Title uri={""}>{post.frontmatter.title}</Title>
            )}
            <MainContent>
                <main dangerouslySetInnerHTML={{ __html: post.html }} />
            </MainContent>

            <ArticleMetaData frontmatter={post.frontmatter} />
        </Box>
    )
}

export default BlogContent