import renderSearchResult from '../renders/render_search_result';
import settings from '../settings/settings';

export default function loadUsers(username) {
  const url = `${settings.api_url}/${settings.game}/account/list/?search=${username}`;
  // create request to the url and return a promise

  return window.fetch(url)
         .then(response => response.json())
         .then(response => {
           renderSearchResult(response.data)
         })
         .catch(() => alert('alert'));
}
