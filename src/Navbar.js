import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My bills</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/create"> Add bill</Link>
                <Link to = "/create-category"> Add bill category</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;