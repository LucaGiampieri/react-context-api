import { NavLink } from "react-router-dom"

function NavBar() {

    //creaimo una costante da dove poi estrapolare i dati
    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/aboutus', label: 'Chi siamo' },
        { path: '/products', label: 'Lista prodotti' }
    ]

    return (
        <nav className="navbar">
            <h1 className="nav-title">E-commerce</h1>
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
