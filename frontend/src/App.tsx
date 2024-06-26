import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Header from './components/Header';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;