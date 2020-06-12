// import axios from 'axios'
import PortfolioApi from '@/lib/api/portfolios';

export default async function createPortfolio(req, res) {
    try {
        const data = req.body
        await new PortfolioApi().createPortfolio(data)
        // await axios.post(process.env.PORTFOLIO_API_URI + '/portfolios', data);
        return res.json({message: 'Portfolio was created!'});
    }catch(e){
        return res.status(e.status || 400).end(e.message);
    }
}