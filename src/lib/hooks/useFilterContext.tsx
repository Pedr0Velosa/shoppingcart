import React from 'react'
import { useContext } from 'react';
import { filterContext } from '../contexts/FilterContext/FilterProvider';

const useFilterContext = () => {
  const { state, dispatch } = useContext(filterContext)
  return { state, dispatch }
}

export default useFilterContext

