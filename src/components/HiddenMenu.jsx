import React from 'react';
import {FaTimes} from 'react-icons/fa';
import Logo from '../assets/private/logo.svg';
import {ACTIONS} from '../hooks/dataReducer';
import CategoryList from './CategoryList';

const HiddenMenu = ({state, dispatch, handleShowMenu}) => {

  return (
    <div className='hidden-menu-container sm:hidden'>
      <div className='menu-content'>
        <img src={Logo} alt="" className='mb-8 mt-4 mx-auto' />
        {state.data &&
          <ul className='hidden-list'>
            <CategoryList state={state} dispatch={dispatch} handleShowMenu={handleShowMenu} />
          </ul>}
      </div>
      <button
        className='close-menu'
        onClick={handleShowMenu}
      ><FaTimes size={'2em'} /></button>
      <div className='background'></div>
    </div >
  );
};

export default HiddenMenu;