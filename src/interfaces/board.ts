import TasksColumn from "./tasksColumn";

export default interface Board {
  name: string;
  columns: TasksColumn[];
}
