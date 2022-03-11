import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
	<Title />
	<TaskForm />
	<TaskList />
    </div>
  );
}

export default App;
