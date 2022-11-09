import React from 'react'
import styles from '@styles/HomePageLoading.module.css'

const LoadingNewProducts = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <span className={styles['outer-wheel']}>
          <span className={styles['inner-wheel']}></span>
        </span>
      </div>
    </React.Fragment >
  )
}

export default LoadingNewProducts