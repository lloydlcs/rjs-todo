import React, { useRef, useState } from 'react';

import './SubmitForm.css';

export const SubmitForm = ({
	addTask
}) => {
	const [tasksCount, setTasksCount] = useState(0);
	let inputElm = useRef("");

	const addItem = (e) => {
		if (inputElm.value !== "") {
			var newItem = {
				text: inputElm.value,
				id: tasksCount,
				key: Date.now(),
				done: false
			};
			addTask(newItem);

			setTasksCount(tasksCount+1);
			inputElm.value = "";
		}

		e.preventDefault();
	}

	return (
		<div className='form'>
			<form onSubmit={addItem}>
				<input className='input' ref={(a) => inputElm = a} placeholder='Add Task' />
				<button className='add-button' type='submit'>Add</button>
			</form>
		</div>
	);
};

export default SubmitForm;