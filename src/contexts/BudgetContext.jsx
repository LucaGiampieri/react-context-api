import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);

    function buttonToggle() {
        return budgetMode ? (setBudgetMode(false)) : (setBudgetMode(true))
    }

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
        <BudgetContext.Provider
            value={{
                budgetMode,
                productsList,
                setProcudtsList,
                setBudgetMode,
                buttonToggle,
                fetchProducts
            }}>
            {children}
        </BudgetContext.Provider>
    );
}

function useBudgetMode() {
    return useContext(BudgetContext);
}

export { BudgetProvider, useBudgetMode };
