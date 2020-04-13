import React from "react"
import { Box, Heading, Text, Button } from "rebass"
import { Link } from "gatsby"
import slugify from "slugify"

export const Title = (props) => {
    let fontSize = [5, 6, 7]

    if (props.h2) {
        fontSize = [3, 4, 5]
    } else if (props.h3) {
        fontSize = [3, 4, 4]
    }

    const title = props.children.replace(/^[#]+/, ""),
        slug = slugify(title.toLowerCase())

    return (
        <Text>
            <Heading
                {...props}
                fontSize={fontSize}
                width={["100%", "120%", "130%"]}
                ml={[0, "-10%", "-15%"]}
                mr={[0, "-10%", "-15%"]}
                mt={[3, 4, 5]}
                mb={[2, 3, 4]}
                sx={{ textAlign: "center", margin: "auto", ...props.sx }}
                id={slug}
            >
                <Link
                    to={props.uri}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        ":hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {title}
                </Link>
            </Heading>
        </Text>
    )
}