const nameInput = document.getElementById('name-input');
const timeInput = document.getElementById('time-input');
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', () => {
  console.log(nameInput.value);
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({ name, notificationTime }, () => {
    console.log(`name is set to ${name}`);
  });
});

chrome.storage.sync.get(['name', 'notificationTime'], (res) => {
  nameInput.value = res.name ?? '???';
  timeInput.value = res.notificationTime ?? 10;
});
