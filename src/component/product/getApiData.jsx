import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export const GetDataFromApi =() =>{
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const goToProduct = (id) =>{
        navigate(`/product/${id}`)
    }
    useEffect( () =>{
        getData();
    },[]);
    async function getData() {
        try{
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();

            setProducts(data);
        }catch(error){
            console.log("Error on getting data", error);
        }
    }
    return (
        <>
            <h1>Products</h1>
            <div className="d-flex flex-wrap p-5">
                {products.map((product) =>{
                    console.log("product", product);
                    return(
                        <Card key={product.id} className="m-3" style={{ width: '18rem' }}>
                        <Card.Img className="h-50" variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title.substring(0,20)}</Card.Title>
                            <Card.Text>
                            {product.description.substring(0,30)}
                            </Card.Text>
                            <Button variant="primary" onClick={() => goToProduct(product.id)}>Visit</Button>
                        </Card.Body>
                    </Card>
                    )
                })}
            </div>
        </>
    )

}