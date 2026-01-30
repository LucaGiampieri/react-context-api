import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);

    function buttonToggle() {
        return budgetMode ? (setBudgetMode(false)) : (setBudgetMode(true))
    }

    return (
        <BudgetContext.Provider
            value={{
                budgetMode,
                setBudgetMode,
                buttonToggle
            }}>
            {children}
        </BudgetContext.Provider>
    );
}

function useBudgetMode() {
    return useContext(BudgetContext);
}

export { BudgetProvider, useBudgetMode };
