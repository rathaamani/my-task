import './App.css';
import { login } from './components/Login';
import { Register } from './components/Register';
import { Profile } from './components/Profile';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<login />}></Route>
          <Route path='/Register' element={<Register/> } />
          <Route path='/Profile' element={ <Profile /> } />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
