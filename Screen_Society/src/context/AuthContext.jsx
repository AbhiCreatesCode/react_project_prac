// import { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         console.log("AuthProvider Mounted");  // ✅ Debugging log
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//             console.log("User Found in Local Storage:", storedUser);
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const login = (userData) => {
//         console.log("User Logged In:", userData);
//         localStorage.setItem("user", JSON.stringify(userData));
//         setUser(userData);
//     };

//     const logout = () => {
//         console.log("User Logged Out");
//         localStorage.removeItem("user");
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>  
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ Keep login state after refresh
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
