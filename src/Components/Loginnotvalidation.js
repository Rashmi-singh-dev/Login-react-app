import React from 'react'
import { Link } from 'react-router-dom'
function Loginnotvalidation() {
    return(
        <div className="container">
        <div className="text-center mt-5 p-5 border border-dark">
        <div className="text-center mt-5">
            <h1>Login</h1>
            <form className="form mt-5">
                <div className="row m-0">
                    <div className="col-4 offset-4 form-group">
                        <input
                         type="email" className="my-2 form-control" placeholder="enter email" ></input> <br />
                        <input 
                         type="password" className="my-2 form-control" placeholder="Enter Password"></input><br />
                        <Link to={'/dashboard'}>
                        <button type="button" className="btn btn-success">Login</button>
                        </Link>
                    </div>

                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Loginnotvalidation