import React, {useEffect} from "react";
import {useState} from "react";


const useFilterData = (state) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [nonCategoryItems, setNonCategoryItems] = useState([]);

  const filterName = (item) => {
    return item.title.toLowerCase().includes(state.filterName.toLowerCase());
  };
  const filterCategory = (item) => {
    return item.category.toLowerCase().includes(state.filterCategory.toLowerCase());
  };

  const filterDataCategory = (type) => {
    return (
      state.data.filter(item =>
        filterName(item) && filterCategory(item))
        .map(filteredItem => setCategoryItems(oldVal => [...oldVal, filteredItem.id]))
    );

  };

  const filterDataNonCategory = () => {
    let arr = [];
    state.data.filter(item =>
      filterName(item) && !filterCategory(item))
      .map(filteredItem => arr.push(filteredItem.category));
    setNonCategoryItems(Array.from(new Set(arr)));
  };
  useEffect(() => {
    setCategoryItems([]);
    setNonCategoryItems([]);
    filterDataCategory();
    filterDataNonCategory();
  }, [state]);
  return [categoryItems, nonCategoryItems];
};

export default useFilterData;