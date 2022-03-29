import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>  Libate Fine Wines &copy; 2022</span>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: #f7f7f7;
  margin: 80px 0 0;
  padding: 10px 10px 80px;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: 'Nunito', sans-serif;;
      font-size: 15px;
    }
  }
`

export default Footer
