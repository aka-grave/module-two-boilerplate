export default function renderSearchResult(accounts) {
  const list = document.querySelector('#search-results');
  let html = '';


  for (const item of accounts) {
    html += `<li><button class="js-nickname" data-user-id="${item.account_id}" id="userName_${item.nickname}">${item.nickname}</button></li>`;
  }

  list.innerHTML = html;
}
