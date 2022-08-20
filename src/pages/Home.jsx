import React, {useCallback, useEffect} from 'react';
import {useState} from 'react';
import LoadingPage from '../components/LoadingPage';
import useFilterData from '../hooks/useFilterData';

const Home = ({state, load}) => {
  //com isso funciona
  //const [nonCategoryItems, setNonCategoryItems] = useState([]);

  const [a, nonCategoryList] = useFilterData(state);
  const filterName = (item) => {
    return item.title.toLowerCase().includes(state.filterName.toLowerCase());
  };
  const filterCategory = (item) => {
    return item.category.toLowerCase().includes(state.filterCategory.toLowerCase());
  };

  const filterDataCategory = () => {
    return (
      state.data.filter(item =>
        filterName(item) && filterCategory(item))
        .map(filteredItem => <p>{filteredItem.title}</p>)
    );

  };

  const filterDataNonCategory = () => {
    return (
      state.filterName &&
      nonCategoryList.map(nonCategory =>
        <>
          <h2><b>Outras categorias:</b> {nonCategory}</h2>
          {state.data.filter(item =>
            filterName(item) && item.category === nonCategory)
            .map(filteredItem => <p>{filteredItem.title}</p>)}
        </>
      )
    );
  };

  // com isso funciona
  // useEffect(() => {
  //   let arr = [];
  //   setNonCategoryItems([]);
  //   state.data.filter(item =>
  //     filterName(item) && !filterCategory(item))
  //     .map(filteredItem => arr.push(filteredItem.category));
  //   setNonCategoryItems(Array.from(new Set(arr)));
  // }, [state.filterCategory, state.filterName]);


  return (
    <main>
      {load === 'loaded' ? (
        <>
          {filterDataCategory()}
          {filterDataNonCategory()}
        </>
      ) : null
      }
    </main>
  );
};

export default Home;