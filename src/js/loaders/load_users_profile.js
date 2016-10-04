import renderUserProfile from '../renders/render_user_profile';
import settings from '../settings/settings';

export default function loadUsersProfile(userId) {
  const url = `${settings.api_url}/${settings.game}/account/info/?account_id=${userId}`;
  // create request to the url and return a promise

  return fetch(url)
      .then(response => response.json())
      .then(response => renderUserProfile(response.data[userId]))
      .catch(() => alert('alert userId'));
}
