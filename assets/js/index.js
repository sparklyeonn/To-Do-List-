const btnAdd=Add = document.querySelector('#newTask');
const task = document.querySelector('#newTask');
const tbodyTasks = document.querySelector('#tasks');
const taskList = [];

const addTask = () =>{
    if(task.value === ''){
        alert('Deve ingresar una tarea.');
        return;
    }

    const newTask = {
        id: taskList.length + 1,
        name: task.value,
        status: false
    };

    taskList.push(newTask);
    console.log(taskList)
    updateList ();
}

btnAdd.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        addTask()
    }
});

const actualizarEstado = (taskId) =>{
    const index = taskList.findIndex(task => task.id === taskId);
    if( taskList[index].status === false){
        taskList[index].status =true;
    } else {
        taskList[index].status = false;
    }
    updateList();
}

const eliminar = (taskId) => {
    const confirmation = confirm('Are you sure to delete the task?');
    if (confirmation){
        const index = taskList.findIndex(task => task.id === taskId);
        taskList.splice(index, 1);
        updateList();
    }
}

const updateList =() => {
    let btnCanDone = document.getElementById('canDone');
    let success = 0
    let cantidad = 0
    let html = '';
    for(let task of taskList){
        html += `
        <tr class="${task.status ? 'bg-success' : 'bg-light'}">
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td class="text-center"><button onclick="actualizarEstado(${task.id})" class="btn btn-${task.status ? 'success' : 'warning'}">${task.status ? 'Realizada' : 'Pendiente' } </button></td>
            <td class="text-end"><button id=button onclick="eliminar(${task.id})" class="btn btn-danger" id="btnEliminar">Eliminar</button></td>
        </tr>`
        cantidad ++;
        if(task.status) {
            success++;
        }
        }

        task.value ='';
        tbodyTasks.innerHTML = html;
        document.querySelector('#canTareas').innerHTML = cantidad
        document.querySelector('#canRealizadas').innerHTML = success
}
