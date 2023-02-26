import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Loginmain from './Components/Loginmain';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>

          {/* <Route element={<PrivateComponent />}> */}
            <Route path="/dashboard" element={<Dashboard />}></Route>
            {/* <Route path="/" element={<Product_list/>}></Route> */}
            {/* <Route path="/Add" element={<Product />}></Route>
            <Route path="/Update/:id" element={<UpdateProduct />}></Route>
            <Route path='/Logout' element={<h1>Logout</h1>}></Route> */}
          {/* </Route> */}

          <Route path='/' element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
