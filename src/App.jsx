import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect, useReducer} from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import useGetResourcesApi from './api/useGetResourcesApi';
import {initialState, dataReducer, ACTIONS} from './hooks/dataReducer';
import Product from './pages/Product';

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
        />
        <Routes>
          <Route path='/'
            element={<Home state={state} load={load} />} />
          <Route path='/product/:id'
            element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
