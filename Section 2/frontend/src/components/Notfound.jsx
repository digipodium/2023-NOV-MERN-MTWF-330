import React from 'react'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='col-md-6 mx-auto text-center'>
            <img className='w-100' src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png?f=webp" alt="" />
            <h1 className='display-1 fw-bold' style={{ color: '#f773f9' }}>Page Not Found</h1>
            <Link to="/" className='btn btn-primary'>Goto Homepage</Link>
        </div>
    )
}

export default Notfound;