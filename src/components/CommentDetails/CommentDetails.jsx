import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {

    const comment = useLoaderData();
    const {id, email, name, postId} = comment;

    const navigate = useNavigate();

    const handleGoBack =()=>{
        navigate(-1)
    }

    return (
        <div>
            <h2>Comment ID: {id}</h2>
            <h3>Post ID: {postId}</h3>
            <h4>Email: {email}</h4>
            <p>{name}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default CommentDetails;