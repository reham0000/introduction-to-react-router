import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic and Vodro Users</p>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
                
            </div>
        </div>
    );
};

export default Users;