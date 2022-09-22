export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const res = await fetch(`https://api.github.com/search/users?${params}`);
  const data = await res.json();
  return data.items;
};

export const searchUserAndRepos = async (login) => {
  if (login === '') {
    return;
  }
  const users = await fetch(`https://api.github.com/users/${login}`);
  const repos = await fetch(`https://api.github.com/users/${login}/repos`);

  if (users.status === 404 || repos.status === 404) {
    window.location = '/notfound';
    return;
  }
  return { user: await users.json(), repos: await repos.json() };
};
