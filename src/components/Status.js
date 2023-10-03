import { useLocation } from "react-router-dom";

const Status = ({ status, setStatus, onupdateStatus, taskId }) => {
  const location = useLocation();
  return (
    <div className="form-control">
      <label>Status</label>
      <select
        disabled={location.pathname === "/completed" ? true : false}
        name="status"
        placeholder="Select a task's status"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          taskId && onupdateStatus(taskId, e.target.value);
        }}>
        <option value="not-started">Not Started</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Status;
