import React from "react"
import styled from "styled-components"
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { IoSchoolSharp } from "@react-icons/all-files/io5/IoSchoolSharp";
import { GiReceiveMoney } from "@react-icons/all-files/gi/GiReceiveMoney";

import { Section, Container } from "../global"

const Features = () => (
  <Section id="why libate">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>What we do</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Bespoke</FeatureTitle>
          <FaHandshake size={30} />
          <FeatureText>
          We spend time getting to know you, allowing us to offer you wines to take out of bond for your own collection along the way.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Buy at the best price</FeatureTitle>
          <GiReceiveMoney size={30} />
          <FeatureText>
          We select our wines carefully and from trusted sources, ensuring we buy at prices below market.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Educate you along the way</FeatureTitle>
          <IoSchoolSharp size={30} />
          <FeatureText>
          We're passionate about wine, and want to share our knowledge with you. It may seem a little complicated for the unitiated, but we will guide you through the fascinating world of wine.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
