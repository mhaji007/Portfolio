import axios from 'axios';

class PortfolioApi {

    async getAll() {
        try {
          const data = await axios.get('http://localhost:3001/api/v1/portfolios')
          return data;
        } catch (e) {
          console.log(e.message);
          return null
        }
      }
    }


export default PortfolioApi;