import React, { useState, useEffect } from "react"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: auto auto;
  padding-bottom: 10px;
`

const JoyButton = styled.div`
  flex-grow: 1;
  a {
    font-size: 26px;
    padding-right: 20px;
    text-decoration: none;
  }
`

const ShareButtons = styled.div`
  margin: auto auto;
`

const SocialButton = styled.a`
  padding: 5px;
`

const Reactions = ({ page }) => {
  const [pathname, setPathname] = useState(page)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname)
    }
  })

  return (
    <Container>
      <JoyButton>
        <div>
          <h2>Did you enjoy this article?</h2>
          <div>
            <a>
              <span role="img" aria-label="thumbs-down">
                👎
              </span>
            </a>
            <a>
              <span role="img" aria-label="thumbs-up">
                👍
              </span>
            </a>
          </div>
        </div>
      </JoyButton>
    </Container>
  )
}

export default Reactions