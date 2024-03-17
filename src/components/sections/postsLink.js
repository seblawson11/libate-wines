import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Section, Container } from "../global"

const PostsLink = () => (
  <Section id="posts-link">
    <StyledContainer>
      <SectionTitle><Link to='/posts'>Read our posts</Link></SectionTitle>
    </StyledContainer>
  </Section>
)

export default PostsLink

const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`
