import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const useGetResourcesApi = ({resources, skip = 0, limit = 30}) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState('unloaded');

  useEffect(() => {
    setLoad('unloaded');
    let source = axios.CancelToken.source();
    axios({
      cancelToken: source.token,
      method: "get",
      url: `${BASE_API_URL}/${resources}?skip=${skip}&limit=${limit}`,
    })
      .then(res => {
        setLoad('loading');
        setData(res.data[resources]);
        setLoad('loaded');
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
          console.log("caught cancel");
        } else {
          throw error;
        }
        setLoad('unloaded')
      });
    return () => {
      source.cancel();
    };
  }, [resources]);

  return [data, load];
};

export default useGetResourcesApi;