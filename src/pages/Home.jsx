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
      <div className='card-container'>
        {categoryItems.map((item,index)=>
        <CardProduct key={index} item={item}/>)}
      </div>
    )
  };

  const showNonCategoryItems = () => {
    return (
      state.filterName &&
      <div className=''>
      {nonCategoryList.map((nonCategory) =>
      <>
        <div className='product-container' key={nonCategory}>
          <h2><b>Others:</b> {nonCategory}</h2>
          <div className='card-container'>
          {state.data.filter(item =>
            filterName(item) && item.category === nonCategory)
            .map((filteredItem,index) => 
            <CardProduct key={index} item={filteredItem}/>)}
          </div>
        </div>
      </>
        )}
      </div>
    );
  };

  return (
    <main>
      {load === 'loaded' ? (
        <div className='product-container'>
          {state.filterCategory && 
          <h2 className='uppercase'><b>Category:</b> {state.filterCategory}</h2>}
            {showCategoryItems()}
            {showNonCategoryItems()}
        </div>
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