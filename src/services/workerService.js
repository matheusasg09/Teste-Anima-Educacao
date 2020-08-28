import appError from '@/utils/appError';
import http from './http';

const resource = 'workers';
export default {
  async workersList() {
    try {
      const response = await http.get(`${resource}`);
      return response;
    } catch (error) {
      const { response } = error;
      // eslint-disable-next-line new-cap
      throw new appError(response, 400);
    }
  },
};
