import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ Children }) {

    //creiamo una varibile in cui salvare la versione budget e che parta da falsa
    const [budgetMode, setBudgetMode] = useState(false);


    return

    <BudgetContext.Provider>
        {Children}
    </BudgetContext.Provider>

    // Definiamo un hook per consumare il contesto
    function useBudgetMode() {
        const context = useContext(BudgetContext);
        return context;
    }


}

// Esportiamo il nostro provider ed il nostro hook
export { BudgetProvider, useBudgetMode }