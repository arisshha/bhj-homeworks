const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const addTaskButton = document.getElementById('tasks__add'); 

function addTask() {
    if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value.trim();

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskTitleDiv = document.createElement('div');
        taskTitleDiv.classList.add('task__title');
        taskTitleDiv.textContent = taskText;

        const taskRemoveLink = document.createElement('a');
        taskRemoveLink.classList.add('task__remove');
        taskRemoveLink.href = '#';
        taskRemoveLink.textContent = '×';

        taskDiv.appendChild(taskTitleDiv);
        taskDiv.appendChild(taskRemoveLink);

        taskList.appendChild(taskDiv);

        taskInput.value = '';
    }
}
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

addTaskButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    addTask();
});

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('task__remove')) {
        const taskToRemove = event.target.closest('.task');
        taskToRemove.remove();
    }
});