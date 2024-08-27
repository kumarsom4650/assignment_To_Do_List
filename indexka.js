document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('allBtn').addEventListener('click', () => filterTasks('all'));
document.getElementById('completedBtn').addEventListener('click', () => filterTasks('completed'));
document.getElementById('pendingBtn').addEventListener('click', () => filterTasks('pending'));

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task';
    li.dataset.status = 'pending';

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'completeBtn';
    completeBtn.addEventListener('click', function() {
        taskText.classList.toggle('completed');
        li.dataset.status = li.dataset.status === 'pending' ? 'completed' : 'pending';
        completeBtn.disabled = li.dataset.status === 'completed';
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(taskButtons);

    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('#taskList .task');
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.dataset.status === 'completed' ? 'flex' : 'none';
                break;
            case 'pending':
                task.style.display = task.dataset.status === 'pending' ? 'flex' : 'none';
                break;
        }
    });
}
