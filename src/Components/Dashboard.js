import React from 'react'
// import { withRouter } from 'react-router'
// import {BrowserRouter,Link,Route} from 'react-router-dom';

const logout = () => {
	localStorage.removeItem('user');
};


function Dashboard() {
  return (
    <div className="col-4 offset-4">
        <h1 className='text-center mt-5'>Dashboard
        </h1>
        <center>
        <button className="btn btn-danger" onClickCapture={logout}>logout</button>
        </center>
        </div>
  )
}

export default Dashboard