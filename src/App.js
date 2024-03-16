import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
