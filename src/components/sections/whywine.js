import React from "react"
import styled from "styled-components"
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";

import { Section, Container } from "../global"

const WhyWine = () => (
  <Section id="why wine">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>Why Invest in Wine</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Low Volatility<br/><FiCheckCircle /></FeatureTitle>
          </FeatureItem>
          <FeatureItem>
          <FeatureText>
            Historically Wine has been a low-risk haven for investors. It shows neglible correlation with economic cycles or
            traditional markets, making it invaluable as a diversifying agent for broader investment portfolios.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Uncorrelated Asset Class<br/><FiCheckCircle /></FeatureTitle>
          </FeatureItem>
          <FeatureItem>
          <FeatureText>
            Wine's consistent return are based on its unique characteristics, namely that it is a finite, quality-improving asset with
            demand outstripping supply as the wine gets consumed
        </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Option to Drink<br/><FiCheckCircle /></FeatureTitle>
          </FeatureItem>
          <FeatureItem>
          <FeatureText>
          Unlike most assets if things are going well you can choose the option of drinking a portion of your wine! 
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default WhyWine

const StyledContainer = styled(Container)`
`

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
  grid-template-columns: 1fr 1fr;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 40px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
`
