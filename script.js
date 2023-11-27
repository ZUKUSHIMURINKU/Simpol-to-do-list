
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
  
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="editBtn" onclick="editTask(${index})">Edit</button>
      <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    taskInput.value = '';
  }
}


function editTask(index) {
  const editedTask = prompt('Edit your task:', tasks[index]);
  if (editedTask !== null) {
    tasks[index] = editedTask.trim();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}


function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}


displayTasks();
