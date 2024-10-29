/* eslint-disable react/prop-types */

const User = ({user}) => {

    const {id, name, phone, email} = user;

    const userStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px"
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default User;