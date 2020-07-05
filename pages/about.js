import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
    const {data, loading} = useGetUser();

    useEffect(() => {
        return () => {
          window.__isAboutLoaded = true;
        }
      })
    
      const createFadeInClass = () => {
        if (typeof window !== 'undefined') {
          return window.__isAboutLoaded ? '' : 'fadein';
        }
    
        return 'fadein';
      }
    

    return (
        <BaseLayout
        user ={data}
        loading = {loading}>
                  <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              {/* <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4> */}
              <p className={`subsubTitle ${createFadeInClass()}`}><img className="image" src="/images/Icon-02.jpg"/></p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Mehdi Hajikhani. I am a software developer from California. </p>
              <p>
                I graduated from Florida International University with a bachelor's degree in Computer Science and
                hold another bachelor's in Petroleum Engineering.
              </p>
              <p>
              I have experience programming in different languages such as C, Java, PHP, JavaScript
               as well as designing and creating user interfaces for websites and mobile applications using React.js and React Native.
               In my free time, I enjoy playing the piano, drawing and watching documentaries.
              </p>
            </div>
          </Col>
        </Row>
            </BasePage>
        </BaseLayout>
    )

}

export default About;




