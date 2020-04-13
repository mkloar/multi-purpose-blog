
import React from "react"
import { Text } from "rebass"
import { format } from "date-fns"

export const ArticleMetaData = ({ frontmatter }) => {
  if (frontmatter.date) {
    return (
      <Text>
        Published on {format(new Date(frontmatter.date), "MMMM do, yyyy")}
      </Text>
    )
  } else {
    return null
  }
}