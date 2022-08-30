import React from 'react';
import '../styles/loadingPage.scss'

const LoadingPage = ({children}) => {
  return (
    <div className='loading'>
      {children}
    </div>
  );
};

export default LoadingPage;