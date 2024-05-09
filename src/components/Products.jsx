import axios from "axios";
import { useEffect, useState } from "react"

function Products() {
    const [categoryName, setCategoryName] = useState([]);

    const [products, setProducts] = useState([]);


    const [selectCatName, setSelectCatName] = useState('');


    let totalCategories = (() => {

        axios.get(`https://dummyjson.com/products/categories`)
            .then((response) => {
                // console.log(response.data)
                setCategoryName(response.data);
            })
    })

    let totalProducts = (() => {

        let apiUrl;

        if (selectCatName === '') {
            apiUrl = `https://dummyjson.com/products`;


        }

        else {

            apiUrl = `https://dummyjson.com/products/category/${selectCatName}`;



        }

        axios.get(apiUrl)
            .then((response) => {
                // console.log(response.data.products)

                setProducts(response.data.products);
            })


    })


    useEffect(() => {

        totalCategories()
        // setCategoryName()

    }, []);

    useEffect(() => {

        totalProducts()
        // setCategoryName()

    }, [selectCatName]);



    return (
        <>
            <div className="py-[100px] bg-[#eaeaea]">
                <div className="max-w-[1320px] mx-auto grid grid-cols-[25%_auto] gap-6 bg-[#eaeaea]">
                    <div className="shadow-lg">
                        <div className="p-[15px]">

                            <h3 className="text-[20px] font-bold mb-4">Category</h3>
                            <ul>
                                {
                                    categoryName.map((item, index) => {
                                        return (
                                            
                                            <li className="bg-white p-2 mb-3 text-[18px] cursor-pointer" onClick={() => setSelectCatName(item)} key={index}>{item}</li>
                                        )

                                    }

                                    )
                                }

                                <li className="bg-white p-2 mb-3 text-[18px] cursor-pointer" onClick={() => setSelectCatName('')}>All</li>

                            </ul>
                        </div>
                    </div>

                    <div >
                        <h1 className="text-[40px] font-sans font-[600]">Products</h1>
                        <div className="grid grid-cols-3 gap-5">
                            <ProductCard products={products} ></ProductCard>

                        </div>
                    </div>
                </div>


            </div>

        </>
    )

}

function ProductCard({ products }) {
    return (

        <>

            {

                products.map((item, index) => {
                    // console.log(item);


                    return (

                        <>
                            <div className="show-lg bg-white text-center">
                                <img src={item.thumbnail} alt="" className="w-[100%] h-[250px]" />
                                <div className="flex justify-between p-[10px]">
                                    <h3 className=" text-[14px]">Brand: {item.brand}</h3>
                                    <span>Rs: {item.price}</span>
                                </div>


                            </div>
                        </>



                    )
                })
            }

        </>
    )

}
export default Products