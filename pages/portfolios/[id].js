import React, {Component} from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';

import {withRouter} from 'next/router';

class Portfolio extends Component {


    static async getInitialProps(query){
        
        let posts =[];
    
        try {
    
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts/${query.id}');
          posts = res.data;
    
        } catch(e) {
          console.error(e);
        }
    
        return {posts:posts.slice(0,10)
        
        };
    
        
    
      }




    render() { 
        return (
            <BaseLayout>
                <h1>
                    I am Portfolio page
                </h1>
                <h2>
                    {this.props.router.query.id}
                </h2>
            </BaseLayout>
          );
    }
}
 
export default withRouter(Portfolio);