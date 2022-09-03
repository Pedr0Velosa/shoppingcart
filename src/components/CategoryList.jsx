import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {ACTIONS} from '../hooks/dataReducer';

const CATEGORYS = ['Smartphone','Laptops','Fragrances','Skincare','Groceries','Home-decoration']

const CategoryList = ({state,dispatch, handleShowMenu = () => {}}) => {

  let navigate = useNavigate()
  const checkSelectCategory = (item) =>{
    navigate('/')
    if(state?.filterCategory === item.target.value){
      item.target.blur()
      return dispatch({type: ACTIONS.SET_FILTER_CATEGORY, payload: ''});
    }
    return dispatch({type: ACTIONS.SET_FILTER_CATEGORY, payload: item.target.value});
  }

  return (
    <>
      {CATEGORYS.map((category, index) =>
          <li key={index}>
              <button
                value={category}
                className={`${state?.filterCategory === category ? 'item select' : 'item'}`}
                onClick={(e) => {
                  checkSelectCategory(e)
                  handleShowMenu();
                }}
                >
                {category}
              </button>
          </li>
        )}
        <li>
            <button
              value={''}
              className='item'
              onClick={(e) => {
                checkSelectCategory(e)
                handleShowMenu();
              }}
            >
              All
            </button>
        </li>
    </>
  );
};

export default CategoryList;