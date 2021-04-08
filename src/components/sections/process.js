import React from "react"
import styled from "styled-components"
import { FaArrowCircleDown } from "@react-icons/all-files/fa/FaArrowCircleDown";

import { Section, Container } from "../global"

const Process = () => (
  <Section id="our process">
    <StyledContainer>
      <Subtitle></Subtitle>
      <SectionTitle>How it works</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Sign Up</FeatureTitle>
          <FeatureText>

          Tell us about yourself and your preferences
          </FeatureText>
        </FeatureItem>
        <Arrow>
          <FaArrowCircleDown size={30}/>
        </Arrow>
        <FeatureItem>
          <FeatureTitle>Send through your start up fee</FeatureTitle>
          <FeatureText>
          With this you will purchase your first case(s)!
          </FeatureText>
        </FeatureItem>
        <Arrow>
          <FaArrowCircleDown size={30}/>
        </Arrow>
        <FeatureItem>
          <FeatureTitle>Choose your plan</FeatureTitle>
          <FeatureText>
          Set up a rolling contribution
          </FeatureText>
          <FeatureText>
            or...
          </FeatureText>
          <FeatureText>
          Sit tight and receive further opportunities to buy
          </FeatureText>
        </FeatureItem>
        <ProcessFooter>Get your portfolio valued on a quarterly basis</ProcessFooter>
        <ProcessFooter>When your wine is mature, either sell or drink!</ProcessFooter>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Process;

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
  grid-template-columns: 1fr;
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
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
`
const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0.5rem;
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

const ProcessFooter = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`
