import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const SignupForm = () => {
//     const [step, setStep] = useState(1);
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     // const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     const handleNext = () => {
//         setStep(step + 1);
//     };

//     // const handleSignup = () => {
//     //     alert(`Signup Completed!\nEmail: ${email}\nUsername: ${username}`);
//     //     navigate("/dashboard"); // Redirect after signup
//     // };
//     const handleSignup = () => {
//         alert(`Signup Completed!\nEmail: ${email}\nUsername: ${username}`);
    
//         setTimeout(() => {
//             navigate("/dashboard"); // Redirect after 3 seconds
//         }, 1000);
//     };
    
    
    

//     return (
//         <div className="signup-page">
//             <div className="signup-container">
//                 {step === 1 && (
//                     <>
//                         <h1>Sign Up for ReelConnect</h1>
//                         <p>Enter your email to create or restart your membership.</p>
//                         <input 
//                             type="email" 
//                             placeholder="Email address" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleNext} disabled={!email.trim()}>
//                             Next
//                         </button>
//                     </>
//                 )}

//                 {step === 2 && (
//                     <>
//                         <h1>Create Your Username</h1>
//                         <p>Choose a unique username for your account.</p>
//                         <input 
//                             type="text" 
//                             placeholder="Username" 
//                             value={username} 
//                             onChange={(e) => setUsername(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleNext} disabled={!username.trim()}>
//                             Next
//                         </button>
//                     </>
//                 )}

//                 {step === 3 && (
//                     <>
//                         <h1>Create a Password</h1>
//                         <p>Email: {email}</p>
//                         <input 
//                             type="password" 
//                             placeholder="Create a password" 
//                             value={password} 
//                             onChange={(e) => setPassword(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleSignup} disabled={password.length < 6}>
//                             Sign Up
//                         </button>
//                     </>
//                 )}
//             </div>
//         </div>
        
//     );
// };

// export default SignupForm;

// below is good but changing to get profile

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const SignupForm = () => {
//     const [step, setStep] = useState(1);
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPopup, setShowPopup] = useState(false); // Popup state
//     const navigate = useNavigate();

//     const handleNext = () => {
//         setStep(step + 1);
//     };

//     const handleSignup = () => {
//         const user = { email, username };
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("user", JSON.stringify(user)); // Store user data
    
//         setShowPopup(true);
    
//         setTimeout(() => {
//             setShowPopup(false);
//             navigate("/"); // Redirect to landing page
//         }, 1000);
//     };
    

//     return (
//         <div className="signup-page">
//             <div className="signup-container">
//                 {step === 1 && (
//                     <>
//                         <h1>Sign Up for ReelConnect</h1>
//                         <p>Enter your email to create or restart your membership.</p>
//                         <input 
//                             type="email" 
//                             placeholder="Email address" 
//                             value={email} 
//                             onChange={(e) => setEmail(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleNext} disabled={!email.trim()}>
//                             Next
//                         </button>
//                     </>
//                 )}

//                 {step === 2 && (
//                     <>
//                         <h1>Create Your Username</h1>
//                         <p>Choose a unique username for your account.</p>
//                         <input 
//                             type="text" 
//                             placeholder="Username" 
//                             value={username} 
//                             onChange={(e) => setUsername(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleNext} disabled={!username.trim()}>
//                             Next
//                         </button>
//                     </>
//                 )}

//                 {step === 3 && (
//                     <>
//                         <h1>Create a Password</h1>
//                         <p>Email: {email}</p>
//                         <input 
//                             type="password" 
//                             placeholder="Create a password" 
//                             value={password} 
//                             onChange={(e) => setPassword(e.target.value)}
//                             required 
//                         />
//                         <button onClick={handleSignup} disabled={password.length < 6}>
//                             Sign Up
//                         </button>
//                     </>
//                 )}
//             </div>

//             {/* Popup for successful signup */}
//             {showPopup && (
//                 <div className="popup">
//                     <p>Signup Completed! Redirecting...</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SignupForm;import { useState } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const SignupForm = () => {
    // ✅ Hooks should always be at the top level
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleSignup = async () => {
        setError(""); // ✅ Clear previous errors

        const newUser = { email, username, password };

        try {
            console.log("Checking if email exists...");
            const { data: existingUsers } = await axios.get(`http://localhost:5000/users?email=${email}`);

            if (existingUsers.length > 0) {
                setError("Email already in use. Please use a different one.");
                return;
            }

            console.log("Sending new user to JSON server...");
            await axios.post("http://localhost:5000/users", newUser);

            console.log("Signup successful!");
            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
                navigate("/"); // ✅ Redirect to home page after signup
            }, 2000);
        } catch (error) {
            console.error("Error signing up:", error);
            setError("Signup failed! Please try again.");
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                {error && <p className="error-message">{error}</p>} {/* ✅ Display errors */}

                {step === 1 && (
                    <>
                        <h1>Sign Up for ReelConnect</h1>
                        <p>Enter your email to create or restart your membership.</p>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <button onClick={handleNext} disabled={!email.trim()}>
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h1>Create Your Username</h1>
                        <p>Choose a unique username for your account.</p>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                        <button onClick={handleNext} disabled={!username.trim()}>
                            Next
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h1>Create a Password</h1>
                        <p>Email: {email}</p>
                        <input 
                            type="password" 
                            placeholder="Create a password (min 6 characters)" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <button onClick={handleSignup} disabled={password.length < 6}>
                            Sign Up
                        </button>
                    </>
                )}
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="popup">
                    <p>Signup Completed! Redirecting...</p>
                </div>
            )}
        </div>
    );
};

export default SignupForm;
