import {useGetUser} from '@/actions/user';
import Redirect from '@/components/shared/Redirect';
import {isAuthorized} from '@/utils/auth0';


const withAuth = Component => role => {
    return props => {

        const {data, loading} = useGetUser();
        // const router = useRouter();  if not using the custom redirect component
    
        if (loading) {
            return <p>Loading...</p>
        }

        if(!data) {
            return <Redirect ssr to="/api/v1/login"/>
            
        }else {
            
            // checks for user role on the client side
            if(role && !isAuthorized(data,role)) {

                 return <Redirect ssr to="/api/v1/login"/>
            }

            // if(data && !data[process.env.AUTH0_NAMESPACE + '/roles'] .includes(role))
            // return <Redirect ssr to="/api/v1/login"/>

            return <Component user={data} loading={loading} {...props}/>
        }
    }
}

export default withAuth;