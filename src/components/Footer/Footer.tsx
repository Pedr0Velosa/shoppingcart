import React from 'react'
import { StyledButton } from '@lib/utils/Imports'
import styles from '@styles/Footer.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      <footer className={styles.footer}>

        <StyledButton
          onClick={handleClick}
          className={styles.back}
        >
          Voltar ao início
        </StyledButton>
        <div className={styles.coded}>
          <h2>Coded By Pedro Velosa</h2>
          <div className={styles.social}>
            <a
              href='https://github.com/Pedr0Velosa'
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={'2em'}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/pedrovelosa/'
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={'2em'}
                fill={'#0a66c2'}
              />
            </a>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer