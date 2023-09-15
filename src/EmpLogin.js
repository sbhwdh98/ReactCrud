import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const EmpLogin = () => {
    const [id, idchange] = useState('');
    const navigate = useNavigate();


    const handlesubmit=(e)=>{
        e.preventDefault();
        navigate('/');
        navigate('/employee/detail/'+id);
    }
    return (
        <>
            <div className="row" style={{'text-align':'left'}}>
                <div className="offset-lg-3 col-lg-6">
                    <div className="container ">
                        <div className="card">
                            <form className='card-body' onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label for='userid'>User ID:</label>
                                    <input value={id} required onChange={e => idchange(e.target.value)} type='text' className='form-control' placeholder='Enter user ID'></input>
                                    <small className='form-text text-muted'>Please enter a valid user id</small>
                                </div>
                                <div className="form-group">
                                    <label for='password'>Password</label>
                                    <input type='password' className='form-control' placeholder='Password'></input>
                                </div>
                                <div className="form-group form-check">
                                    <input type='checkbox' className='form-check-input'></input>
                                    <label for='check'>Remember me</label>
                                </div>
                                <button type='submit' className='btn btn-primary col-5'>Login</button> 
                                <Link to='/employee/create' className='btn btn-success col-5'>Sign up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpLogin;