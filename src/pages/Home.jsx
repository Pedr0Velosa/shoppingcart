import React, {useCallback, useEffect} from 'react';
import LoadingPage from '../components/LoadingPage';
import CardProduct from '../components/CardProduct';
import useFilterData from '../hooks/useFilterData';

const Home = ({state, load}) => {
  const [categoryItems, nonCategoryList] = useFilterData(state);

  const filterName = (item) => {
    return item.title.toLowerCase().includes(state.filterName.toLowerCase());
  };

  const showCategoryItems = () => {
    return(
      categoryItems.map((item,index)=>
      <CardProduct key={index} item={item}/>)
    )

  };

  const showNonCategoryItems = () => {
    return (
      state.filterName &&
      nonCategoryList.map((nonCategory) =>
        <section key={nonCategory}>
          <h2><b>Others:</b> {nonCategory}</h2>
          {state.data.filter(item =>
            filterName(item) && item.category === nonCategory)
            .map((filteredItem,index) => 
            <CardProduct key={index} item={filteredItem}/>)}
        </section>
      )
    );
  };

  return (
    <main>
      {load === 'loaded' ? (
        <>
          <h2 className='uppercase'>{state.filterCategory}</h2>
          {showCategoryItems()}
          {showNonCategoryItems()}
        </>
      ) :  
      //arrumar
      // <LoadingPage>
      //   {showCategoryItems()}
      //   {showNonCategoryItems()}
      // </LoadingPage>       
        null
      }
    </main>
  );
};

export default Home;