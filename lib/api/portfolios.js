import axios from 'axios';
import BaseApi from './BaseApi';

class PortfolioApi extends BaseApi {

  constructor(accessToken ) {
    // this.config = {}

    // if (accessToken) {
    //   this.config.headers = {
    //     authorization: `Bearer ${accessToken}`
    //   }
    // }

    // this.apiUrl = process.env.PORTFOLIO_API_URI + '/portfolios';
    super(accessToken, '/portfolios');
  }

  // async getById(id) {
  //   try {
  //     const data = await axios.get(`${this.apiUrl}/${id}`)
  //     return data;
  //   } catch (e) {
  //     console.log(e.message);
  //     return null
  //   }
  // }


  getAll() {
    return axios.get(this.apiUrl)
  }

    // async getAll() {
    //     try {
    //       const data = await axios.get(this.apiUrl)
    //       return data;
    //     } catch (e) {
    //       console.log(e.message);
    //       return null
    //     }
    //   }
    // async getById(id) {
    //     try {
    //       const data = await axios.get(`${this.apiUrl}/${id}`)
    //       return data;
    //     } catch (e) {
    //       console.log(e.message);
    //       return null
    //     }
    //   }

    //   async createPortfolio(data) {

    //     try {
    //       const response = await axios.post(this.apiUrl, data, this.config);
    //       return response;
    //     } catch (e) {
    //       console.log(e.message);
    //       return null
    //     }
    //   }
      // async update(id, data) {

      //   try {
      //     const response = axios.patch(`${this.apiUrl}/${id}`, data, this.config);
      //     return response;
      //   } catch (e) {
      //     console.log(e.message);
      //     return null
      //   }
      // }
      // async delete(id) {

      //   try {
      //     const response = axios.delete(`${this.apiUrl}/${id}`, this.config);
      //     return response;
      //   } catch (e) {
      //     console.log(e.message);
      //     return null
      //   }
      // }

      // update(id, data) {
      //   return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
      // }      
      
      delete(id) {
        return axios.delete(`${this.apiUrl}/${id}`, this.config);
      }

    }



export default PortfolioApi;