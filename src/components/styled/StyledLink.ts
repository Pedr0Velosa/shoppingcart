import styled from "styled-components";


const SizesMap: any = {
  xxl: '2.5rem',
  xl: '2rem',
  base: '1.5rem',
  small: '1rem',
}

interface prop {
  size: string
}


export const StyledLink = styled.a<prop>`
font-size: ${ ({ size }) => SizesMap[size] || '1rem' };
font-weight: 700;
color: inherit;
text-decoration: none;
`