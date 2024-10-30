/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name} = comment;

    const commentStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px"
    }

    return (
        <div style={commentStyle}>
            <h4>Comment Id: {id}</h4>
            <p>{name}</p>
            <Link to={`/comment/${id}`}>Comment Details</Link>
        </div>
    );
};

export default Comment;