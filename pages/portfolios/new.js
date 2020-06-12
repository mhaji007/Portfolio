import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/components/hoc/withAuth';
import PortfolioForm from '@/components/PortfolioForm';
import {createPortfolio} from '@/actions/portfolios'


const PortfolioNew = ({user, loading: userLoading}) => {

    const _createPortfolio = (data) => {
        createPortfolio(data)
    }
    return (
        <BaseLayout
        user ={user}
        loading = {userLoading}>
            <BasePage header = "Create Portfolio">
                <PortfolioForm onSubmit={_createPortfolio}/>
            </BasePage>
        </BaseLayout>
    )

}


export default withAuth(PortfolioNew)("admin");




