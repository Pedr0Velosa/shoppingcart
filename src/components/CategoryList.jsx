import React from 'react';
import {ACTIONS} from '../hooks/dataReducer';

const CategoryList = ({state, dispatch, handleShowMenu = () => {}}) => {
  return (
    <>
      {[...new Set(state.data.map(item => item.category))]
        .map((category, index) =>
          <li key={index}>
            <button
              className='item'
              value={category}
              onClick={(e) => {
                dispatch({type: ACTIONS.SET_FILTER_CATEGORY, payload: e.target.value});
                handleShowMenu();
              }}>
              {category}
            </button>
          </li>
        )}
      <button
        value={''}
        className='item'
        onClick={(e) => {
          dispatch({type: ACTIONS.SET_FILTER_CATEGORY, payload: e.target.value});
          handleShowMenu();
        }
        }
      >
        Todos
      </button>
    </>
  );
};

export default CategoryList;