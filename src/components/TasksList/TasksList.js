import Task from "../Task/Task";
// import { useTask } from "../../contexts/task.context";

import './TasksList.css';

export const TasksList = ({
    tasks,
    removeTask
}) => {

    return (
        <div className='tasks-list-container'>
            <div className='tasks-list'>
                { tasks.map(task => <Task key={task.key} text={task.text} id={task.id} removeTask={removeTask} />) }
            </div>
        </div>
    );
};

export default TasksList;