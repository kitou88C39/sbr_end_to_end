import '../node_modules/boostrap/dist/css/boostrap.min.css';
import '../node_modules/boostrap/dist/js/boostrap.min.js';
import './App.css';
import Home from './Home';
import NavBar from './components/common/NavBar.js';
import StudentsView from './components/student/StudentsView.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className='container mt-5'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/view-students' element={<StudentsView />}></Route>
          <Route exact path='/add-students' element={<AddStudent />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
