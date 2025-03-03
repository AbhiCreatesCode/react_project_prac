import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./profile.css"

const Profile = () => {
    const { user, login } = useContext(AuthContext);
    const [username, setUsername] = useState(user?.username || "");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (user) {
            setUsername(user.username);
        }
    }, [user]);

    const handleUpdate = async () => {
        if (!user) return;

        setLoading(true);
        try {
            const updatedUser = { ...user, username };
            await axios.put(`http://localhost:5000/users/${user.id}`, updatedUser);

            login(updatedUser); // ✅ Update context with new username
            setSuccessMessage("Username updated successfully!");
            setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3s
        } catch (error) {
            console.error("Error updating profile:", error);
        }
        setLoading(false);
    };

    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            
            <div className="profile-details">
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button onClick={handleUpdate} disabled={loading}>
                    {loading ? "Updating..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
