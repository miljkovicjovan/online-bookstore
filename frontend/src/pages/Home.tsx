import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="vh-100 bg-dark text-white pt-5 ps-5">
          <h1 className="mb-4">The place for all your reading needs</h1>
          <span>
            <Button className="me-2" variant='light'><Link to="/login" className="text-decoration-none">Log in</Link></Button>
            <Button><Link to="/register" className="text-white text-decoration-none">Create Account</Link></Button>
          </span>
        </div>
      );
}