import useUsers from "../hooks/useUsers";

const UserList = () => {
    const users = useUsers();

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
