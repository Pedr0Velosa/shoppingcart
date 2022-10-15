import styled from "styled-components";

interface prop {
  readonly direction: string
}

export const StyledNav = styled.nav<prop>`
display: flex;
align-items: stretch;
justify-content: space-between;
flex-direction: ${ props => props.direction };
padding: 0.5rem 1rem;
gap: 1rem;
flex-wrap: wrap;
z-index: inherit;
@media (min-width: 800px){

}
`