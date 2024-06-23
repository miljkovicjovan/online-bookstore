import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios directly
const LOGIN_URL = '/auth/login'; // Adjust the login endpoint

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                { username: user, password: pwd }, // Send username and password as JSON object
                { withCredentials: true } // Ensure credentials are sent with the request
            );

            console.log(response.data); // Log response data for debugging

            // If login is successful, set authentication context
            setAuth({
                user,
                accessToken: response.data.accessToken // Assuming your backend sends accessToken
            });

            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            console.error('Login failed:', err);

            // Set error message based on response status
            if (err.response && err.response.status === 401) {
                setErrMsg('Invalid username or password');
            } else {
                setErrMsg('Login failed');
            }

            errRef.current.focus();
        }
    }

    return (
        <div className="vh-100 bg-dark text-white">
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to='/'>Go to home</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type="submit">Sign In</button> {/* Change button type to "submit" */}
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link to='/register'>Sign Up</Link>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default Login;
