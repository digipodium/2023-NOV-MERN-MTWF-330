import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().required('Password is Required').min(8, 'Password is too short'),
  // .matches(/[a-z][A-Z]\d/, 'Password must include uppercase and lowercase letter and a number'),
  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

const Signup = () => {

  const [passwordHidden, setpasswordHidden] = useState(true);

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email : '',
      password : '',
      confirm: ''
    },
    onSubmit: async ( values, { setSubmitting, resetForm } ) => {
      console.log(values);
      setSubmitting(true);

      const res = await fetch( 'http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      setSubmitting(false);

      console.log(res.status);

      if(res.status === 200){
        enqueueSnackbar( 'Registered Successfully', { variant : 'success' } );
        resetForm();
        navigate('/login');
      }else{
        enqueueSnackbar( 'Something went Wrong', { variant : 'error' } );
      }

    },
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
              <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.name && signupForm.errors.name}</span>
              <input type="text" className='form-control mb-4' id="name" onChange={ signupForm.handleChange } value={signupForm.values.name} />
              
              <label htmlFor="">Email Address</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="text" className='form-control mb-4' id="email" onChange={ signupForm.handleChange } value={signupForm.values.email}  />
              
              <label htmlFor="">Password</label>
              <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.password && signupForm.errors.password}</span>
              <input type={passwordHidden ? 'password' : 'text'} className='form-control mb-4' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />
             
              <label htmlFor="">Confirm Password</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
              <input type={passwordHidden ? 'password' : 'text'} className='form-control mb-4' id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} />
              {/* <button type='button' onClick={ () => { setpasswordHidden(!passwordHidden) } } >{passwordHidden ? 'Show' : 'Hide' }</button> */}

              <button disabled={ signupForm.isSubmitting } type='submit' className='btn btn-dark w-100 mt-5'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup