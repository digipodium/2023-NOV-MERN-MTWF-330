import React from 'react';


const Login = () => {
  return (
    <div className='vh-100'>
        <div className='container py-5 h-100'>
          <div className="col-md-3 mx-auto">
              <div className='card rounded-3'>
                <div className="card-body">
                  <h3 className='text-center my-3'>Login Form</h3>
                  <form>
                    <label htmlFor="">Email Address</label>
                    <input type="text" className='form-control mb-4' />
                    <label htmlFor="">Password</label>
                    <input type="password" className='form-control mb-4' />

                    <button className='btn btn-dark mt-4'>Submit</button>
                  </form>
                </div>
              </div>
          </div>
          <div className="col-md-9"></div>
        </div>
    </div>
  )
}

export default Login