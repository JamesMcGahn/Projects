const timeEl = document.getElementById('time');
const nameEl = document.getElementById('name');
const timerEl = document.getElementById('timer');

chrome.action.setBadgeText(
  {
    text: 'TIME',
  },
  () => {
    console.log('finished setting badge text');
  },
);

chrome.storage.sync.get(['name'], (res) => {
  const name = res.name ?? '???';
  nameEl.textContent = `Your name is ${name}`;
});

function updateTimeEls() {
  const currentTime = new Date().toLocaleTimeString();
  timeEl.textContent = `The time is: ${currentTime}`;

  chrome.storage.local.get(['timer'], (res) => {
    const timer = res.timer ?? 0;
    timerEl.textContent = `Your timer is at: ${timer}`;
  });
}

updateTimeEls();
setInterval(updateTimeEls, 1000);

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: true });
});
stopBtn.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: false });
});
resetBtn.addEventListener('click', () => {
  chrome.storage.local.set({ timer: 0, isRunning: false });
});
