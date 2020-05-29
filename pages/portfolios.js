import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';
import BasePage from '../components/BasePage';

import axios from 'axios';

const Portfolios = ({posts}) => {


  const fetchPosts = (posts) =>{
    return posts.map(post => 
     
        <li key = {post.id} style={{'fontSize':'20px'}}>
          <Link route ={`/portfolios/${post.id}`}>
          <a>
          {post.title}
          </a>
          </Link>
        </li>
      )
    }
  
    return (
    <BaseLayout>
      <BasePage>
      <h1> I am Portfolio Page </h1>
      <ul>
        {fetchPosts(posts)}
      </ul>
      </BasePage>
    </BaseLayout>
    )
  }


Portfolios.getInitialProps = async () =>{
        
  let posts =[];

  try {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;

  } catch(e) {
    console.error(e);
  }

  return {posts:posts.slice(0,10)};



}

export default Portfolios;