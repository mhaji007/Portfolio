import { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';
import {useGetUser} from '@/actions/user';

const ROLES = ["Developer", "Designer", "Perpetual Student"]

const Index = () => {

    const [isFlipping, setIsFlipping] = useState(false);
    const {data, loading} = useGetUser();

    const flipInterval = useRef();

    useEffect(() => {
      startAnimation();
      return () => flipInterval.current && clearInterval(flipInterval.current)
    }, []);
  
    const startAnimation = () => {
      flipInterval.current = setInterval(() => {
        setIsFlipping(prevFlipping => !prevFlipping);
      }, 20000);
    }

    return (
        <BaseLayout
        user ={data}
        loading = {loading}
        navClass="transparent"
        //className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}>
            className={`cover cover-blue`}>
                <BasePage indexPage>
                
                    <div className="main-section">
                        <div className="background-image">
                            <img src="/images/background-index.png"/>
                        </div>

                <Container>
                    <Row>
                        <Col md="6">
                            <div className="hero-section">
                                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                                    <div className="front">   
                                        <div className="image image-1"> {/* src="/images/Icon-02.jpg"> */}
                                            <div className="hero-section-content">
                                                <h2>
                                                    Full Stack Web Developer
                                                </h2>
                                                <div className="hero-section-content-intro">
                                                    {/* Have a look at my portfolio and job history */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shadow-custom">
                                            <div className="shadow-inner"></div>
                                        </div>
                                    </div>
                                    <div className="back">   
                                        <div className="image image-1"> {/* src="/images/Icon-02.jpg"> */}
                                            <div className="hero-section-content">
                                                <h2>
                                                    Full Stack Web Developer
                                                </h2>
                                                <div className="hero-section-content-intro">
                                                    {/* Have a look at my portfolio and job history */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shadow-custom shadow-custom-orange">
                                            <div className="shadow-inner"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                            <div className="hero-welcome-text">
                                <h1>
                                    Hello, I'm Mehdi<br/><br/>
                                    <p>
                                    </p>
                                </h1>
                            </div>
                            <Typed
                                loop
                                strings={ROLES}
                                typeSpeed={70}
                                backSpeed={70}
                                backDelay={1000}
                                loopCount={0}
                                showCursor
                                className="self_typed"
                                cursorChar="|"></Typed>
                            <div className="hero-welcome-bio">
                                <h1>
                                     Let's connect, communicate, and collaborate.
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    </div>
            </BasePage>
        </BaseLayout>
    )
}

export default Index;