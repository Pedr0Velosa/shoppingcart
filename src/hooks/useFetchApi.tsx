import { useEffect, useState } from "react";
import axios from 'axios'

const useFetchApi = (url: string | undefined) => {
  const [data, setData] = useState<string[]>();

  const getList = async () => {
    await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }${ url }`)
      .then(response => setData(response.data.sort()))
  }


  useEffect(() => {
    getList()
    //getList is a const function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data };
};

export default useFetchApi