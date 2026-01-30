import { Link } from "react-router-dom"

function CardProduct(props) {

    const { product } = props

    return (
        <div
            className="card" >
            <div className="img-container">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="card-text-container">

                <h4 className="card-rating" >
                    <div>
                        Rate: {product.rating.rate}/5
                    </div>
                    <div>
                        Count: {product.rating.count}
                    </div>
                </h4>
                <Link to={`/products/${product.id}`} className="card-name">
                    {product.title}
                </Link>
                <h3 className="card-price">
                    {product.price} $
                </h3>
                <h3 className="card-category">
                    Category: {product.category}
                </h3>
            </div>

        </div>
    )
}

export default CardProduct