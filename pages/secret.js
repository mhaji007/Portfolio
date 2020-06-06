import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';
// import {useRouter} from 'next/router'; if not using the custom redirect
// component
import Redirect from '@/components/shared/Redirect';
import withAuth from '@/components/hoc/withAuth';

const Secret = ({user, loading}) => {
        return (
            <BaseLayout user={user} loading={loading}>
                <BasePage>
                    <h1>
                        I am Secret page - {user.name}
                    </h1>
                </BasePage>
            </BaseLayout>
        )

    }

    export default withAuth(Secret)();





// traditional syntax

// function withAuth(Component) {
//     return function (props) {
//         return <Component title="" {...props}/>
//     }


// }

// // arrow function syntax
// const withAuth = (Component) =props => <Component title="" {...props}/>
    



