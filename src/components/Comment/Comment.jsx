/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id, name } = comment;

  const commentStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/comment/${id}`);
  };

  return (
    <div style={commentStyle}>
      <h4>Comment Id: {id}</h4>
      <p>{name}</p>
      <Link to={`/comment/${id}`}>Comment Details</Link>
      <button onClick={handleShowDetails}>Click to See Details</button>
    </div>
  );
};

export default Comment;
