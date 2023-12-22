import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().required('Password is Required').min(8, 'Password is too short')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email : '',
      password : ''
    },
    onSubmit: ( values ) => { console.log(values); },
    validationSchema: SignupSchema
  });

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            <form onSubmit={ signupForm.handleSubmit }>
              <h2 className='text-center'>Register Form</h2>
              <hr />

              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.errors.name}</span>
              <input type="text" className='form-control mb-4' id="name" onChange={ signupForm.handleChange } value={signupForm.values.name} />
              <label htmlFor="">Email Address</label>
              <input type="text" className='form-control mb-4' id="email" onChange={ signupForm.handleChange } value={signupForm.values.email}  />
              <label htmlFor="">Password</label>
              <input type="password" className='form-control mb-4' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />

              <button type='submit' className='btn btn-dark w-100 mt-5'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup