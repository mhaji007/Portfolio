import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/components/hoc/withAuth';
import PortfolioForm from '@/components/PortfolioForm';


const PortfolioNew = ({user, loading: userLoading}) => {

    const createPortfolio = (data) => {
        alert(JSON.stringify(data));
    }
    return (
        <BaseLayout
        user ={user}
        loading = {userLoading}>
            <BasePage header = "Create Portfolio">
                <PortfolioForm onSubmit={createPortfolio}/>
            </BasePage>
        </BaseLayout>
    )

}


export default withAuth(PortfolioNew)("admin");




