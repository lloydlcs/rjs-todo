import { useEffect } from "react";

import { useTask } from "./contexts/task.context";
import { useTheme } from "./contexts/theme.context";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import TasksList from "./components/TasksList/TasksList";
import Header from "./components/header/header";

import './App.css';
import styles from "./App.module.css";

const App = () => {
    const { tasks, setTask } = useTask();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (!theme) {
            document.documentElement.setAttribute('data-theme', "blue");
            setTheme("blue");
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme, setTheme]);

    const addTask = (task) => {
        setTask(tasks.concat(task));
    }

    const removeTask = (id) => {
        const removedTask = tasks.filter(element => (element.id !== id));
        setTask(removedTask);
    };

    const changeTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        setTheme(theme);
    }

    return (
        <div className="App">
            <Header />
            <div className={ styles["tbody"] }>
                <SubmitForm addTask={addTask} />
                <TasksList tasks={tasks} removeTask={removeTask} />
            </div>
            <div className={ `d-flex ${styles["tfooter"]}` }>
                <button type="button" className="tbutton py-2" onClick={ () => changeTheme('blue') }>
                    <p className="m-0"><i className={ `bg-blue ${styles["tbox"]}` } /></p>
                    <p className="m-0 c-blue">蓝色</p>
                </button>
                <button type="button" className="tbutton py-2" onClick={ () => changeTheme('purple') }>
                    <p className="m-0"><i className={ `bg-purple ${styles["tbox"]}` } /></p>
                    <p className="m-0 c-purple">紫色</p>
                </button>
                <button type="button" className="tbutton py-2" onClick={ () => changeTheme('green') }>
                    <p className="m-0"><i className={ `bg-green ${styles["tbox"]}` } /></p>
                    <p className="m-0 c-green">绿色</p>
                </button>
                <button type="button" className="tbutton py-2" onClick={ () => changeTheme('orange') }>
                    <p className="m-0"><i className={ `bg-orange ${styles["tbox"]}` } /></p>
                    <p className="m-0 c-orange">橙色</p>
                </button>
            </div>
        </div>
    );
};

export default App;