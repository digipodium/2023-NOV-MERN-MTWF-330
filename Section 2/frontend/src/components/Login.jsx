import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email : '',
      password : ''
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      if(res.status === 200){
        enqueueSnackbar( 'Logged in Successfully', { variant : 'success' } );
        navigate('/');
      }else if(res.status === 401){
        enqueueSnackbar( 'Invalid Credentials', { variant : 'error' } );
      }else{
        enqueueSnackbar( 'Something went Wrong', { variant : 'error' } );
      }
    }
  })

  return (
    <div className='vh-100'>
        <div className='container py-5 h-100'>
          <div className="col-md-3 mx-auto">
              <div className='card rounded-3'>
                <div className="card-body">
                  <h3 className='text-center my-3'>Login Form</h3>
                  <form onSubmit={loginForm.handleSubmit}>
                    <label htmlFor="">Email Address</label>
                    <input id="email" onChange={loginForm.handleChange} value={loginForm.values.email} type="email" className='form-control mb-4' />
                    <label htmlFor="">Password</label>
                    <input id="password" onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className='form-control mb-4' />

                    <button className='btn btn-dark mt-4' type='submit'>Submit</button>
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