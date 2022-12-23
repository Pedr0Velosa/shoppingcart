import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'

const useLoadingPage = () => {

  const router = useRouter();
  const [isLoading,setIsLoading]=useState<boolean>(false)
  const aniStart = () => {
    setIsLoading(true)
  };
  const aniEnd = () => {
    setIsLoading(false)
  };
  useEffect(() => {
    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]);

  return isLoading
}

export default useLoadingPage