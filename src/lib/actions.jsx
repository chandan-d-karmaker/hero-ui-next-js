export const AddATask = async (formData) =>{
    'use server'

    const name = formData.get('name');
    console.log("adding task: ", name);



}