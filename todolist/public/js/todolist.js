// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        // Create a new task item
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-text">${taskInput.value}</span>
            <button class="complete-button" onclick="completeTask(this)">Complete</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        // Add the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}
function completeTask(button) {
    const taskItem = button.parentNode;
    const taskText = taskItem.querySelector('.task-text');

    // Toggle the 'completed' class for the task text
    taskText.classList.toggle('completed');
}
// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
