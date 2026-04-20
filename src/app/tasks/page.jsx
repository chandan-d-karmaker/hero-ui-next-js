import { AddTask } from '@/components/AddTask';
import TaskCard from '@/components/TaskCard';
import { AddATask } from '@/lib/actions';
import { getTasks } from '@/lib/task';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TaskPage = async () => {

    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks: {tasks.length}</h2>
            <AddTask AddATask={AddATask}></AddTask>
            <Link href='/tasks/new'>
                <Button>Add a new task</Button>
            </Link>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskPage;