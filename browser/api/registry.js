import { wrapURLs } from '../utils';

export const batchFetchDecks = ({ url, success, fail }) => {
    return fetch(url).then(response => response.json()).then(data => {
        return Promise.all(wrapURLs(data.decks)).then(success, fail).catch(fail);
    });
};