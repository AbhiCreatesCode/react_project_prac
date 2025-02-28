// import { useState } from "react";
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

// export default SignupForm;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        setStep(step + 1);
    };

    // const handleSignup = () => {
    //     const user = { email, username };
    //     localStorage.setItem("isLoggedIn", "true"); // Store login status
    //     localStorage.setItem("user", JSON.stringify(user)); // Store user details

    //     setShowPopup(true); // Show popup

    //     setTimeout(() => {
    //         setShowPopup(false); // Hide popup
    //         navigate("/"); // Redirect to Landing Page
    //         window.location.reload(); // Force Header to update immediately
    //     }, 1000);
    // };

    const handleSignup = async () => {
        const newUser = { email, username, password };
    
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });
    
            if (response.ok) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    navigate("/login");
                }, 1000);
            } else {
                alert("Signup failed! Please try again.");
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };
    

    return (
        <div className="signup-page">
            <div className="signup-container">
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
                            placeholder="Create a password" 
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

            {/* Popup for successful signup */}
            {showPopup && (
                <div className="popup">
                    <p>Signup Completed! Redirecting...</p>
                </div>
            )}
        </div>
    );
};

export default SignupForm;
