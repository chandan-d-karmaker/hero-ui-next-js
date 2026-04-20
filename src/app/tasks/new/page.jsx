'use client'
import { createTaskAction } from '@/lib/actions';
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from '@heroui/react';
import React from 'react';

const NewTaskPage = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Add a task</h2>
            <div>
                <Form action={createTaskAction} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text" isRequired
                        minLength={5} validate={(value) => {
                            if (value < 5) 
                                return 'title must be longer that 5 charecters';
                        }}>
                        <Label>Task Title</Label>
                        <Input placeholder="Enter your task title" />
                        <FieldError />
                    </TextField>

                    <TextField className="w-full" name="description" type="text">
                        <Label>Description</Label>
                        <Input placeholder="Enter your task description" />
                    </TextField>
                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="done" textValue="Done">
                                    Done
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="inProgress" textValue="InProgress">
                                    In Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>

                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <TextField className="w-full" name="assignedTo" type="text">
                        <Label>Assigned To</Label>
                        <Input placeholder="Enter assigned person name" />
                    </TextField>

                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">Submit Task</Button>

                </Form>
            </div>
        </div>
    );
};

export default NewTaskPage;