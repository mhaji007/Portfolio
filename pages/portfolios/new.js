import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/components/hoc/withAuth';
import PortfolioForm from '@/components/PortfolioForm';


const PortfolioNew = ({user, loading: userLoading}) => {
    return (
        <BaseLayout
        user ={user}
        loading = {userLoading}>
            <BasePage header = "Create Portfolio">
                <PortfolioForm/>
            </BasePage>
        </BaseLayout>
    )

}


export default withAuth(PortfolioNew)("admin");




