import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

function ProductDetailCard(props) {

    const { product } = props
    const { id } = useParams();

    return (
        <div
            className="card-detail" >
            <div className="img-container-detail">
                <div className="link-container-detail">
                    <Link className="card-last-detail" to={`/products/${Number(id) - 1}`}><i class="fa-solid fa-arrow-left"></i> Last</Link >
                    <Link className="card-next-detail" to={`/products/${Number(id) + 1}`}>Next <i class="fa-solid fa-arrow-right"></i></Link >
                </div>
                <div>
                    <img
                        className="img-card-detail"
                        src={product.image}
                        alt={product.title} />
                </div>
            </div>
            <div className="card-text-container-detail">
                <h4 className="card-rating-detail" >
                    <div>
                        Rate: {product.rating.rate}/5
                    </div>
                    <div>
                        Count: {product.rating.count}
                    </div>
                </h4>
                <h2 className="card-name-detail">
                    {product.title}
                </h2>
                <h3 className="card-price-detail">
                    {product.price} $
                </h3>
                <h3 className="card-category-detail">
                    Category: {product.category}
                </h3>
                <p className="card-description-detail">{product.description}</p>
                <Link className="card-cart-link-detail" to="/cart"> <i class="fa-solid fa-cart-arrow-down"></i> Aggiungi al carello</Link >
                <Link className="card-returning-detail" to="/products">Torna alla lista intera</Link >
            </div>
        </div>
    )
}

export default ProductDetailCard














