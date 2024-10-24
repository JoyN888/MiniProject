import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Floating icons for the background */}
      <div className="floating-icons">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <header className="homepage-header">
        <h1>Welcome to the Online Quiz System</h1>
        <p>
          Create your own quizzes, take exciting quizzes, and track your results. Challenge yourself and your friends today!
        </p>
        <div className="homepage-buttons">
          <Link to="/create-quiz" className="btn btn-primary">Create a Quiz</Link>
          <Link to="/quiz" className="btn btn-success">Take a Quiz</Link>
          <Link to="/results" className="btn btn-info">View Results</Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
