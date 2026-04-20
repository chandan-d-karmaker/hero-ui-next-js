import { revalidatePath } from "next/cache";
import { postTask } from "./task";

export const AddATask = async (formData) =>{
    'use server'

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