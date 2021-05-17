import { noop } from '../utils';

export const fetchData = ({ fail = noop, success = noop, options = {}, url }) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok || response.status >= 400) {
        return fail(response);
      }

      if (response.status === 204) {
        return succuess(response);
      }

      return response.json().then(success);
    }, fail);
};