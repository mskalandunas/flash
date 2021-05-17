import { fetchData } from '../utils';

export const fetchRegistry = ({ url, success, fail }) => fetchData({ url, success, fail });