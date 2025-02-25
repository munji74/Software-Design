import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import TasksPage from "./pages/TasksPage";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/tasks" element={<TasksPage />} />
            </Routes>
        </Router>
    );
}

export default App;
