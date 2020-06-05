import {useGetUser} from '@/actions/user';
import Redirect from '@/components/shared/Redirect';


const withAuth = (Component) => {
    return props => {

        const {data, loading} = useGetUser();
        // const router = useRouter();  if not using the custom redirect component
    
        if (loading) {
            return <p>Loading...</p>
        }

        if(!data) {
            return <Redirect ssr to="/api/v1/login"/>

        }else {
            return <Component user={data} loading={loading} {...props}/>
        }
    }
}

export default withAuth;