import axios from 'axios';

class PortfolioApi {

  constructor(accessToken ) {
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.apiUrl = process.env.PORTFOLIO_API_URI + '/portfolios';
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
          const response = await axios.post(this.apiUrl, data, this.config);
          return response;
        } catch (e) {
          console.log(e.message);
          return null
        }
      }

    }


export default PortfolioApi;