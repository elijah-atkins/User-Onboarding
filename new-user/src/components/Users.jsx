import React from 'react'

const Users = props =>{
    console.log("users", props)
    const user = props.user
    return (
        <div className="users-container">
            {user.map(use => (
                <div className="user" key={use.email}>
                    <h2 className="user-name">{use.name}</h2>
                    <p>{use.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;