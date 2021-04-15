import { http } from './http';
import { ui } from './ui';

// get post on dom load
document.addEventListener('DOMContentLoaded', getPosts)

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}