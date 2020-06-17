import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {useRouter} from 'next/router';
import {useGetUser} from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';

import {Row, Col, Button } from 'reactstrap';
const Portfolios = ({portfolios}) => {
   const router = useRouter();
   const {data:dataU, loading:loadingU} = useGetUser();

  //  const renderPortfolios = (portfolios) => {
  //   return portfolios.map(portfolio =>
  //     <li key={portfolio._id} style={{'fontSize': '20px'}}>
  //       <Link as={`/portfolios/${portfolio._id}`} href="/portfolios/[id]">
  //                   <a>
  //                       {portfolio.title}
  //                   </a>
  //               </Link>
  //           </li>
  //       )
  //   }

    return (
        <BaseLayout
        user ={dataU}
        loading = {loadingU}>
            <BasePage
            header="Portfolios"
             className="portfolio-page">
              <Row>
                  {portfolios.map(portfolio =>
                  <Col
                   key={portfolio._id}
                   onClick = {() => {
                    router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
                   }}  
                   md="4">
                    <PortfolioCard
                        portfolio={portfolio}>
                        { dataU && isAuthorized(dataU, 'admin') &&
                          <>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                              }}
                              className="mr-2"
                              color="secondary">Edit</Button>
                            <Button color="danger">Delete</Button>
                          </>
                        }
                    </PortfolioCard>
                  </Col>
                        )
                  }
              </Row>
            </BasePage>
        </BaseLayout>
    )
}

// Called during the build time
// Improves page performance 
// Will create static page with dynamic data

export async function getStaticProps() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json?.data || [];
    return {
      props: { portfolios }
    }
  }
  
export default Portfolios;