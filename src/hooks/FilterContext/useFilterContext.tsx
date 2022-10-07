import React from 'react'
import { useContext } from 'react';
import { filterContext } from './FilterProvider';

const useFilterContext = () => {
  const { filter, setFilter } = useContext(filterContext)
  return { filter, setFilter }
}

export default useFilterContext

