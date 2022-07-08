
import './App.css';
import { Students } from './data';
import Student from './Student';

function App() {
  const students = Students
  return (
    <div className="App">
      <Student students={students}/>
    </div>
  );
}

export default App;
