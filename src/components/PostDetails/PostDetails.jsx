import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();

    const navigate = useNavigate();
    const handleGoBack =()=>{
        navigate(-1)
    }
    const {postId} = useParams();
    console.log(postId);

    const {id, title, body} = post;
    return (
        <div>
            <h3>Post ID : {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;