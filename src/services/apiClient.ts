import axios from 'axios';

export default axios.create({
  baseURL: 'https://falatu.herokuapp.com/api/v1',
});
