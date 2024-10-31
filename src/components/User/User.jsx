import { Link } from "react-router-dom";


const User = ({user}) => {

    const {id, name, email, phone} = user;

    const userStyle = {
        backgroundColor: 'lightGreen',
        padding:'10px',
        marginBottom: '10px',
        borderRadius: '30px',
    }

    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;