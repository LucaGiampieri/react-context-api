import { NavLink } from "react-router-dom"
import { useBudgetMode } from "../contexts/BudgetContext"

function NavBar() {

    //creaimo una costante da dove poi estrapolare i dati
    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/aboutus', label: 'Chi siamo' },
        { path: '/products', label: 'Lista prodotti' }
    ]

    // usiamo il contesto, richiamando solo i valori che ci servono qui
    const { budgetMode, buttonToggle } = useBudgetMode();


    return (
        <nav className="navbar">
            <h1 className="nav-title">E-commerce</h1>
            <button
                className="nav-budget-button"
                onClick={buttonToggle}
            >
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
            <ul className="nav-link-list">
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink className="nav-link" to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
