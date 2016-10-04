export default function renderUserProfile(profile) {
  let html = '';
  const profileContainer = document.querySelector('#userProfile');
  const battles = profile.statistics.all.battles;
  const wins = profile.statistics.all.wins;
  const name = profile.nickname;
  const percentWins = ((wins / battles) * 100).toFixed(2);

  html += `<h1>${name}</h1>`;
  html += `<p>Battles: ${battles}</p>`;
  html += `<p>Percent of Wins: ${percentWins}%</p>`;

  profileContainer.innerHTML = html;
}
