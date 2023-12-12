import { Task } from "../moduls/task";
import { BrowserLocalStorage } from "./BrowserLocalStorage";

export const todoTasksStorage = new BrowserLocalStorage<Task, Task['id']>(
    'TODO.TASKS',
    () => crypto.randomUUID()
);