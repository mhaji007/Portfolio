import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';
// import {useRouter} from 'next/router'; if not using the custom redirect
// component
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/components/hoc/withAuth';

const Secret = () => {
    const {data, loading} = useGetUser();
    // const router = useRouter();  if not using the custom redirect component

    if (loading) {
        return <p>Loading...</p>
    }
    if (!data && typeof window !== 'undefined') {
        // TODO: Improve return router.push('/api/v1/login'); return null;
        return <Redirect to="/api/v1/login"/>

    } else {

        return (
            <BaseLayout user={data} loading={loading}>
                <BasePage>
                    <h1>
                        I am Secret page
                    </h1>
                </BasePage>
            </BaseLayout>
        )

    }

}


// traditional syntax

// function withAuth(Component) {
//     return function (props) {
//         return <Component title="" {...props}/>
//     }


// }

// // arrow function syntax
// const withAuth = (Component) =props => <Component title="" {...props}/>
    




export default withAuth(Secret);