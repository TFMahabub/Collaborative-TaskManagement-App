import { PriorityType, StatusType } from "./globalTypes";

export interface TaskType {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: PriorityType;
  status: StatusType;
}
