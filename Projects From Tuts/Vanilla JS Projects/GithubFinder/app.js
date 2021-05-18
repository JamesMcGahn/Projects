const github = new GitHub
const ui = new UI
// search input

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText.trim() !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User Not Found', 'alert alert-danger')
                } else {
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        ui.clearProfile();
    }
})