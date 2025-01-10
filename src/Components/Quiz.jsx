import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./quiz.css";

const quizzes = [
  {
    courseId: 1,
    moduleIndex: 0,
    title: "Quiz 1: Introduction to Backend",
    questions: [
      { question: "1. What is Node.js?", options: ["JavaScript Runtime", "Database", "Server Framework"], correctAnswer: "JavaScript Runtime" },
      { question: "2. What is the purpose of Express?", options: ["Build APIs", "Manage Database", "Render UI"], correctAnswer: "Build APIs" },
    ],
  },
  {
    courseId: 1,
    moduleIndex: 1,
    title: "Quiz 2: Authentication",
    questions: [
      { question: "1. What does OAuth stand for?", options: ["Open Authorization", "Online Authorization", "Operational Authorization"], correctAnswer: "Open Authorization" },
      { question: "2. What is JWT used for?", options: ["User Authentication", "Database Querying", "UI Rendering"], correctAnswer: "User Authentication" },
    ],
  },
  {
    courseId: 1,
    moduleIndex: 2,
    title: "Quiz 3: Database Management",
    questions: [
      { question: "1. Which database is NoSQL?", options: ["MongoDB", "MySQL", "PostgreSQL"], correctAnswer: "MongoDB" },
      { question: "2. What is an ORM?", options: ["Object Relational Mapping", "Optimized Relational Model", "Online Resource Manager"], correctAnswer: "Object Relational Mapping" },
    ],
  },
  {
    courseId: 2,
    moduleIndex: 0,
    title: "Quiz 1: Flask Basics",
    questions: [
      { question: "1. What is Flask?", options: ["A Python Web Framework", "A JavaScript Library", "A Database"], correctAnswer: "A Python Web Framework" },
      { question: "2. What is Jinja2?", options: ["A Templating Engine", "A Database", "An API Tool"], correctAnswer: "A Templating Engine" },
    ],
  },
  {
    courseId: 2,
    moduleIndex: 1,
    title: "Quiz 2: Routing",
    questions: [
      { question: "1. What is Flask routing?", options: ["Mapping URLs to Functions", "Managing Database", "Managing UI Components"], correctAnswer: "Mapping URLs to Functions" },
      { question: "2. What is Middleware?", options: ["Code to Modify Requests and Responses", "Database Management", "User Authentication"], correctAnswer: "Code to Modify Requests and Responses" },
    ],
  },
  {
    courseId: 2,
    moduleIndex: 2,
    title: "Quiz 3: APIs",
    questions: [
      { question: "1. What does REST stand for?", options: ["Representational State Transfer", "Remote State Transfer", "Real-time Service Transfer"], correctAnswer: "Representational State Transfer" },
      { question: "2. Which library is used for testing Flask APIs?", options: ["Unittest", "Flask-Testing", "pytest"], correctAnswer: "pytest" },
    ],
  },
  {
    courseId: 3,
    moduleIndex: 0,
    title: "Quiz 1: React Basics",
    questions: [
      { question: "1. What is JSX?", options: ["A JavaScript Syntax Extension", "A TypeScript Library", "A CSS Preprocessor"], correctAnswer: "A JavaScript Syntax Extension" },
      { question: "2. What is the purpose of React Hooks?", options: ["Manage State and Lifecycle", "Perform API Calls", "Optimize CSS"], correctAnswer: "Manage State and Lifecycle" },
    ],
  },
  {
    courseId: 3,
    moduleIndex: 1,
    title: "Quiz 2: State Management",
    questions: [
      { question: "1. What is Redux?", options: ["A State Management Library", "A JavaScript Framework", "A UI Library"], correctAnswer: "A State Management Library" },
      { question: "2. What is Context API used for?", options: ["Prop Drilling Prevention", "Database Management", "Routing"], correctAnswer: "Prop Drilling Prevention" },
    ],
  },
  {
    courseId: 3,
    moduleIndex: 2,
    title: "Quiz 3: Performance Optimization",
    questions: [
      { question: "1. What is Lazy Loading?", options: ["Loading Components on Demand", "Loading All Data at Once", "A JavaScript Feature"], correctAnswer: "Loading Components on Demand" },
      { question: "2. What does Code Splitting achieve?", options: ["Improved Load Times", "Better CSS Styling", "Enhanced Security"], correctAnswer: "Improved Load Times" },
    ],
  },
  
  {
    courseId: 4,
    moduleIndex: 0,
    title: "Quiz 1: Core Python",
    questions: [
      { question: "1. What is the purpose of Python's `with` statement?", options: ["Simplify Resource Management", "Create Loops", "Define Functions"], correctAnswer: "Simplify Resource Management" },
      { question: "2. Which data structure uses key-value pairs?", options: ["Dictionary", "List", "Set"], correctAnswer: "Dictionary" },
    ],
  },
  {
    courseId: 4,
    moduleIndex: 1,
    title: "Quiz 2: Advanced Features",
    questions: [
      { question: "1. What is a Python decorator?", options: ["A Function that Modifies Other Functions", "A Styling Tool", "A Class Definition"], correctAnswer: "A Function that Modifies Other Functions" },
      { question: "2. What is a generator used for?", options: ["Creating Iterators", "Handling Exceptions", "Managing Threads"], correctAnswer: "Creating Iterators" },
    ],
  },
  {
    courseId: 4,
    moduleIndex: 2,
    title: "Quiz 3: Libraries and Multithreading",
    questions: [
      { question: "1. What does NumPy primarily handle?", options: ["Numerical Computations", "Database Queries", "Web Requests"], correctAnswer: "Numerical Computations" },
      { question: "2. What is the Global Interpreter Lock (GIL)?", options: ["A Thread Synchronization Mechanism", "A File Lock", "A Debugging Tool"], correctAnswer: "A Thread Synchronization Mechanism" },
    ],
  },
 
  {
    courseId: 5,
    moduleIndex: 0,
    title: "Quiz 1: Data Preprocessing",
    questions: [
      { question: "1. What does data cleaning involve?", options: ["Handling Missing Data", "Creating Models", "Deploying Applications"], correctAnswer: "Handling Missing Data" },
      { question: "2. Which library is commonly used for data transformation?", options: ["Pandas", "NumPy", "Flask"], correctAnswer: "Pandas" },
    ],
  },
  {
    courseId: 5,
    moduleIndex: 1,
    title: "Quiz 2: Visualization",
    questions: [
      { question: "1. What is Matplotlib used for?", options: ["Data Visualization", "Data Cleaning", "Database Management"], correctAnswer: "Data Visualization" },
      { question: "2. Which library is best for advanced visualizations?", options: ["Seaborn", "Flask", "SQLAlchemy"], correctAnswer: "Seaborn" },
    ],
  },
  {
    courseId: 5,
    moduleIndex: 2,
    title: "Quiz 3: Machine Learning",
    questions: [
      { question: "1. What is supervised learning?", options: ["Training with Labeled Data", "Clustering Data", "Using Pre-Trained Models"], correctAnswer: "Training with Labeled Data" },
      { question: "2. Which library is commonly used for machine learning in Python?", options: ["Scikit-learn", "NumPy", "Matplotlib"], correctAnswer: "Scikit-learn" },
    ],
  },

];

const Quiz = () => {
  const { courseId, moduleIndex } = useParams();
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [passStatus, setPassStatus] = useState(null);

  const quiz = quizzes.find((q) => q.courseId === parseInt(courseId) && q.moduleIndex === parseInt(moduleIndex));

  if (!quiz) {
    return <h2>Quiz not found!</h2>;
  }

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const totalQuestions = quiz.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    setScore(score);

    const isPass = score >= 60;
    setPassStatus(isPass ? "Pass" : "Fail");
  };

  return (
    <div className="quiz">
      <h1>{quiz.title}</h1>
      <form>
        {quiz.questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            {question.options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={`question${index}_option${idx}`}
                  name={`question${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label htmlFor={`question${index}_option${idx}`}>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </form>

      <button onClick={handleSubmit}>Submit Quiz</button>

      {score !== null && (
        <div className="quiz-result">
          <h3>Your Score: {score}%</h3>
          <h4>Status: {passStatus}</h4>
        </div>
      )}

      <button className="back-btn" onClick={() => navigate(`/course/${courseId}`)}>Back to Course</button>
    </div>
  );
};

export default Quiz;
