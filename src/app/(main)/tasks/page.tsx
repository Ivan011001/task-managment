import CreateTaskForm from "~/app/_components/create-task-form";
import TaskList from "~/app/_components/task-list";

const TasksPage = () => {
  return (
    <div className="flex flex-col justify-center pt-40">
      <CreateTaskForm />

      <TaskList />
    </div>
  );
};

export default TasksPage;
