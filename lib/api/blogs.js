// import axios from 'axios';
import BaseApi from './BaseApi';

class BlogApi extends BaseApi {

  constructor(accessToken) {
  //   this.config = {}

  //   if (accessToken) {
  //     this.config.headers = {
  //       authorization: `Bearer ${accessToken}`
  //     }
  //   }

  //   this.apiUrl = process.env.PORTFOLIO_API_URI + '/blogs';
  // }

  // update(id, data) {
  //   return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  // }

  // getById(id) {
  //   return axios.get(`${this.apiUrl}/${id}`);
  // }

  // create(data) {
  //   return axios.post(this.apiUrl, data, this.config);
  // }
  super(accessToken, '/blogs');
}
}

export default BlogApi;