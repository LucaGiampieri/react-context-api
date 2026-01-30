import CardProduct from "../products/CardProduct";
import { useBudgetMode } from "../contexts/BudgetContext";

function Products() {

    // usiamo il contesto, richiamando solo i valori che ci servono qui
    const { budgetMode, productsList } = useBudgetMode();


    return (
        <>
            <h1 className="product-title" >Products:</h1>
            <div className="card-container">
                {budgetMode
                    ? productsList
                        .filter(product => product.price <= 30)
                        .map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                    : productsList.map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Products
