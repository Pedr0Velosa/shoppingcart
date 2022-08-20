import React from 'react';

const LoadingPage = ({children}) => {
  return (
    <div className='loading'>
      {children}
    </div>
  );
};

export default LoadingPage;