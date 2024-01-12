import { Formik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {


    const { id } = useParams();

    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    // console.log(id);

    const getUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    }

    useEffect(() => {
      getUserData();
    }, [])
    

    const submitForm = async (values) => {
        console.log(values);
        const res = await fetch('http://localhost:5000/user/update/'+id, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(res.status);
        if(res.status === 200){
          enqueueSnackbar('User Updated Successfully', { variant: 'success' });
          navigate('/manageuser');
        }
    };



  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            {
              userData !== null ? (<Formik initialValues={userData} onSubmit={submitForm} >
                { ( signupForm ) => {
                  return <form onSubmit={ signupForm.handleSubmit }>
                  <h2 className='text-center'>Update User Form</h2>
                  <hr />
    
                  <label htmlFor="">Name</label>
                  <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.name && signupForm.errors.name}</span>
                  <input type="text" className='form-control mb-4' id="name" onChange={ signupForm.handleChange } value={signupForm.values.name} />
                  
                  <label htmlFor="">Email Address</label>
                  <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email && signupForm.errors.email}</span>
                  <input type="text" className='form-control mb-4' id="email" onChange={ signupForm.handleChange } value={signupForm.values.email}  />
                  
                  <label htmlFor="">Password</label>
                  <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.password && signupForm.errors.password}</span>
                  <input type="password" className='form-control mb-4' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />
                 
                  
                  <button disabled={ signupForm.isSubmitting } type='submit' className='btn btn-dark w-100 mt-5'>Submit</button>
                </form>
                } }
            </Formik>) : <h2 className='text-center'>Loading ...</h2>
            }
            

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser