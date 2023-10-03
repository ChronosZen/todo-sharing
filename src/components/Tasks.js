import Task from "./Task";
import { useLocation } from "react-router-dom";
const Tasks = ({ tasks, onDelete, onToggle, onupdateStatus }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname !== "/completed"
        ? tasks
            .filter((task) => task.status !== "completed")
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onupdateStatus={onupdateStatus}
              />
            ))
        : tasks
            .filter((task) => task.status === "completed")
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onupdateStatus={onupdateStatus}
              />
            ))}
    </>
  );
};

export default Tasks;
