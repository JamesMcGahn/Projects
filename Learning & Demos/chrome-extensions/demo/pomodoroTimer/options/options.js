const timeOption = document.getElementById('time-option');
timeOption.addEventListener('change', (event) => {
  const value = event.target.value;
  if (value < 1 || value > 60) {
    timeOption.value = 25;
  }
});

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', (event) => {
  chrome.storage.local.set({
    timer: 0,
    timeOption: timeOption.value,
    isRunning: false,
  });
});

chrome.storage.local.get(['timeOption'], (result) => {
  timeOption.value = result.timeOption ?? 25;
});
