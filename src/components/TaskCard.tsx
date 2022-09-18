import Task from "../interfaces/task";

export default function TaskCard({ title, subtasks }: Task) {
  const completedSubtasks = subtasks.reduce(
    (prev, curr) => prev + (curr.isCompleted ? 1 : 0),
    0
  );
  return (
    <div className="max-w-[280px] rounded-lg bg-white p-4 py-5 font-bold shadow-md shadow-[#364E7E]/10 duration-150 dark:bg-gray-700">
      <h3 className="mb-1 text-base leading-[1.25] text-gray-900 duration-150 dark:text-white">
        {title}
      </h3>
      <span className="text-xs tracking-wide text-gray-500">
        {completedSubtasks} of {subtasks.length} subtasks
      </span>
    </div>
  );
}
