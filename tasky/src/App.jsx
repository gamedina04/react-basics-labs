import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow" description="Basket full, do ASAP">
      </Task>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}


export default App;
