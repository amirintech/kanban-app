import Subtask from "./subtask";

export default interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}
