import { http } from './http';
import { ui } from './ui';

// get post on dom load
document.addEventListener('DOMContentLoaded', getPosts)

document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', enableEdit);
document.querySelector('.card-form').addEventListener('click', cancelEdit);


function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

function submitPost() {
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value
  if (title === '' || body === '') {
    ui.showAlert('Please enter some text', 'alert alert-danger')
  } else {
    const data = { title, body }
    if (id === '') {
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success');
          ui.changeFormState('add')
          getPosts();
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
}

function deletePost(e) {
  e.preventDefault()
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => {
        console.log(err)
      })

  }
}

function enableEdit(e) {
  e.preventDefault()
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const data = { id, title, body }

    ui.fillForm(data);
  }
}

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add')
  }
  e.preventDefault()
}