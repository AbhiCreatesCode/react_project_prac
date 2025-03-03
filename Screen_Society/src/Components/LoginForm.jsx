// // import React from "react";
// import './LoginForm.css'
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// const LoginForm = () => {
//     return (
//         <div className="wrapper">
//             <form action="">
//                 <h1>Login</h1>
//                 <div className="input-box">
//                     <input type="text" name="username" placeholder="Username" required/>
//                     <FaUser className="icon"/>
//                 </div>
//                 <div className="input-box">
//                     <input type="password" name="password" placeholder="Password" required/>
//                     <FaLock className="icon"/>
//                 </div>

//                 <div className="remeber-forgot">
//                     <label>
//                         <input type="checkbox" />Remeber me
//                     </label>
//                     <a href="#">Forgot password?</a>
//                 </div>

//                 <button type="submit">Login</button>

//                 <div className="register-link">
//                     <p>Don&apos;t have an account? <NavLink to="/signup" className="register">Sign Up</NavLink>
// </p>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default LoginForm;


// code modified so that it works with the json server

// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";  // ✅ Ensure correct path
// import './LoginForm.css';
// import { FaUser, FaLock } from "react-icons/fa";

// const LoginForm = () => {
//     const authContext = useContext(AuthContext);  // ✅ Fix: Ensure `AuthContext` is not undefined

//     if (!authContext) {
//         console.error("AuthContext is undefined! Make sure AuthProvider is wrapping your app.");
//         return <p>Error: Authentication is not available.</p>;
//     }

//     const { login } = authContext;
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
//             const users = await response.json();

//             if (users.length > 0) {
//                 login(users[0]);  // ✅ Now, this function exists
//                 navigate("/dashboard");
//             } else {
//                 setError("Invalid email or password!");
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//             setError("Something went wrong. Please try again.");
//         }
//     };

//     return (
//         <div className="wrapper">
//             <form onSubmit={handleLogin}>
//                 <h1>Login</h1>

//                 {error && <p className="error-message">{error}</p>}

//                 <div className="input-box">
//                     <input 
//                         type="email" 
//                         name="email" 
//                         placeholder="Email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <FaUser className="icon"/>
//                 </div>

//                 <div className="input-box">
//                     <input 
//                         type="password" 
//                         name="password" 
//                         placeholder="Password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <FaLock className="icon"/>
//                 </div>

//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;

// ###################################################################################################################

// modifed more 
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // ✅ Ensure correct path
// import "./LoginForm.css";
// import { FaUser, FaLock } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const LoginForm = () => {
//     const authContext = useContext(AuthContext); // ✅ Ensure AuthContext is defined
//     const navigate = useNavigate();

//     if (!authContext) {
//         console.error("AuthContext is undefined! Make sure AuthProvider is wrapping your app.");
//         return <p>Error: Authentication is not available.</p>;
//     }

//     const { login } = authContext;
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
//             const users = await response.json();

//             if (users.length > 0) {
//                 login(users[0]); // ✅ Store user in AuthContext
//                 navigate("/dashboard"); // ✅ Redirect after login
//             } else {
//                 setError("Invalid email or password!");
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//             setError("Something went wrong. Please try again.");
//         }
//     };

//     return (
//         <div className="wrapper">
//             <form onSubmit={handleLogin}>
//                 <h1>Login</h1>

//                 {error && <p className="error-message">{error}</p>} {/* ✅ Error message */}

//                 <div className="input-box">
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <FaUser className="icon" />
//                 </div>

//                 <div className="input-box">
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <FaLock className="icon" />
//                 </div>

//                 <div className="remeber-forgot">
//                     <label>
//                         <input type="checkbox" /> Remember me
//                     </label>
//                     <a href="#">Forgot password?</a>
//                 </div>

//                 <button type="submit">Login</button>

//                 <div className="register-link">
//                     <p>Don&apos;t have an account? <NavLink to="/signup" className="register">Sign Up</NavLink></p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;


import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // ✅ Ensure correct path
import axios from "axios";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const { login } = authContext;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    if (!authContext) {
        console.error("AuthContext is undefined! Make sure AuthProvider is wrapping your app.");
        return <p>Error: Authentication is not available.</p>;
    }

    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");  // ✅ Clear previous errors
        setLoading(true);

        try {
            const { data: users } = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);

            if (users.length > 0) {
                login(users[0]); // ✅ Store user in AuthContext
                navigate("/dashboard"); // ✅ Redirect after login
            } else {
                setError("Invalid email or password!");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                {error && <p className="error-message">{error}</p>} {/* ✅ Show errors */}

                <div className="input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remeber-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="register-link">
                    <p>Don&apos;t have an account? <NavLink to="/signup" className="register">Sign Up</NavLink></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
