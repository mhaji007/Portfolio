import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
//import {useGetData} from '@/actions'; // -  used if not using SWR
//import {useGetPostById} from '@/actions';
import {useGetUser} from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';


const Portfolio = ({portfolio}) => {
    
    //const {data:portfolio, error, loading} = useGetUser(); 
    //useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null); // -  used if not using SWR
    //const {data: portfolio, error, loading} =
    // useGetPostById(router.query.id);
   const {data:dataU, loading:loadingU} = useGetUser();
    
    return (
        <BaseLayout
        user ={dataU}
        loading = {loadingU}>
            <BasePage header = "Portfolio Details">
                {
                    JSON.stringify(portfolio)
                }

            </BasePage>
        </BaseLayout>
    );
}

export async function getServerSideProps({query}) {
    const json = await new PortfolioApi().getById(query.id);
    const portfolio = json.data;

    return {props:{portfolio}};
}

export default(Portfolio);