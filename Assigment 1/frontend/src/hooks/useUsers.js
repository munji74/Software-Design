import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return users;
};

export default useUsers;
