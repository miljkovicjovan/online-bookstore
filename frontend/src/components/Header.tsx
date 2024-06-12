import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-dark d-flex align-items-center pt-3 ps-3">
        <Link to='/' className="me-4 text-white"><h1>Bookstore</h1></Link>
        <Link to='/books' className="me-4 text-white text-decoration-none">Books</Link>
        <Link to='/users' className="me-4 text-white text-decoration-none">Users</Link>
        <Link to='/orders' className="text-white text-decoration-none">Orders</Link>
    </nav>
  );
}

export default Header;