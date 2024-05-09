import React from 'react';
import lazyLoadingGif from '../assets/images/lazyLoading.gif';

export default function SingleProductModal({ setModelStatus, singleProductData }) {


    if (!singleProductData) {
        return <img src={lazyLoadingGif} alt="lazy loading gif" />;
    }


    let { thumbnail, brand, price, description, rating, images } = singleProductData;

    // console.log(singleProductData);
    return (
        <>

            <div className='w-[700px] h-[500px] top-[50%] left-[50%] bg-slate-300 translate-x-[-50%] translate-y-[-50%] fixed'>
                <span className='right-[20px] text-[30px] absolute' onClick={() => setModelStatus(false)}> &times;</span>

                <div className='grid grid-cols-[50%_auto] gap-5 p-[50px] '>
                    <div>
                        {/* {images && images.length > 0  &&(
                                <img src={images[0]} alt="product image" />
                            )} */}

                        <img src={thumbnail} alt="product image" className='h-[100%]' style={{ maxWidth: '100%', height: '50%' }} />

                        <div className='pt-10 grid grid-cols-3 gap-3'>
                            <div>
                                {images && images.length > 0 && (


                                    <img src={images[4]} alt="product image" className='w-25 img' style={{ maxWidth: '100%', height: '50%' }} />
                                )}
                            </div>
                            <div>
                                {images && images.length > 0 && (


                                    <img src={images[2]} alt="product image" className='w-25 img' style={{ maxWidth: '100%', height: '50%' }} />
                                )}
                            </div>
                            <div>
                                {images && images.length > 0 && (


                                    <img src={images[3]} alt="product image" className='w-25 img' style={{ maxWidth: '100%', height: '50%' }} />
                                )}
                            </div>

                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold pb-3'>Product Details</h2>

                        <table class="table-auto">
                            <tbody>
                                <tr className='leading-10'>
                                    <td>
                                        <p>Brand :  </p>
                                    </td>
                                    <td>
                                        <span className='font-bold '>{brand}</span>
                                    </td>
                                </tr>
                                <tr >
                                    <td>
                                        <p>Description :  </p>
                                    </td>
                                    <td>
                                        <span className='font-bold '>{description}</span>
                                    </td>
                                </tr>
                                <tr className='leading-10'>
                                    <td>
                                        <p>Price: </p>
                                    </td>
                                    <td>
                                        $<span className='font-bold '>{price}</span>
                                    </td>
                                </tr>
                                <tr className='leading-10'>
                                    <td>
                                        <p>Rating:  </p>
                                    </td>
                                    <td>
                                        <span className='font-bold '>{rating}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
