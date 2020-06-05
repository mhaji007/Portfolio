import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {authorizedUser} from '@/utils/auth0';

const SecretSSR = ({user}) => {
    
        return (
            <BaseLayout user={user} loading={false}>
                <BasePage>
                    <h1>
                        I am Secret page - {user && user.name}
                    </h1>
                </BasePage>
            </BaseLayout>
        )

    }


    // Server-side redirect
    export const getServerSideProps = async ({req, res}) => {
        const user = await authorizedUser(req, res);

        return {
            props: {user}
        }
        

        
        // const session = await auth0.getSession(req);
        // if(!session ||!session.user) {
        //     res.writeHead(302, {
        //         location:'/api/v1/login'
        //     });
        //     res.end();
        //     return{props:{}};
        // }
        // return {
        //     props:{user:session.user}
        // }
    }

    export default SecretSSR;





// traditional syntax

// function withAuth(Component) {
//     return function (props) {
//         return <Component title="" {...props}/>
//     }


// }

// // arrow function syntax
// const withAuth = (Component) =props => <Component title="" {...props}/>
    



