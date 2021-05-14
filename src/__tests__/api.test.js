import getAPI from '../helpers/APIHelpers';
import axios from 'axios';

jest.mock('axios');

it('fetches data successfully from the API', async () => {
  const data = {
    q: 'united states news',
    pageNumber: '1',
    pageSize: '25',
    autoCorrect: 'true',
    withThumbnails: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null',
  };

  const res = axios.get.mockImplementationOnce(() => Promise.resolve(data));
});
