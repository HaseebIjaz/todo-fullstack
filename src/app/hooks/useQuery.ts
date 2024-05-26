'use client'
import { useEffect, useState } from "react";

const useQuery = ({url}: {url:string}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
     
      setLoading(true);

      fetch(url
        ,{
        cache: "force-cache"
      }
    )
      .then((res) => res.json())
      .then(data => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
    }, [])
    
    return{
        data,loading,error
    }
}

export default useQuery;