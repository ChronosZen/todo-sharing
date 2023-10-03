import { FaTimes, FaCheck, FaHistory } from "react-icons/fa";
import Status from "./Status";
import { useState } from "react";
const Task = ({ task, onDelete, onToggle, onupdateStatus }) => {
  const [status, setStatus] = useState(task.status);

  return (
    <div
      onDoubleClick={() => {
        if (task.status !== "completed") onToggle(task.id);
      }}
      className={task.reminder === true ? "task reminder" : "task"}>
      <h3>
        {task.text}
        <div className="d-flex">
          {task.status === "completed" ? (
            <>
              <FaCheck style={{ color: "green", cursor: "initial" }} />
              <FaHistory
                onClick={() => onupdateStatus(task.id, "in-progress")}
              />
            </>
          ) : (
            <></>
          )}
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{ color: "red", cursor: "pointer" }}
          />
        </div>
      </h3>
      <Status
        status={status}
        setStatus={setStatus}
        onupdateStatus={onupdateStatus}
        taskId={task.id}
      />
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
