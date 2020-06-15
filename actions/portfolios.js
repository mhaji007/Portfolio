import axios from 'axios';
//import {useState} from 'react';
import useSWR from 'swr';
import {fetcher} from '@/actions';

import {useApiHandler} from '@/actions';

export function createPortfolio (data) {
    return axios.post('/api/v1/portfolios', data);
}

const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data);

export function useCreatePortfolio() {

    return useApiHandler(createPortfolio);

    // const [reqState, setReqState] = useState({
    //     error: null,
    //     data: null,
    //     loading: false
    // });

    // const createPortfolioHandler = async (...data) => {
    //         setReqState({error: null, data: null, loading:true});
        
    //         try {
    //             const json = await createPortfolio(...data);
    //             setReqState({error:null, data: json.data, loading:false})
    //         } catch(e){
    //             const message = (e.response && e.response.message) ||'Oops, somehting went wrong...'
    //             setReqState({error: message, data:null, loading:false})
    //         }
    // }

    // return [createPortfolioHandler, {...reqState}];
}

export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);


export const useGetPortfolio = (id) => {
    const { data, error, ...rest} = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
    return { data, error, loading: !data && !error, ...rest};
  }

  
