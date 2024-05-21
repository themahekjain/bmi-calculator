import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './product.css';

export const ProductData = () =>{
    const [productDetails, setProductDetails] = useState(null);
    const {id} = useParams();
    console.log("id" , id);

    useEffect(() =>{
        if(id){
        getProductData();
        }
    },[])

    const getProductData = async() =>{
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log("response", res);
            const data = res.data;
            if(data){
                setProductDetails(data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    }
    return(
        <div>
            <h1>Product Details</h1>
            <h2>{productDetails?.title}</h2>
            <img className="img" src={productDetails?.image} alt="" />
            <p>{productDetails?.description}</p>
        </div>
    )
}
