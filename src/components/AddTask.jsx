"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

export function AddTask({ AddATask }) {
    return (
        <Modal>
            <Button variant="secondary">Add more Tasks</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="flex flex-row items-center gap-4">
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add a task</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={AddATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" type="text">
                                        <Label>Task Title</Label>
                                        <Input placeholder="Enter your task title" />
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
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}