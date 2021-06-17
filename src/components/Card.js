import styled from 'styled-components'
import { variables } from '../variables'

export const Card = styled.div`
background-color: #fff;
border-radius: ${variables.borderRadius};
overflow: hidden;
transition: ${variables.transition};
cursor: pointer;

&:hover {
  box-shadow: 0 3px 9px 0 rgba(0,0,0,0.2);
  transform: translateY(-3px)
}

& img {
  max-width: 100%;
  display: block
}
`