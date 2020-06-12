import axios from 'axios';

class PortfolioApi {

  constructor() {
    this.apiUrl = process.env.PORTFOLIO_API_URI + '/portfolios';
  }

    async getAll() {
        try {
          const data = await axios.get(this.apiUrl)
          return data;
        } catch (e) {
          console.log(e.message);
          return null
        }
      }
    async getById(id) {
        try {
          const data = await axios.get(`${this.apiUrl}/${id}`)
          return data;
        } catch (e) {
          console.log(e.message);
          return null
        }
      }

      async createPortfolio(data) {

        try {
          const data = await axios.post(this.apiUrl, data);
          return data;
        } catch (e) {
          console.log(e.message);
          return null
        }
      }

    }


export default PortfolioApi;