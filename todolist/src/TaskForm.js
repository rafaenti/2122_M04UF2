import React from 'react';

import TaskInput from './TaskInput';
import TaskSubmit from './TaskSubmit';

class TaskForm extends React.Component{
	constructor(props){
		super(props);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("hola");
	}

	render()
	{
		return (
			<form onSubmit={this.handleSubmit}>
			<TaskInput />
			<TaskSubmit />
			</form>
		);

	}
}


export default TaskForm;
