import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Camera from './Pages/Camera/Camera';
import OpenCamera from './Pages/Camera/OpenCamera/OpenCamera';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Results from './Pages/Results/Results';
import SignUp from './Pages/SignUp/SignUp';
import Details from './Pages/Details/Details';
import VoiceAssitance from './Pages/VoiceAssistance/VoiceAssistance';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/camera' element={<Camera />} />
            <Route path='/OpenCamera' element={<OpenCamera />} />
            <Route path='/voice-assistance' element={<VoiceAssitance />} />
            <Route path='/results' element={<Results />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
