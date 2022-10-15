import { useEffect, useState } from "react";
import { ProductsType } from "../../pages";
import axios from 'axios'

const useFetchApi = (url: string | undefined) => {
  const [data, setData] = useState<ProductsType | null>(null);


  const getList = async (controller: AbortController) => {
    try {
      await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }${ url }`, {
        signal: controller.signal
      })
        .then(response => setData(response.data))
    } catch (error: any) {
      if (error.name === "CanceledError") return
      throw new Error(error)
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    getList(controller)
    return () => controller.abort()
    //getList is a const function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data };
};

export default useFetchApi