import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h3>Post ID : {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;