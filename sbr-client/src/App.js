import '../node_modules/boostrap/dist/css/boostrap.min.css';
import '/node_modules/boostrap/dist/js/boostrap.min.js';
import './App.css';
import Home from './Home';
import StudentsView from './student/StudentsView';

function App() {
  return (
    <div className='App'>
      <h2>Welcome to our front end</h2>
      <Home />
      <StudentsView />
    </div>
  );
}

export default App;
