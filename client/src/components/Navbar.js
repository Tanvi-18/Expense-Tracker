import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Expense Tracker</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar