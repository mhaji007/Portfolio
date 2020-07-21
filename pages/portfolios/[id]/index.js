import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
//import {useGetData} from '@/actions'; // -  used if not using SWR
//import {useGetPostById} from '@/actions';
import {useGetUser} from '@/actions/user';
import { formatDate } from 'helpers/functions';
import PortfolioApi from '@/lib/api/portfolios';
import  {useRouter} from 'next/router';


const Portfolio = ({portfolio}) => {

    const router = useRouter();
    
    // const {data:portfolio, error, loading} = useGetUser(); 
    // useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null); // -  used if not using SWR
    // const {data: portfolio, error, loading} =
    // useGetPostById(router.query.id);
   const {data:dataU, loading:loadingU} = useGetUser();
   
   if (router.isFallback) {
       return <h1> Your page is getting served </h1>
   }

    return (
        <BaseLayout
        navClass="transparent"
        user={dataU} loading={loadingU}>
                  <BasePage
                          noWrapper
                          indexPage
        title={`${portfolio.title} - Mehdi Hajikhani`}
        metaDescription={portfolio.description}>
       <div className="portfolio-detail">
          <div  className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main"  className="inner page-cover">
            {
                router.isFallback &&
                
            <h1  className="cover-heading">your page is getting served...</h1>
            }
            
            {!router.isFallback &&
            
            <>
            <h1  className="cover-heading">{portfolio.title}</h1>
              <p  className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
              <p  className="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
              <p  className="lead">{portfolio.description}</p>
              
              <p className="lead">
              <a href={portfolio.companyWebsite} target="_" className="btn btn-lg btn-secondary">Visit Company</a>
              </p>

            </>
            
            }
            </main>
          </div>
        </div>

            </BasePage>
        </BaseLayout>
    );  
}



// // Fetch portfolio details serverside

// export async function getServerSideProps({query}) {
//     const json = await new PortfolioApi().getById(query.id);
//     const portfolio = json.data;

//     return {props:{portfolio}};
// }


// Executed at build time
// Prerenders dynamic pages
// By combining getStaticPaths and getStaticProps
// We can take advantage of both static optimization 
// and dynamic rendering
// Statically optimized and also have the dynamic data
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // Get paths we want to pre-render based on portfolio
    // array of objects [{params:{id: '5eba7a1510e66775743ae598},{params:{id: '5eba7a1510e66775743ae598}, {params:{id: '5eba7a1510e66775743ae598} }]
    const paths = portfolios.map(portfolio => {
        return {
            params: {id: portfolio._id}
        }
    })
    // fallback: false means that 'not found' pages will resolve into 404 page
    return {paths, fallback:true};
}

export async function getStaticProps({params}) {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return {props:{portfolio}};
}


export default Portfolio;