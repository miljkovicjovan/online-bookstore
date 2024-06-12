import { Button } from "react-bootstrap";

export default function Home() {
    return (
        <div className="vh-100 bg-dark text-white pt-5 ps-5">
          <h1 className="mb-4">The place for all your reading needs</h1>
          <span>
            <Button className="me-2" variant='light'>Log in</Button>
            <Button>Create account</Button>
          </span>
        </div>
      );
}