import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const {name} = user;

    return (
        <div>
            <h1>This is user Details: {name}</h1>
        </div>
    );
};

export default UserDetails;