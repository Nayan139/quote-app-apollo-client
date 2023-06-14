import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import CreateQuote from './components/CreateQuote/CreateQuote';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/signup" element={ <Signup/>} />
        <Route  path="/signin" element={<Signin />} />
        <Route  path="/create/quote" element={ <CreateQuote/>} />
        <Route  path="/profile" element={ <Profile/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
