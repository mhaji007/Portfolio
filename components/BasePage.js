import {Container} from 'reactstrap';
import Head from 'next/head'


const BasePage = props => {
    const {
        indexPage,
        className = '',
        header,
        title = 'Portfolio - Mehdi Hajikhani',
        metaDescription='My name is Mehdi Hajikhani and I am an experienced software developer and designer.',
        children } = props;

        const pageType = indexPage ? 'index-page' : 'base-page';
    return (
        <>
        <Head>
        
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          key="description"
          content={metaDescription} />
        <meta
          name="title"
          key="title"
          content={title} />
        </Head>
        <div className={`${pageType} ${className}`}>
          <Container>
            { header &&
              <div className="page-header">
                <h1 className="page-header-title">{header}</h1>
              </div>
            }
            {children}
          </Container>
        </div>
      </>
    )
}

export default BasePage;