import React, { useRef, useState } from 'react'
import laptopData from './dummyData';

const BrowseProduct = () => {

    const [productList, setProductList] = useState(laptopData);

    const searchRef = useRef(null);
    const priceRef = useRef(null);

    const searchProduct = () => {
        const filteredData = laptopData.filter((laptop) => {
            return laptop.brand.toLowerCase().includes(searchRef.current.value.toLowerCase())
        });
        setProductList(filteredData);
    }

    const filterPrice = (e) => {
        console.log(e.target.value);
        const filteredData = laptopData.filter( (laptop) => { return laptop.price<=parseInt(e.target.value) } );
        setProductList(filteredData);
    }

    return (
        <div>
            <header className='bg-dark text-white'>
                <div className='container py-5'>
                    <h1 className='text-center'>Search Laptop</h1>
                    <div className='input-group'>
                        <input type="text" className='form-control' ref={searchRef} />
                        <button onClick={searchProduct} className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-body'>

                                <label>Max Price</label>
                                <input type="range" step={5000} min={10000} max={200000} className='form-range' onChange={filterPrice} />

                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>


                        <div className='row gy-4'>
                            {productList.map((laptop) => {
                                return (<div className='col-md-3'>
                                    <div className='card'>
                                        <img src={laptop.image} alt="" />
                                        <div className='card-body'>
                                            <h5>{laptop.brand}</h5>
                                            <h4>{laptop.model}</h4>
                                            <p>{laptop.rating} Stars from {laptop.reviews} reviews</p>
                                            <button className='btn btn-primary btn-sm float-end'>Buy Now</button>
                                            <h4 className='fw-bold'>₹{laptop.price}</h4>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseProduct;