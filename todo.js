let taskFormEl = document.getElementById('task-form');
let taskEl = document.getElementById('task-el');

let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];    //Taking Tasks and storing in local Storage in array

//Displaying Tasks
taskFormEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task = taskEl.value;
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    taskEl.value="";
    displayTasks();
});

//Display Tasks in UI

function displayTasks() 
{
    let eachTask='';
    taskList.forEach(function(task,i) 
    {
        eachTask += `<li class="list-group-item list-group-item-secondary mb-2">
                                <span>${task}</span>
                                <i class="bi bi-trash-fill float-end" onclick="deleteTask(${i})"></i>
                                <i class="bi bi-pencil-square float-end me-3" onclick="updateTask(${i})"></i>
                            </li>`
    });

    //console.log(eachTask);

    document.getElementById('task-list-el').innerHTML = eachTask;
}
displayTasks();

function deleteTask(index) {
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}

function updateTask(index) {
    taskEl.value = taskList[index];
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}