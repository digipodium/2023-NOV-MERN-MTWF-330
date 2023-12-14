import React, { useState } from 'react'

const StateManagement = () => {

    let count = 0;
    const [likes, setLikes] = useState(0);
    const [imgUrl, setImgUrl] = useState("");

    const chooseFile = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (content) => {
            setImgUrl(content.target.result);
        }

        reader.readAsDataURL(file);

    }

    return (
        <div>
            <div className='container'>
                <h1>Count : {count}</h1>

                <button
                    className='btn btn-primary mt-4'
                    onClick={() => { count++; console.log(count); }} >
                    Add Count
                </button>

                <button className='btn btn-danger mt-4'
                    onClick={() => { setLikes(likes + 1) }}>
                    Likes : {likes}
                </button>

                <input
                    type="text"
                    className='form-control mt-4'
                    placeholder='Enter image url'
                    onChange={(e) => { setImgUrl(e.target.value) }}    
                />
                <input type="file" onChange={chooseFile} />
                <p>{imgUrl}</p>

                <img src={imgUrl} width={300} alt="" />

            </div>
        </div>
    )
}

export default StateManagement;