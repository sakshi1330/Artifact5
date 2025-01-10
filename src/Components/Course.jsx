import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const continueLearningCourses = [
    { id: 1, title: "Advanced Backend Development", progress: 80 },
    { id: 2, title: "Mastering Flask for Web Apps", progress: 50 },
    { id: 3, title: "Advanced Frontend Development", progress: 40 },
  ];

  const allCourses = [
    { id: 1, title: "Deep Dive into Python Programming", progress: 0 },
    { id: 2, title: "Full Stack Web Development", progress: 60 },
    { id: 3, title: "Data Science with Python", progress: 100 },
  ];

  const completed = allCourses.filter(course => course.progress === 100).length;
  const inProgress = allCourses.filter(course => course.progress > 0 && course.progress < 100).length;
  const notEnrolled = allCourses.filter(course => course.progress === 0).length;

  const filteredContinueLearningCourses = continueLearningCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAllCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-container">
      <div className="header">
        <h1>Course Management Dashboard</h1>
        <div className="upskill-line">
          <span>Upskill your knowledge!</span>
        </div>
      </div>

      <div className="header-actions">
        <h2>Continue Learning</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="progress-boxes">
        {filteredContinueLearningCourses.map((course) => (
          <div key={course.id} className="progress-box">
            <h3>{course.title}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${course.progress}%` }}></div>
            </div>
            <Link to={`/course/${course.id}`}>
              <button className="continue-button">Continue</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="courses-header">
        <h2>All Courses</h2>
        <div className="status-line">
          <div>
            <span className="status-label">Completed: </span>
            <span>{completed}</span>
          </div>
          <div>
            <span className="status-label">In Progress: </span>
            <span>{inProgress}</span>
          </div>
          <div>
            <span className="status-label">Not Enrolled: </span>
            <span>{notEnrolled}</span>
          </div>
        </div>
      </div>

      <div className="course-grid">
        {filteredAllCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-details">
              <h3>{course.title}</h3>
              {course.progress > 0 && (
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <Link to={`/course/${course.id}`}>
              {course.progress === 0 ? (
                <button className="start-button">Start</button>
              ) : course.progress === 100 ? (
                <button className="view-button">View Details</button>
              ) : (
                <button className="continue-button">Continue</button>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
