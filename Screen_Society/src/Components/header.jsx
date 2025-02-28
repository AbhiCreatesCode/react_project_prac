// import { useState } from "react";
// import { FaBars, FaTimes, FaUser, FaGlobe } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import "./header.css"; // Import external CSS

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);

//   return (
//     <header className="header">
//       {/* Dark Overlay */}
//       <div className="overlay"></div>

//       <div className="header-container">
//         {/* Logo */}
//         <div className="logo">ReelConnect</div>

//         {/* Navigation (Centered) */}
//         <nav className="nav-links">
//           <NavLink to="/" className="nav-item">Home</NavLink>
//           <NavLink to="/explore" className="nav-item">Explore</NavLink>
//           <NavLink to="/trending" className="nav-item">Trending</NavLink>
//           <NavLink to="/genres" className="nav-item">Genres</NavLink>
//           <NavLink to="/watchlist" className="nav-item">Watchlist</NavLink>
//         </nav>

//         {/* Authentication & Language */}
//         <div className="right-buttons">
//           {/* Language Selector */}
//           <div 
//             className="language-dropdown" 
//             onMouseEnter={() => setIsLangOpen(true)} 
//             onMouseLeave={() => setIsLangOpen(false)}
//           >
//             <button className="language-btn">
//               <FaGlobe className="icon" />
//               <span>Language</span>
//             </button>
//             {isLangOpen && (
//               <div className="language-options">
//                 <button>English</button>
//                 <button>Telugu</button>
//                 <button>Hindi</button>
//               </div>
//             )}
//           </div>

//           {/* Sign In Button */}
//           <NavLink to="/login" className="sign-in">
//             <FaUser className="icon" />
//             <span>Sign In</span>
//           </NavLink>
//         </div>

//         {/* Mobile Menu */}
//         <div className="mobile-menu">
//           <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="mobile-nav">
//           <NavLink to="/" className="mobile-nav-item">Home</NavLink>
//           <NavLink to="/explore" className="mobile-nav-item">Explore</NavLink>
//           <NavLink to="/trending" className="mobile-nav-item">Trending</NavLink>
//           <NavLink to="/genres" className="mobile-nav-item">Genres</NavLink>
//           <NavLink to="/watchlist" className="mobile-nav-item">Watchlist</NavLink>

//           {/* Mobile Language Selector */}
//           <div className="mobile-language-dropdown">
//             <FaGlobe className="icon" />
//             <span>Language</span>
//             <div className="mobile-language-options">
//               <button>English</button>
//               <button>Telugu</button>
//               <button>Hindi</button>
//             </div>
//           </div>

//           {/* Mobile Sign In */}
//           <NavLink to="/login" className="mobile-sign-in">
//             <FaUser className="icon" />
//             <span>Sign In</span>
//           </NavLink>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// Trail # 2

// import { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaUser, FaGlobe } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./header.css"; // Import external CSS

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Function to check login status
//   const checkLoginStatus = () => {
//     setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//   };

//   useEffect(() => {
//     checkLoginStatus(); // Run when Header mounts

//     // Listen for changes in localStorage (when user logs in/out)
//     window.addEventListener("storage", checkLoginStatus);

//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn"); // Remove login status
//     setIsLoggedIn(false);
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <header className="header">
//       <div className="overlay"></div>

//       <div className="header-container">
//         <div className="logo">ReelConnect</div>

//         <nav className="nav-links">
//           <NavLink to="/" className="nav-item">Home</NavLink>
//           <NavLink to="/explore" className="nav-item">Explore</NavLink>
//           <NavLink to="/trending" className="nav-item">Trending</NavLink>
//           <NavLink to="/genres" className="nav-item">Genres</NavLink>
//           <NavLink to="/watchlist" className="nav-item">Watchlist</NavLink>
//         </nav>

//         <div className="right-buttons">
//           <div 
//             className="language-dropdown" 
//             onMouseEnter={() => setIsLangOpen(true)} 
//             onMouseLeave={() => setIsLangOpen(false)}
//           >
//             <button className="language-btn">
//               <FaGlobe className="icon" />
//               <span>Language</span>
//             </button>
//             {isLangOpen && (
//               <div className="language-options">
//                 <button>English</button>
//                 <button>Telugu</button>
//                 <button>Hindi</button>
//               </div>
//             )}
//           </div>

//           {isLoggedIn ? (
//             <>
//               <NavLink to="/profile" className="profile">
//                 <FaUser className="icon" />
//                 <span>Profile</span>
//               </NavLink>
//               <button onClick={handleLogout} className="logout-btn">Logout</button>
//             </>
//           ) : (
//             <NavLink to="/login" className="sign-in">
//               <FaUser className="icon" />
//               <span>Sign In</span>
//             </NavLink>
//           )}
//         </div>

//         <div className="mobile-menu">
//           <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="mobile-nav">
//           <NavLink to="/" className="mobile-nav-item">Home</NavLink>
//           <NavLink to="/explore" className="mobile-nav-item">Explore</NavLink>
//           <NavLink to="/trending" className="mobile-nav-item">Trending</NavLink>
//           <NavLink to="/genres" className="mobile-nav-item">Genres</NavLink>
//           <NavLink to="/watchlist" className="mobile-nav-item">Watchlist</NavLink>

//           <div className="mobile-language-dropdown">
//             <FaGlobe className="icon" />
//             <span>Language</span>
//             <div className="mobile-language-options">
//               <button>English</button>
//               <button>Telugu</button>
//               <button>Hindi</button>
//             </div>
//           </div>

//           {isLoggedIn ? (
//             <>
//               <NavLink to="/profile" className="mobile-profile">
//                 <FaUser className="icon" />
//                 <span>Profile</span>
//               </NavLink>
//               <button onClick={handleLogout} className="mobile-logout-btn">Logout</button>
//             </>
//           ) : (
//             <NavLink to="/login" className="mobile-sign-in">
//               <FaUser className="icon" />
//               <span>Sign In</span>
//             </NavLink>
//           )}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaGlobe } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css"; // Import external CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // 🚀 Fix: Start with null to prevent incorrect UI
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="overlay"></div>

      <div className="header-container">
        <div className="logo">ReelConnect</div>

        <nav className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/explore" className="nav-item">Explore</NavLink>
          <NavLink to="/trending" className="nav-item">Trending</NavLink>
          <NavLink to="/genres" className="nav-item">Genres</NavLink>
          <NavLink to="/watchlist" className="nav-item">Watchlist</NavLink>
        </nav>

        <div className="right-buttons">
          <div 
            className="language-dropdown" 
            onMouseEnter={() => setIsLangOpen(true)} 
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button className="language-btn">
              <FaGlobe className="icon" />
              <span>Language</span>
            </button>
            {isLangOpen && (
              <div className="language-options">
                <button>English</button>
                <button>Telugu</button>
                <button>Hindi</button>
              </div>
            )}
          </div>

          {/* 🚀 Fix: Prevent rendering wrong button before useEffect completes */}
          {isLoggedIn === null ? (
            <span>Loading...</span> // Optional: Can replace with a spinner
          ) : isLoggedIn ? (
            <>
              <NavLink to="/profile" className="profile-btn">
                <FaUser className="icon" />
                <span>{user ? user.username : "Profile"}</span>
              </NavLink>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="sign-in">
              <FaUser className="icon" />
              <span>Sign In</span>
            </NavLink>
          )}
        </div>

        <div className="mobile-menu">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav">
          <NavLink to="/" className="mobile-nav-item">Home</NavLink>
          <NavLink to="/explore" className="mobile-nav-item">Explore</NavLink>
          <NavLink to="/trending" className="mobile-nav-item">Trending</NavLink>
          <NavLink to="/genres" className="mobile-nav-item">Genres</NavLink>
          <NavLink to="/watchlist" className="mobile-nav-item">Watchlist</NavLink>

          <div className="mobile-language-dropdown">
            <FaGlobe className="icon" />
            <span>Language</span>
            <div className="mobile-language-options">
              <button>English</button>
              <button>Telugu</button>
              <button>Hindi</button>
            </div>
          </div>

          {isLoggedIn === null ? (
            <span>Loading...</span>
          ) : isLoggedIn ? (
            <>
              <NavLink to="/profile" className="mobile-profile">
                <FaUser className="icon" />
                <span>{user ? user.username : "Profile"}</span>
              </NavLink>
              <button onClick={handleLogout} className="mobile-logout-btn">Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="mobile-sign-in">
              <FaUser className="icon" />
              <span>Sign In</span>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

