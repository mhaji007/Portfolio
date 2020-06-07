import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {authorizedUser, withAuth} from '@/utils/auth0';

const SecretSSR = ({user, title}) => {
        return (
            <BaseLayout user={user} loading={false}>
                <BasePage>
                    <h1>
                        I am Secret page - {user && user.name}
                    </h1>
                    <h2>
                        {title}
                    </h2>
                </BasePage>
            </BaseLayout>
        )

    }


    // Server-side redirect
    // export const getServerSideProps = async ({req, res}) => {
    //     const user = await authorizedUser(req, res);

    //     return {
    //         props: {user}
    //     }
        

        
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
    // }

    const getTitle = () => {
        return new Promise((res) => {
          setTimeout(() => {
            res({title: 'My new title!'})
          }, 500)
        })
    }

    export const getServerSideProps = withAuth(async ({req, res}, user) => {
        const title = await getTitle();
        return title;
      })();

    export default SecretSSR;





// traditional syntax

// function withAuth(Component) {
//     return function (props) {
//         return <Component title="" {...props}/>
//     }


// }

// // arrow function syntax
// const withAuth = (Component) =props => <Component title="" {...props}/>
    



