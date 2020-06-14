import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/components/hoc/withAuth';
import PortfolioForm from '@/components/PortfolioForm';
//import {createPortfolio} from '@/actions/portfolios';
import {useCreatePortfolio} from '@/actions/portfolios';
import Redirect from '@/components/shared/Redirect';

const PortfolioNew = ({user, loading: userLoading}) => {

    const [createPortfolio, {data, loading, error}] = useCreatePortfolio();

    if(data) {
        return <Redirect to ="/portfolios"/>
    }

    // const _createPortfolio = (data) => {
    //     createPortfolio(data)
    // }

    return (
        <BaseLayout
        user ={user}
        loading = {userLoading}>
            <BasePage header = "Create Portfolio">
                {/* //<PortfolioForm onSubmit={_createPortfolio}/> */}
                <PortfolioForm onSubmit={createPortfolio}/>
                {error&& <div className="alert alert-danger mt-2">{error}</div>}
            </BasePage>
        </BaseLayout>
    )

}


export default withAuth(PortfolioNew)("admin");




