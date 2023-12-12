import { WhithId } from "./WithId";
import { TaskStatus } from "./taskStatus";

export interface Task extends WhithId {
    text: string;
    createDate: string;
    dueDate:string;
    status: TaskStatus;
    }