import TaskCard from '@/components/TaskCard';
import { getTasks } from '@/lib/task';
import React from 'react';

const TaskPage = async () => {

    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;