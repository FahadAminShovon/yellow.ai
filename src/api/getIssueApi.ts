import axios from '../axios';
import { BASE_URL, PER_PAGE } from '../constants';
import { getIssuRoute } from '../utils/apiRoutes';
import { StatusType } from '../utils/GenericTypes';

export interface IssueType {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: AssigneesEntityOrCreatorOrUserOrAssignee;
  labels?: LabelsEntity[];
  state: string;
  locked: boolean;
  assignee: AssigneesEntityOrCreatorOrUserOrAssignee;
  assignees?: AssigneesEntityOrCreatorOrUserOrAssignee[] | null;
  milestone?: Milestone;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: null;
  author_association: string;
  active_lock_reason?: null;
  body: string;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: null;
}
export interface AssigneesEntityOrCreatorOrUserOrAssignee {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface LabelsEntity {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}
export interface Milestone {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  description: string;
  creator: AssigneesEntityOrCreatorOrUserOrAssignee;
  open_issues: number;
  closed_issues: number;
  state: string;
  created_at: string;
  updated_at: string;
  due_on: string;
  closed_at?: null;
}
export interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

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
    if (typeof setLoader === 'function') setLoader(true);
    console.log(error);
  } finally {
    if (typeof setLoader === 'function') setLoader(false);
  }
};
