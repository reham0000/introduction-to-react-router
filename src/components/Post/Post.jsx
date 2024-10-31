import { Link } from "react-router-dom";

const Post = ({post}) => {

    const {title, id} = post;
    const postStyle = {
        backgroundColor: 'lightGreen',
        padding:'10px',
        marginBottom: '10px',
        borderRadius: '30px',
    }

    return (
        <div style={postStyle}>
            <h4>Post of id {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Posts Details</Link>
        </div>
    );
};

export default Post;