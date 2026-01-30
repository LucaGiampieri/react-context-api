import { useEffect, useState } from "react"
import axios from "axios";
import CardProduct from "../products/CardProduct";


function Products() {

    //creo una variabile in cui salvare l'API
    const enpoint = "https://fakestoreapi.com/products";

    //creo una variabile in cui inserire la lista prodotti
    const [productsList, setProcudtsList] = useState([]);

    //creiamo una funzione per estrapolare i dati dall'API 
    function fetchProducts() {
        axios.get(enpoint)
            .then((res) => setProcudtsList(res.data))
            .catch(err => console.error("Errore nella richiesta"))
    }

    //andiamo a richiamre la funzione una sola volta all'avvio
    useEffect(fetchProducts, []);

    return (
        <>
            <h1 className="product-title" >Products:</h1>
            <div className="card-container">
                {productsList.map(product => (
                    <CardProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}

export default Products
