

const User = ({user}) => {

    const {id, name, email, phone} = user;

    return (
        <div>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;