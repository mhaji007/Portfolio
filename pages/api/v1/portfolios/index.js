// Serverless funciton - Contains auth0 portfolio creation functionality

// import axios from 'axios'
import PortfolioApi from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0'

export default async function createPortfolio(req, res) {
    try {
        const {accessToken} = await auth0.getSession(req);

        const json = await new PortfolioApi(accessToken).createPortfolio(req.body)
        // await axios.post(process.env.PORTFOLIO_API_URI + '/portfolios', data);
        return res.json(json.data);
    }catch(e){
        // return res.status(e.status || 400).end(e.message);
        return res.status(e.status || 422).json(e.response.data);
    }
}