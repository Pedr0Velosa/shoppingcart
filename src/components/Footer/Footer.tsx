import React from 'react'
import { StyledButton } from '@lib/utils/Imports'

const Footer = () => {
  return (
    <>
      <StyledButton onClick={() => window.scrollTo({
        top: 0,
      })}>
        Voltar ao início
      </StyledButton>
      <div>Conheça-me [github link] [linkedin link]</div>
      <div>Desenvolvido por mim</div>
    </>
  )
}

export default Footer