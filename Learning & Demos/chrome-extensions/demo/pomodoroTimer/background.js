chrome.alarms.create('pomodoroTimer', {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'pomodoroTimer') {
    chrome.storage.local.get(['timer', 'isRunning', 'timeOption'], (result) => {
      if (result.isRunning) {
        let timer = result.timer + 1;
        let isRunning = true;
        if (timer === 60 * result.timeOption) {
          this.registration.showNotification('Pomodoro Timer', {
            body: `${result.timeOption} minutes has passed!`,
            icon: 'icon.png',
          });
          timer = 0;
          isRunning = false;
        }
        chrome.storage.local.set({ timer, isRunning });
      }
    });
  }
});

chrome.storage.local.get(['timer', 'isRunning', 'timeOption'], (result) => {
  chrome.storage.local.set({
    timer: result.timer ?? 0,
    isRunning: result.isRunning ?? false,
    timeOption: result.timeOption ?? 25,
  });
});
