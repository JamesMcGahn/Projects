chrome.storage.local.get(['shows'], (res) => {
  console.log(res.shows);
  for (const show of res.shows) {
    renderShow(show);
  }
});

function renderShow(show) {
  const showDiv = document.createElement('div');

  const title = document.createElement('h3');
  title.textContent = show.show.name;

  const image = document.createElement('img');
  image.src = show.show.image ? show.show.image.medium : null;

  showDiv.appendChild(title);
  showDiv.appendChild(image);
  document.body.appendChild(showDiv);
}
