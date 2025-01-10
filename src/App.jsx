import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "./Components/Course";
import CourseDetail from "./Components/CourseDetail"; // Import CourseDetail component
import Quiz from "./Components/Quiz"; // Import Quiz component
import "./App.css"; // Import the CSS file

const courses = [
  {
    id: 1,
    title: "Advanced Backend Development",
    progress: 80,
    overview: "Learn advanced backend concepts using Node.js and Express.",
    modules: [
      { title: "Introduction", description: "Overview of backend architecture" },
      { title: "Authentication", description: "Implementing secure user authentication" },
      { title: "Database Management", description: "Using MongoDB for data storage" },
    ],
  },
  {
    id: 2,
    title: "Mastering Flask for Web Apps",
    progress: 50,
    overview: "Master Flask to build powerful and scalable web applications.",
    modules: [
      { title: "Flask Basics", description: "Understanding Flask framework" },
      { title: "Routing", description: "Building routes for web apps" },
      { title: "APIs", description: "Creating RESTful APIs with Flask" },
    ],
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "Employee" || role === "HR") {
      setLoggedIn(true);
    } else {
      alert("Access restricted to 'HR' or 'Employee' role only!");
    }
  };

  return (
    <Router>
      <div>
        {!loggedIn ? (
          <div className="login-container">
            <h1>Login</h1>
            <p>Select Your Role to Access the Portal</p>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
              <option value="Participant">Instructor</option>
            </select>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button onClick={handleLogin}>Login</button>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <a href="#" className="create-account">
              Don't have an account? Create one here
            </a>
          </div>
        ) : (
          <div className="main-container">
            {/* Sidebar Component */}
            <div className="sidebar">
              <div className="headerD">
                <Link to="/homepage" className="logodashboard">
                  Dashboard
                </Link>
              </div>
              <nav className="navbar">
                <Link to="/homepage">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/Audit Trail">Audit Trail</Link>
                <Link to="/Manage Course">Manage Course</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/" onClick={() => setLoggedIn(false)}>
                  Logout
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
              <Routes>
                <Route
                  path="/homepage"
                  element={
                    <div className="homepage">
                      <h1>Welcome to Dashboard</h1>
                    </div>
                  }
                />
                <Route path="/courses" element={<Course courses={courses} />} />
                <Route path="/course/:courseId" element={<CourseDetail courses={courses} />} />
                
                {/* Quiz Component Route */}
                <Route path="/quiz/:courseId/:moduleIndex" element={<Quiz />} />


                {/* Profile and Restricted Content */}
                {role === "Employee" || role === "HR" ? (
                  <Route path="/profile" element={<div>User Profile and Content</div>} />
                ) : (
                  <Route path="/profile" element={<h1>Access Denied: Restricted to 'Employee' or 'HR' role</h1>} />
                )}

                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
