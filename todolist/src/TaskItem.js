import RemoveTask from './RemoveTask';

function TaskItem (props)
{
	return(
		<li>{props.task} <RemoveTask id_task={props.id_task} removeTask={props.removeTask}/></li>
	);

}

export default TaskItem;
