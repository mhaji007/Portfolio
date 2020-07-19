import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useState } from 'react';
import {useRouter} from 'next/router';
import {useGetUser} from '@/actions/user';
import { useDeletePortfolio } from '@/actions/portfolios';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';
import { isAuthorized } from '@/utils/auth0';

import {Row, Col, Button } from 'reactstrap';
const Portfolios = ({portfolios: initialPortfolios}) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [deletePortfolio, {data, error}] = useDeletePortfolio();
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
    
    const _deletePortfolio = async (e, portfolioId) => {
      e.stopPropagation();
      const isConfirm = confirm('Are you sure you want to delete this portfolio?');
      if (isConfirm) {
        await deletePortfolio(portfolioId);
        setPortfolios(portfolios.filter(p => p._id !== portfolioId));
      }
    }
    
    
    return (
      <BaseLayout
      user ={dataU}
      loading = {loadingU}>
            <BasePage
            title="Portfolios - Mehdi Hajikhani"
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
                        {/* if we have a user and this user has a role of admin */}
                        { dataU && isAuthorized(dataU, 'admin') &&
                          <>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                              }}
                              className="mr-2"
                              color="secondary">Edit</Button>
                                                <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger">Delete</Button>
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
      props: { portfolios },
      unstable_revalidate: 1
    }
  }
  
  export default Portfolios;