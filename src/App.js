// import { useState } from "react";

import { useTask } from "./contexts/task.context";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import TasksList from "./components/TasksList/TasksList";

import './App.css';

const App = () => {
    const { tasks, setTask } = useTask();

    const addTask = (task) => {
        setTask(tasks.concat(task));
    }

    const removeTask = (id) => {
        const removedTask = tasks.filter(element => (element.id !== id));
        setTask(removedTask);
    };

    return (
        <div className="App">
            <SubmitForm addTask={addTask} />
            <TasksList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default App;