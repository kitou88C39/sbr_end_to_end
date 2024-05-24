import '../node_modules/boostrap/dist/css/boostrap.min.css';
import '../node_modules/boostrap/dist/js/boostrap.min.js';
import './App.css';
import Home from './Home';
import NavBar from './components/common/NavBar.js';
import StudentsView from './components/student/StudentsView.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/view-students' element={<StudentsView />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
