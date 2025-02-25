import useTasks from "../hooks/useTasks";

const TaskList = () => {
    const tasks = useTasks();

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title} - {task.completed ? "Completed" : "Pending"}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
