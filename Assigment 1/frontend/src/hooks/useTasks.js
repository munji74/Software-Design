import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(setTasks);
    }, []);

    return tasks;
};

export default useTasks;
