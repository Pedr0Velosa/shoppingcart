import React, {useRef, useState} from 'react';
import Logo from '../assets/private/logo.svg';
import '../styles/header.scss';
import '../styles/menuButton.scss';
import {BsCart} from 'react-icons/bs';
import HiddenMenu from './HiddenMenu';
import {ACTIONS} from '../hooks/dataReducer';
import CategoryList from './CategoryList';
import {Link} from 'react-router-dom';

const Header = ({state,dispatch}) => {
  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef(null);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={`${showMenu ? "header active" : "header"}`}>
      <div className="container">
      <nav>
        <div className='nav-list'>
          <div className='nav-left'>
            <div className='nav-item sm:hidden'>
              <button
                className='menu-btn-container item'
                onClick={handleShowMenu}>
                <span className='menu-btn' />
              </button>
            </div>
            <div className='nav-item logo'>
              <Link to='/'
                onClick={() => {
                  dispatch({type: ACTIONS.RESET});
                  inputRef.current.value = '';
                }}>
                {<img src={Logo} alt=""/>}
              </Link>
            </div>
          </div>
          <div className='nav-fill'>
            <div className='nav-item'>
              <input
                ref={inputRef}
                className='item'
                onChange={(e) => {
                  inputRef.current.value = e.target.value;
                  dispatch({type: ACTIONS.SET_FILTER_NAME, payload: inputRef.current.value});
                }
                }
              />
            </div>
          </div>
          <div className='nav-right'>
            <div className='nav-item'>
              <button
                className='item'
              >
                <BsCart size={'2em'} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className='category-list'>
        <ul className='hidden items-category sm:nav-list sm:justify-start'>
          <CategoryList state={state} dispatch={dispatch} />
        </ul>
      </nav>
      <HiddenMenu
        dispatch={dispatch}
        state={state}
        handleShowMenu={handleShowMenu} />
      </div>
    </header >
  );
};

export default Header;