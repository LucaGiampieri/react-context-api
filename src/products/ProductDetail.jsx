import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import ProductDetailCard from "./ProductDetailCard";


function ProductDetail() {

    //creo la variabile in cui salvare l'API
    const endpoint = "https://fakestoreapi.com/products/";

    // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    //creo una variabile per salvare le infomazioni estrapolate dall'API
    const [product, setProduct] = useState();

    const navigate = useNavigate();

    //tramite useEffect faccio una chiamata Ajax per riahiamare i dati che mi servono dall'API
    //ma solo quelli dell'id specifico
    useEffect(() => {
        axios.get(endpoint + id)
            .then(resp => {

                if (resp.data) {
                    setProduct(resp.data)
                } else {
                    throw new Error('Missing product');
                }

            })
            .catch(err => {
                navigate("/products")
                console.log("errore sulla chiamata", err)
            })
    }, [id])


    return (

        <>
            {product ? (
                <ProductDetailCard
                    key={product.id}
                    product={product}
                />
            ) : (
                <p className="loader">Loading...</p>
            )
            }
        </>
    )
}

export default ProductDetail