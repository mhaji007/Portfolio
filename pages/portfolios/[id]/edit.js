import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/components/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios'

const PortfolioEdit = ({user}) => {
    const router = useRouter();
    const { data } = useGetPortfolio(router.query.id);
    debugger
    // debugger
    // const {data:portfolio, error, loading} = useGetUser(); 
    // useGetData(router.query.id?`/api/v1/posts/${router.query.id}`:null); // -  used if not using SWR
    // const {data: portfolio, error, loading} =
    // useGetPostById(router.query.id);
    // const {data:dataU, loading:loadingU} = useGetUser();
    return (
        <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">

      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(PortfolioEdit)('admin');


// Fetching data client side. Statically generated but No to need to render on the build time here

// // // Fetch portfolio details serverside

// // export async function getServerSideProps({query}) {
// //     const json = await new PortfolioApi().getById(query.id);
// //     const portfolio = json.data;

// //     return {props:{portfolio}};
// // }


// // Executed at build time
// // Prerenders dynamic pages
// // By combining getStaticPaths and getStaticProps
// // We can take advantage of both static optimization 
// // and dynamic rendering
// // Statically optimized and also have the dynamic data
// export async function getStaticPaths() {
//     const json = await new PortfolioApi().getAll();
//     const portfolios = json.data;

//     // Get paths we want to pre-render based on portfolio
//     // array of objects [{params:{id: '5eba7a1510e66775743ae598},{params:{id: '5eba7a1510e66775743ae598}, {params:{id: '5eba7a1510e66775743ae598} }]
//     const paths = portfolios.map(portfolio => {
//         return {
//             params: {id: portfolio._id}
//         }
//     })
//     // fallback: false means that 'not found' pages will resolve into 404 page
//     return {paths, fallback:false};
// }

// export async function getStaticProps({params}) {
//     const json = await new PortfolioApi().getById(params.id);
//     const portfolio = json.data;
//     return {props:{portfolio}};
// }

