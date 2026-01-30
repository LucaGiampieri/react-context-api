import { Link } from "react-router-dom"

function NotFound() {

    return (
        <>
            <h2 className="notfound-title">ERROR NOT FOUND 404</h2>
            <Link
                className="notfound-link"
                to="/" >
                Torna alla home
            </Link>
        </>
    )
}

export default NotFound