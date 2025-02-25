import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'; // Import your Login component
import Register from './components/Register'; // Import your Register component

const App = () => {
  return (
    <div>
      <h1>Vendor App</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
