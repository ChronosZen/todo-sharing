import { Link } from "react-router-dom";

const Completed = ({ children }) => {
  return (
    <>
      <Link to="/">Go Back</Link>
      <div>Completed Tasks</div>
      {children}
    </>
  );
};

export default Completed;
