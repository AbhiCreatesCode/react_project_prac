import { Outlet } from "react-router-dom";
import "../pages/landingpage.css"; // Import styles
// import movie1 from "../assets/movie1.jpg"
export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="welcome-text">Welcome to ReelConnect</h1>
      <p className="sub-text">Your ultimate movie club experience 🎬</p>

      {/* Movie Scrolling Banner */}
      <div className="movie-scroller">
        <div className="scroller-track">
          <img src="../assets/movie1.jpg" alt="Movie 1" />
          <img src="../assets/movie2.jpg" alt="Movie 2" />
          <img src="../assets/movie3.jpg" alt="Movie 3" />
          <img src="../assets/movie4.jpg" alt="Movie 4" />
          <img src="../assets/movie5.jpg" alt="Movie 5" />
          <img src="../assets/movie6.jpg" alt="Movie 6" />
          <img src="../assets/movie7.jpg" alt="Movie 7" />
          <img src="../assets/movie8.jpg" alt="Movie 8" />
          <img src="../assets/movie9.jpg" alt="Movie 9" />
          <img src="../assets/movie10.jpg" alt="Movie 10" />
          {/* Duplicate images for seamless effect */}
          <img src="../assets/movie1.jpg" alt="Movie 1" />
          <img src="../assets/movie2.jpg" alt="Movie 2" />
          <img src="../assets/movie3.jpg" alt="Movie 3" />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
