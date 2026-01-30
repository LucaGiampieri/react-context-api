import { Link } from "react-router-dom"

function Cart() {

    return (
        <div className="cart-container">
            <h2 className="cart-title">Bravo hai aggiunto l'articolo al carrello <i class="fa-solid fa-thumbs-up"></i> </h2>
            <img src="/cart.webp" alt="cart img" className="cart-img" />
            <Link className="cart-link" to="/products"><i class="fa-solid fa-arrow-rotate-left"></i> Torna alla lista prodotti</Link >
        </div>
    )
}

export default Cart