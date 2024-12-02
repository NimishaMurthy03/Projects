// script.js

// Selecting DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener for adding a task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Append to the task list
    taskList.appendChild(taskItem);

    // Clear the input
    taskInput.value = '';

    // Add delete functionality
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });
  } else {
    alert('Please enter a task!');
  }
});
