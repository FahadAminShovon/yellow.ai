import axios from '../axios';
import { BASE_URL, PER_PAGE } from '../constants';
import { getIssuRoute } from '../utils/apiRoutes';
import { StatusType } from '../utils/GenericTypes';
import { IssueType } from './getIssueApi.types';

type Params = {
  queryParams?: {
    per_page?: number;
    page?: number;
    state?: StatusType;
  };
  callback: React.Dispatch<React.SetStateAction<IssueType[]>>;
  setLoader?: (val: boolean) => void;
};

export const getIssue = async ({
  callback,
  setLoader,
  queryParams = { page: 1, per_page: PER_PAGE, state: 'open' },
}: Params) => {
  if (typeof setLoader === 'function') setLoader(true);
  try {
    const response = await axios({
      baseURL: BASE_URL,
      method: 'GET',
      url: getIssuRoute(),
      params: { ...queryParams },
    });
    if (response && response.data && Array.isArray(response.data)) {
      callback((arr) => [...arr, ...response.data]);
    } else {
      throw new Error('Invalid response');
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (typeof setLoader === 'function') setLoader(false);
  }
};
