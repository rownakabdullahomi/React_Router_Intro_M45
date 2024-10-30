import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {

    const comment = useLoaderData();
    const {id, email, name, postId} = comment;

    return (
        <div>
            <h2>Comment ID: {id}</h2>
            <h3>Post ID: {postId}</h3>
            <h4>Email: {email}</h4>
            <p>{name}</p>
        </div>
    );
};

export default CommentDetails;