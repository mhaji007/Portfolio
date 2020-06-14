// import {useEffect, useState} from 'react'; // -  used if not using SWR

//import useSWR from 'swr';

import {useState} from 'react';

export const fetcher = (url) => 
    fetch(url).then(async res => {
        const result= await res.json();

        if(res.status !=200) {
            return Promise.reject(result);
        } else {
            return result;
        }

    })


export function useApiHandler(apiCall) {

    const [reqState, setReqState] = useState({
        error: null,
        data: null,
        loading: false
    });

    const handler = async (...data) => {
            setReqState({error: null, data: null, loading:true});
        
            try {
                const json = await apiCall(...data);
                setReqState({error:null, data: json.data, loading:false})
            } catch(e){
                const message = (e.response && e.response.message) ||'Oops, somehting went wrong...'
                setReqState({error: message, data:null, loading:false})
            }
    }

    return [handler, {...reqState}];
}




// export const useGetPosts = () => {
//        const {data, error, ...rest} = useSWR('/api/v1/posts', fetcher);
//        return {data, error, loading: !data && !error, ...rest}
// }
// export const useGetPostById = (id) => {
//        const {data, error, ...rest} = useSWR(id ? `/api/v1/posts/${id}`:null, fetcher);
//        return {data, error, loading: !data && !error, ...rest}
// }

// Custom fetch function - used if not using SWR

// export const useGetData= (url) => {
//     const [data, setData] = useState();
//     const [error, setError] = useState();
//     const [loading, setLoading] = useState(true)
    
//     useEffect(() => {
//       async function fetchData() {
//         const res = await fetch(url);
//         const result = await res.json();
        
//         if(res.status!= 200) {
//             setError(result)
//         } else {
//             setData(result)
//         }

//         setLoading(false)
        
//       }
//       url && fetchData();
//     }, [url])
    
//     return {data, error, loading}
//   }