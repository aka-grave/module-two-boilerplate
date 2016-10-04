import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import loadUsers  from './js/loaders/load_user';
import loadUsersProfile from './js/loaders/load_users_profile';
require('./main.css');

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

 https://api.worldoftanks.ru/wot/account/info/?account_id=demo

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

document.addEventListener('DOMContentLoaded', () => {
  // add search button click handler here

  const button = document.querySelector('#search');
  const field = document.querySelector('#username');
  const list = document.querySelector('#search-results');

  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('js-nickname')) {
      const userId = target.dataset.userId;

      loadUsersProfile(userId);
    }
  });

  button.addEventListener('click', () => {
    const value = field.value;

    loadUsers(value);
  });
});
