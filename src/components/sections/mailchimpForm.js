import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import styled from "styled-components"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (

      <form onSubmit={this._handleSubmit}>
        <HeaderForm>
          <HeaderInput
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            placeholder="Your email"
            onChange={this.handleChange}
          />
          <HeaderButton
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
          >
            Join Mailing list
          </HeaderButton>
        </HeaderForm>
      </form>

    )
  }
}

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.tertiary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
