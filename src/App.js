import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Landing from './Pages/Landing';
import OpenCamera from './Pages/Camera/OpenCamera/OpenCamer';
import Camera from './Pages/Camera/Camera';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/OpenCamera' element={<OpenCamera />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
