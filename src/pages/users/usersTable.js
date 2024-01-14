import {Link, NavLink} from "react-router-dom";


export const UsersTable = ({users}) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Password</th>
                <th>Created At</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user)=> {
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.createdAt}</td>
                        <td><Link to={`/users/edit/${user.id}`}>Edit</Link></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}