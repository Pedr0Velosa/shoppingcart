import React, { createContext, useState } from 'react'

type FilterProviderType = {
  children: React.ReactNode
}

type filterType = {
  query: string | null,
  category: string | null
}

type filterContextType = {
  filter: filterType | null,
  setFilter: React.Dispatch<React.SetStateAction<filterType | null>>
}

export const filterContext = createContext({} as filterContextType)

const FilterProvider = ({ children }: FilterProviderType): JSX.Element => {

  const [filter, setFilter] = useState<filterType | null>(null)

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  )
}

export default FilterProvider