import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {


    const { id } = useParams();

    console.log(id);

    const getUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
      getUserData();
    }, [])
    

    const submitForm = (values) => {
        console.log(values);
    }


  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">

            {/* <Formik initialValues={} onSubmit={} >

            </Formik> */}

            {/* <form onSubmit={ signupForm.handleSubmit }>
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
              <button type='button' onClick={ () => { setpasswordHidden(!passwordHidden) } } >{passwordHidden ? 'Show' : 'Hide' }</button>

              <button disabled={ signupForm.isSubmitting } type='submit' className='btn btn-dark w-100 mt-5'>Submit</button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser