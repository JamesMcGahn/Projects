const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'

    },
    {
        name: 'Jen Doe',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'

    },
    {
        name: 'Sam Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'

    },
    {
        name: 'Sally Doe',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'

    },
]

const profiles = profileIterator(data);
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Age: ${currentProfile.age}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
    </ul>
    `
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        window.location.reload();
    }

}

// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
