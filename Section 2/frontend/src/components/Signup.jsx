import React from 'react'

const Signup = () => {
  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            <form>
              <h2 className='text-center'>Register Form</h2>
              <hr />

              <label htmlFor="">Name</label>
              <input type="text" className='form-control mb-4' />
              <label htmlFor="">Email Address</label>
              <input type="text" className='form-control mb-4' />
              <label htmlFor="">Password</label>
              <input type="password" className='form-control mb-4' />

              <button className='btn btn-dark w-100 mt-5'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup