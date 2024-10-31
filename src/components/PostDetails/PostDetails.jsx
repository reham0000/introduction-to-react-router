import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const {id, title, body} = post;

    return (
        <div>
            <h2>This is posts details: {id}</h2>
            <h3>Title: {title}</h3>
            <h2><small>{body}</small></h2>
        </div>
    );
};

export default PostDetails;