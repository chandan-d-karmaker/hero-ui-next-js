'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

export const AddATask = async (formData) =>{

    // lengthy way
    // const title = formData.get('title');
    // const description = formData.get('description');
    // const status = formData.get('status');
    // const priority = formData.get('priority');
    // const assignedTo = formData.get('assignedTo');

    // const newTask = {
    //     title,
    //     description,
    //     status,
    //     priority,
    //     assignedTo
    // }

    // fast (lazy) way

    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask);

    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
    }
    return res;
}

export const createTaskAction = async (formData) =>{
    const newTask = Object.fromEntries(formData.entries());
    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
        redirect('/tasks');
    }
}