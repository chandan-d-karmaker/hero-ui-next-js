import task from '../data/tasks.json';

export const getTasks = async () =>{
    return task;
}

export const postTask = async (newTask) => {
    newTask.id = task.length + 1;
    task.push(newTask);
    return {ok: true, message: 'task added successfully'};
}