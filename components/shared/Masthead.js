import { Container, Row, Button } from 'reactstrap';
import Link from 'next/link'

const Masthead = ({imagePath}) =>
  <div className="masthead" style={{"backgroundImage": `url(${imagePath})`}}>
    <div className="overlay"></div>
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Got something on your mind?</h1>
            <span className="subheading">
              Have it heard{' '}
                <Link href='/blogs/editor'>
                <Button color="primary">Create a new Blog</Button>
              </Link></span>
          </div>
        </div>
      </Row>
    </Container>
  </div>

export default Masthead;