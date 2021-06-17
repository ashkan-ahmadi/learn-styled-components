import styled, { css } from 'styled-components'
import { variables } from '../variables'

export const Button = styled.button`
background-color: transparent;
padding: 0.7rem 1rem;
margin-right: 1rem;
border: none;
border-radius: ${variables.borderRadius};
cursor: pointer;
font-weight: bold;
transition: ${variables.transition};

${props => props.primary && css`
  background-color: ${variables.primaryColor};
  color: white;

  &:hover {
    background-color: ${variables.primaryColorHover};
  }
`};

${props => props.primaryOutline && css`
  background-color: transparent;
  color: ${variables.primaryColor};
  border: 1px solid ${variables.primaryColor};
  
    &:hover {
      background-color: ${variables.primaryColorHover};
      border: 1px solid ${variables.primaryColor};
      color: white;
    }
`};

${props => props.danger && css`
  background-color: ${variables.primaryRed};
  color: white;

    &:hover {
      background-color: ${variables.primaryRedHover};
    }
`};

${props => props.dangerOutline && css`
  background-color: transparent;
  color: ${variables.primaryRed};
  border: 1px solid ${variables.primaryRed};

    &:hover {
      background-color: ${variables.primaryRedHover};
      color: white;
      border: 1px solid ${variables.primaryRedHover};
    }
`};

`