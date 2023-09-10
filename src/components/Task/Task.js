import { useState } from 'react';

import './Task.css';

export const Task = ({
    id,
    text,
    removeTask
}) => {
    const [backgroundColor, setBackgroundColor] = useState("");

    const deleteTask = () => {
        removeTask(id);
    };

    const markDone = () => {
        if (backgroundColor === "") {
            setBackgroundColor("rgb(144,238,144, 0.5)");
        } else {
            setBackgroundColor("");
        }
    };

    return (
        <div className='task-container'>
            <div className='task-container-background' style={{backgroundColor: backgroundColor}}>
                <div className='task-term-container'>
                    <h2 className='task-term'>{text}</h2>
                </div>
                <div className='buttons-container'>
                    <button className='done-button' onClick={markDone}>v</button>
                    <button className='delete-button' onClick={deleteTask}>x</button>
                </div>
            </div>
        </div>
    );
};

export default Task;