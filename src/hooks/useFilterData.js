import React, {useEffect} from "react";
import {useState} from "react";


const useFilterData = (state) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [nonCategoryItems, setNonCategoryItems] = useState([]);

  useEffect(() => {
    setDataCategory();
    setDataNonCategory();
  }, [state]);

  const filterName = (item) => {
    return item.title.toLowerCase().includes(state.filterName.toLowerCase());
  };
  const filterCategory = (item) => {
    return item.category.toLowerCase().includes(state.filterCategory.toLowerCase());
  };

  //set items that matches the current category
  const setDataCategory = () => {
    setCategoryItems([]);
    return (
      state.data.filter(item =>
        filterName(item) && filterCategory(item))
        .map(filteredItem => setCategoryItems(oldVal => [...oldVal, filteredItem]))
    );

  };

  //set categorys that doesn't matches the current category
  const setDataNonCategory = () => {
    setNonCategoryItems([]);
    let arr = [];
    state.data.filter(item =>
      filterName(item) && !filterCategory(item))
      .map(filteredItem => arr.push(filteredItem.category));
    setNonCategoryItems(Array.from(new Set(arr)));
  };

  return [categoryItems, nonCategoryItems];
};

export default useFilterData;