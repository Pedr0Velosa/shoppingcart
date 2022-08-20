import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect, useReducer, useState} from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import useGetResourcesApi from './api/useGetResourcesApi';
import {initialState, dataReducer, ACTIONS} from './hooks/dataReducer';

const App = () => {

  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [data, load] = useGetResourcesApi({resources: 'products'});

  useEffect(() => {
    dispatch({type: ACTIONS.FETCH_DATA, payload: data});
  }, [data]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          state={state}
          dispatch={dispatch}
          data={data}
          load={load}
        />
        <Routes>
          <Route path='/'
            element={<Home state={state} load={load} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
