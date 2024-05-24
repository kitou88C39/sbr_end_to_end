import '../node_modules/boostrap/dist/css/boostrap.min.css';
import '../node_modules/boostrap/dist/js/boostrap.min.js';
import './App.css';
import Home from './Home';
import NavBar from './components/common/NavBar.js';
import StudentsView from './components/student/StudentsView.js';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <StudentsView />
    </div>
  );
}

export default App;
