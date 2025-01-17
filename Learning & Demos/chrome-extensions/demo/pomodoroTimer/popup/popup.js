let tasks = [];
const addTaskBtn = document.getElementById('add-task-btn');
const startBtn = document.getElementById('start-timer-btn');
const resetBtn = document.getElementById('reset-timer-btn');

function updateTime() {
  chrome.storage.local.get(['timer', 'timeOption'], (result) => {
    const time = document.getElementById('time');
    const minutes =
      `${result.timeOption - Math.ceil(result.timer / 60)}`.padStart(2, '0');
    let seconds = '00';
    if (result.timer % 60 != 0) {
      seconds = `${60 - (result.timer % 60)}`.padStart(2, '0');
    }
    time.textContent = `${minutes}:${seconds}`;
  });
}
updateTime();
setInterval(updateTime, 1000);

startBtn.addEventListener('click', () => {
  chrome.storage.local.get(['isRunning'], (result) => {
    chrome.storage.local.set({ isRunning: !result.isRunning }, () => {
      startBtn.textContent = !result.isRunning ? 'Pause Timer' : 'Start Timer';
    });
  });
});

resetBtn.addEventListener('click', () => {
  chrome.storage.local.set({ timer: 0, isRunning: false }, () => {
    startBtn.textContent = 'Start Timer';
  });
});
addTaskBtn.addEventListener('click', () => addTask());

chrome.storage.sync.get(['tasks'], (res) => {
  tasks = res.tasks ?? [];
  renderTasks();
});

function saveTasks() {
  chrome.storage.sync.set({ tasks: tasks });
}

function renderTask(taskNum) {
  const taskRow = document.createElement('div');

  const text = document.createElement('input');
  text.type = text;
  text.placeholder = 'Enter a task...';
  text.value = tasks[taskNum];
  text.className = 'task-input';
  text.addEventListener('change', () => {
    tasks[taskNum] = text.value;
    saveTasks();
  });

  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.value = 'x';
  deleteBtn.className = 'task-delete';
  deleteBtn.addEventListener('click', () => {
    deleteTask(taskNum);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById('task-container');
  taskContainer.appendChild(taskRow);
}

function addTask() {
  const taskNum = tasks.length;
  tasks.push('');
  renderTask(taskNum);
  saveTasks();
}

function deleteTask(taskNum) {
  tasks.splice(taskNum, 1);
  renderTasks();
  saveTasks();
}

function renderTasks() {
  const taskCont = document.getElementById('task-container');
  taskCont.textContent = '';
  tasks.forEach((taskText, taskNum) => {
    renderTask(taskNum);
  });
}
