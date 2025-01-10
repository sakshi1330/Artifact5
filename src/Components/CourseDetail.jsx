// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import './CourseDetail.css';

// const courses = [
//   {
//     id: 1,
//     title: "Advanced Backend Development",
//     overview:
//       "Overview: Learn advanced backend concepts using Node.js and Express. Advanced Backend Development focuses on equipping developers with the skills to build secure, scalable, and efficient server-side applications. This course dives deep into advanced backend programming concepts, including database optimization, API development, and real-time communication. Participants will learn to design robust architectures, implement secure authentication and authorization mechanisms, and leverage modern frameworks like Node.js or Flask. The course also covers scalability techniques such as caching, load balancing, and microservices, along with deployment strategies using cloud platforms and containerization tools. By the end, learners will be proficient in creating enterprise-level backend systems tailored to real-world needs.",
    
//     learningOutcomes: [
//       "Design and implement secure and scalable backend architectures.",
//       "Develop robust APIs and integrate real-time communication.",
//       "Optimize database performance and implement advanced querying techniques.",
//       "Leverage modern backend frameworks like Node.js or Flask effectively.",
//       "Apply caching, load balancing, and microservices for scalability.",
//       "Deploy applications using cloud platforms and containerization tools.",
//     ],
//     modules: [
//       { title: "1. Introduction", courses: ["Intro to Backend", "Backend Basics", "Node.js Basics"], quiz: "Quiz 1" },
//       { title: "2. Authentication", courses: ["OAuth Basics", "JWT Implementation", "Secure Passwords"], quiz: "Quiz 2" },
//       { title: "3. Database Management", courses: ["MongoDB Essentials", "SQL Optimization", "NoSQL Patterns"], quiz: "Quiz 3" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Mastering Flask for Web Apps",
//     overview:
//       "Master Flask to build powerful and scalable web applications. Mastering Flask for Web Apps is designed to provide developers with a comprehensive understanding of Flask, a lightweight yet powerful Python web framework. This course covers the essentials of building dynamic and scalable web applications, including routing, templates, and middleware. Participants will learn how to create RESTful APIs, manage databases using ORM tools like SQLAlchemy, and handle authentication and session management effectively. Advanced topics such as deploying Flask applications on cloud platforms, integrating third-party services, and enhancing performance with caching are also explored. By the end of this course, learners will have the expertise to design, develop, and deploy production-ready web applications with Flask.",
    
//     learningOutcomes: [
//       "Build dynamic and scalable web applications using Flask.",
//       "Understand and implement Flask routing, templates, and middleware.",
//       "Create secure and efficient RESTful APIs.",
//       "Manage databases with SQLAlchemy ORM effectively.",
//       "Deploy Flask applications to cloud platforms with best practices.",
//       "Optimize application performance using caching and other techniques.",
//     ],
//     modules: [
//       { title: "1. Flask Basics", courses: ["Intro to Flask", "Routing Basics", "Template Rendering"], quiz: "Quiz 1" },
//       { title: "2. Routing", courses: ["Dynamic Routing", "Route Parameters", "Middleware Handling"], quiz: "Quiz 2" },
//       { title: "3. APIs", courses: ["RESTful APIs", "Flask API Design", "Testing APIs"], quiz: "Quiz 3" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Advanced Frontend Development",
//     overview:
//       "Overview: Learn advanced frontend concepts including state management and performance optimization. Advanced Frontend Development equips developers with skills to build highly interactive and efficient web interfaces. This course covers topics such as advanced React.js features, state management with Redux, TypeScript integration, and performance optimization techniques. Participants will also explore progressive web apps (PWAs), accessibility best practices, and advanced testing methodologies. By the end of the course, learners will be proficient in creating responsive and user-friendly web applications tailored to real-world demands.",
    
//     learningOutcomes: [
//       "Build responsive and user-friendly web applications.",
//       "Master state management using Redux or Context API.",
//       "Integrate TypeScript into modern frontend development.",
//       "Apply performance optimization techniques for faster applications.",
//       "Implement accessibility best practices for inclusive design.",
//       "Develop and deploy Progressive Web Apps (PWAs).",
//     ],
//     modules: [
//       { title: "1. React Basics", courses: ["React Components", "Hooks Overview", "State and Props"], quiz: "Quiz 1" },
//       { title: "2. State Management", courses: ["Redux Fundamentals", "Context API", "Advanced State Patterns"], quiz: "Quiz 2" },
//       { title: "3. Performance Optimization", courses: ["Lazy Loading", "Code Splitting", "Optimizing Renders"], quiz: "Quiz 3" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Deep Dive into Python Programming",
//     overview:
//       "Overview: Master Python programming with a deep dive into its advanced features. Deep Dive into Python Programming offers comprehensive coverage of Python's core and advanced features. Topics include object-oriented programming, error handling, file operations, and libraries like NumPy, Pandas, and Matplotlib. This course also explores advanced concepts such as decorators, generators, multithreading, and multiprocessing. By the end of the course, learners will have the skills to write efficient and scalable Python applications.",
    
//     learningOutcomes: [
//       "Master Python's advanced features and libraries.",
//       "Write efficient and scalable Python applications.",
//       "Understand and implement object-oriented programming in Python.",
//       "Utilize libraries like NumPy, Pandas, and Matplotlib effectively.",
//       "Apply multithreading and multiprocessing for performance improvements.",
//       "Implement advanced Python concepts such as decorators and generators.",
//     ],
//     modules: [
//       { title: "1. Core Python", courses: ["Python Basics", "Data Structures", "File Handling"], quiz: "Quiz 1" },
//       { title: "2. Advanced Features", courses: ["Decorators", "Generators", "Error Handling"], quiz: "Quiz 2" },
//       { title: "3. Libraries and Multithreading", courses: ["NumPy and Pandas", "Multithreading Basics", "Multiprocessing"], quiz: "Quiz 3" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Data Science with Python",
//     overview:
//       "Overview: Dive into data science with Python to analyze and visualize data. Data Science with Python is designed to provide participants with the skills to handle and analyze data effectively. The course covers data preprocessing, exploratory data analysis, and visualization using libraries such as Pandas, NumPy, Matplotlib, and Seaborn. Additionally, learners will explore machine learning fundamentals and implement predictive models using Scikit-learn. The course also includes real-world projects to reinforce concepts and applications.",
    
//     learningOutcomes: [
//       "Preprocess and analyze data using Python libraries.",
//       "Perform exploratory data analysis and visualization.",
//       "Understand and apply machine learning algorithms.",
//       "Implement predictive models using Scikit-learn.",
//       "Handle real-world data science projects effectively.",
//       "Gain hands-on experience with popular Python libraries like Pandas and Matplotlib.",
//     ],
//     modules: [
//       { title: "1. Data Preprocessing", courses: ["Handling Missing Data", "Data Cleaning", "Data Transformation"], quiz: "Quiz 1" },
//       { title: "2. Visualization", courses: ["Matplotlib Basics", "Seaborn for Advanced Visuals", "Dashboard Creation"], quiz: "Quiz 2" },
//       { title: "3. Machine Learning", courses: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"], quiz: "Quiz 3" },
//     ],
//   },
// ];

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const [selectedCourseId, setSelectedCourseId] = useState(parseInt(courseId));
//   const [openModuleIndex, setOpenModuleIndex] = useState(null);

//   const course = courses.find((c) => c.id === selectedCourseId);

//   if (!course) {
//     return <h2>Course not found!</h2>;
//   }

//   const toggleModule = (index) => {
//     setOpenModuleIndex(openModuleIndex === index ? null : index);
//   };

//   const handleCourseChange = (event) => {
//     const newCourseId = parseInt(event.target.value);
//     setSelectedCourseId(newCourseId);
//     navigate(`/course/${newCourseId}`);
//   };

//   return (
//     <div className="course-detail">
//       <h1>Course Details</h1>

//       <label htmlFor="course-selector">Select a Course:</label>
//       <select
//         id="course-selector"
//         value={selectedCourseId}
//         onChange={handleCourseChange}
//       >
//         {courses.map((c) => (
//           <option key={c.id} value={c.id}>
//             {c.title}
//           </option>
//         ))}
//       </select>

//       <h1>{course.title}</h1>
//       <p>{course.overview}</p>

//       <h2>Modules</h2>
//       <ul>
//         {course.modules.map((module, index) => (
//           <li key={index} className="module-item">
//             <button
//               className="module-toggle"
//               onClick={() => toggleModule(index)}
//             >
//               {module.title}
//             </button>
//             {openModuleIndex === index && (
//               <div className="module-content">
//                 <ul>
//                   {module.courses.map((courseName, courseIndex) => (
//                     <li key={courseIndex}>{courseName}</li>
//                   ))}
//                 </ul>
//                 <p>Quiz: {module.quiz}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <h2>Learning Outcomes</h2>
//       <ul>
//         {course.learningOutcomes.map((outcome, index) => (
//           <li key={index}>{outcome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CourseDetail;









import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CourseDetail.css';

const courses = [
  {
    id: 1,
    title: "Advanced Backend Development",
    overview:
      "Overview: Learn advanced backend concepts using Node.js and Express. Advanced Backend Development focuses on equipping developers with the skills to build secure, scalable, and efficient server-side applications...",
    learningOutcomes: [
      "Design and implement secure and scalable backend architectures.",
      "Develop robust APIs and integrate real-time communication.",
      "Optimize database performance and implement advanced querying techniques.",
      "Leverage modern backend frameworks like Node.js or Flask effectively.",
      "Apply caching, load balancing, and microservices for scalability.",
      "Deploy applications using cloud platforms and containerization tools.",
    ],
    modules: [
      { title: "1. Introduction", courses: ["Intro to Backend", "Backend Basics", "Node.js Basics"], quiz: "Quiz 1" },
      { title: "2. Authentication", courses: ["OAuth Basics", "JWT Implementation", "Secure Passwords"], quiz: "Quiz 2" },
      { title: "3. Database Management", courses: ["MongoDB Essentials", "SQL Optimization", "NoSQL Patterns"], quiz: "Quiz 3" },
    ],
    instructor: {
      name: "John Doe",
      bio: "John is a backend developer with over 10 years of experience. He has worked with several technologies such as Node.js, Express, and cloud computing platforms like AWS and Azure.",
      email: "john.doe@example.com",
    },
  },
  {
    id: 2,
    title: "Mastering Flask for Web Apps",
    overview: "Master Flask to build powerful and scalable web applications...",
    learningOutcomes: [
            "Build dynamic and scalable web applications using Flask.",
            "Understand and implement Flask routing, templates, and middleware.",
            "Create secure and efficient RESTful APIs.",
            "Manage databases with SQLAlchemy ORM effectively.",
            "Deploy Flask applications to cloud platforms with best practices.",
            "Optimize application performance using caching and other techniques.",
          ],
          modules: [
            { title: "1. Flask Basics", courses: ["Intro to Flask", "Routing Basics", "Template Rendering"], quiz: "Quiz 1" },
            { title: "2. Routing", courses: ["Dynamic Routing", "Route Parameters", "Middleware Handling"], quiz: "Quiz 2" },
            { title: "3. APIs", courses: ["RESTful APIs", "Flask API Design", "Testing APIs"], quiz: "Quiz 3" },
          ],
    instructor: {
      name: "Jane Smith",
      bio: "Jane is a Python Developer and an expert in Flask. She has worked on multiple enterprise-level applications and loves to share her knowledge about web development with Flask.",
      contact: "jane.smith@example.com"
    }
  },
  {
    id: 3,
    title: "Advanced Frontend Development",
    overview:
      "Overview: Learn advanced frontend concepts including state management and performance optimization. Advanced Frontend Development equips developers with skills to build highly interactive and efficient web interfaces...",
    learningOutcomes: [
      "Build responsive and user-friendly web applications.",
      "Master state management using Redux or Context API.",
      "Integrate TypeScript into modern frontend development.",
      "Apply performance optimization techniques for faster applications.",
      "Implement accessibility best practices for inclusive design.",
      "Develop and deploy Progressive Web Apps (PWAs).",
    ],
    modules: [
      { title: "1. React Basics", courses: ["React Components", "Hooks Overview", "State and Props"], quiz: "Quiz 1" },
      { title: "2. State Management", courses: ["Redux Fundamentals", "Context API", "Advanced State Patterns"], quiz: "Quiz 2" },
      { title: "3. Performance Optimization", courses: ["Lazy Loading", "Code Splitting", "Optimizing Renders"], quiz: "Quiz 3" },
    ],
    instructor: {
      name: "Jane Smith",
      bio: "Jane is a senior frontend developer with expertise in React.js, Redux, and performance optimization. She has worked on numerous enterprise-level web applications and is passionate about creating efficient, user-friendly interfaces.",
      email: "jane.smith@example.com",
    },
  },
  {
    id: 4,
    title: "Deep Dive into Python Programming",
    overview:
      "Overview: Master Python programming with a deep dive into its advanced features. Deep Dive into Python Programming offers comprehensive coverage of Python's core and advanced features...",
    learningOutcomes: [
      "Master Python's advanced features and libraries.",
      "Write efficient and scalable Python applications.",
      "Understand and implement object-oriented programming in Python.",
      "Utilize libraries like NumPy, Pandas, and Matplotlib effectively.",
      "Apply multithreading and multiprocessing for performance improvements.",
      "Implement advanced Python concepts such as decorators and generators.",
    ],
    modules: [
      { title: "1. Core Python", courses: ["Python Basics", "Data Structures", "File Handling"], quiz: "Quiz 1" },
      { title: "2. Advanced Features", courses: ["Decorators", "Generators", "Error Handling"], quiz: "Quiz 2" },
      { title: "3. Libraries and Multithreading", courses: ["NumPy and Pandas", "Multithreading Basics", "Multiprocessing"], quiz: "Quiz 3" },
    ],
    instructor: {
      name: "David Clark",
      bio: "David is a Python expert with over 15 years of experience. He specializes in teaching Python for data analysis, machine learning, and web development.",
      email: "david.clark@example.com",
    },
  },
  {
    id: 5,
    title: "Data Science with Python",
    overview:
      "Overview: Dive into data science with Python to analyze and visualize data. Data Science with Python is designed to provide participants with the skills to handle and analyze data effectively...",
    learningOutcomes: [
      "Preprocess and analyze data using Python libraries.",
      "Perform exploratory data analysis and visualization.",
      "Understand and apply machine learning algorithms.",
      "Implement predictive models using Scikit-learn.",
      "Handle real-world data science projects effectively.",
      "Gain hands-on experience with popular Python libraries like Pandas and Matplotlib.",
    ],
    modules: [
      { title: "1. Data Preprocessing", courses: ["Handling Missing Data", "Data Cleaning", "Data Transformation"], quiz: "Quiz 1" },
      { title: "2. Visualization", courses: ["Matplotlib Basics", "Seaborn for Advanced Visuals", "Dashboard Creation"], quiz: "Quiz 2" },
      { title: "3. Machine Learning", courses: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"], quiz: "Quiz 3" },
    ],
    instructor: {
      name: "Alice Johnson",
      bio: "Alice is a data scientist with expertise in Python and machine learning. She has experience working with large datasets and building predictive models in various industries.",
      email: "alice.johnson@example.com",
    },
  },
];

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const [selectedCourseId, setSelectedCourseId] = useState(parseInt(courseId));
//   const [openModuleIndex, setOpenModuleIndex] = useState(null);
  
//   // Track completed modules and quizzes
//   const [completedModules, setCompletedModules] = useState([]);
//   const [completedQuizzes, setCompletedQuizzes] = useState([]);

//   const course = courses.find((c) => c.id === selectedCourseId);

//   if (!course) {
//     return <h2>Course not found!</h2>;
//   }

//   const toggleModule = (index) => {
//     setOpenModuleIndex(openModuleIndex === index ? null : index);
//   };

//   const handleCourseChange = (event) => {
//     const newCourseId = parseInt(event.target.value);
//     setSelectedCourseId(newCourseId);
//     navigate(`/course/${newCourseId}`);
//   };

//   const handleQuizClick = (courseId, moduleIndex) => {
//     // Mark the quiz as completed
//     setCompletedQuizzes([...completedQuizzes, `${courseId}-${moduleIndex}`]);
    
//     // Navigate to the Quiz page for this course and module
//     navigate(`/quiz/${courseId}/${moduleIndex}`);
//   };

//   const handleModuleCompletion = (moduleIndex) => {
//     // Mark the module as completed
//     setCompletedModules([...completedModules, moduleIndex]);
//   };

//   const calculateProgress = () => {
//     const totalModules = course.modules.length;
//     const completedModuleCount = completedModules.length;
//     const totalQuizzes = course.modules.reduce((acc, module) => acc + 1, 0);
//     const completedQuizCount = completedQuizzes.length;

//     return {
//       moduleProgress: (completedModuleCount / totalModules) * 100,
//       quizProgress: (completedQuizCount / totalQuizzes) * 100,
//     };
//   };

//   const { moduleProgress, quizProgress } = calculateProgress();

//   return (
//     <div className="course-detail">
//       <h1>Course Details</h1>

//       <label htmlFor="course-selector">Select a Course:</label>
//       <select
//         id="course-selector"
//         value={selectedCourseId}
//         onChange={handleCourseChange}
//       >
//         {courses.map((c) => (
//           <option key={c.id} value={c.id}>
//             {c.title}
//           </option>
//         ))}
//       </select>

//       <h1>{course.title}</h1>
//       <p>{course.overview}</p>

//       {/* Instructor Details */}
//       <div className="instructor-details">
//         <h3>Instructor: {course.instructor.name}</h3>
//         <p>{course.instructor.bio}</p>
//         <p>Contact: <a href={`mailto:${course.instructor.contact}`}>{course.instructor.contact}</a></p>
//       </div>

//       <h2>Modules</h2>
//       <ul>
//         {course.modules.map((module, index) => (
//           <li key={index} className="module-item">
//             <button
//               className="module-toggle"
//               onClick={() => toggleModule(index)}
//             >
//               {module.title}
//             </button>

//             {openModuleIndex === index && (
//               <div className="module-content">
//                 <ul>
//                   {module.courses.map((courseName, courseIndex) => (
//                     <li key={courseIndex}>{courseName}</li>
//                   ))}
//                 </ul>

//                 {/* Mark module as completed */}
//                 <button
//                   className="complete-module"
//                   onClick={() => handleModuleCompletion(index)}
//                 >
//                   Mark Module as Completed
//                 </button>

//                 {/* Quiz button */}
//                 <button
//                   className="quiz-toggle"
//                   onClick={() => handleQuizClick(course.id, index)}
//                 >
//                   Take Quiz
//                 </button>

//                 {/* Show quiz progress status */}
//                 {completedQuizzes.includes(`${course.id}-${index}`) && (
//                   <span className="completed-status">Quiz Completed!</span>
//                 )}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <h2>Learning Outcomes</h2>
//       <ul>
//         {course.learningOutcomes.map((outcome, index) => (
//           <li key={index}>{outcome}</li>
//         ))}
//       </ul>

//       <h2>Progress Tracker</h2>
//       <div>
//         <h3>Modules Progress: {moduleProgress}%</h3>
//         <div className="progress-bar">
//           <div
//             className="progress-bar-fill"
//             style={{ width: `${moduleProgress}%` }}
//           />
//         </div>
//         <h3>Quizzes Progress: {quizProgress}%</h3>
//         <div className="progress-bar">
//           <div
//             className="progress-bar-fill"
//             style={{ width: `${quizProgress}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;
const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedCourseId, setSelectedCourseId] = useState(parseInt(courseId));
  const [openModuleIndex, setOpenModuleIndex] = useState(null);
  
  // Track completed modules and quizzes
  const [completedModules, setCompletedModules] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const course = courses.find((c) => c.id === selectedCourseId);

  if (!course) {
    return <h2>Course not found!</h2>;
  }

  const toggleModule = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const handleCourseChange = (event) => {
    const newCourseId = parseInt(event.target.value);
    setSelectedCourseId(newCourseId);
    navigate(`/course/${newCourseId}`);
  };

  const handleQuizClick = (courseId, moduleIndex) => {
    setCompletedQuizzes([...completedQuizzes, `${courseId}-${moduleIndex}`]);
    navigate(`/quiz/${courseId}/${moduleIndex}`);
  };

  const handleModuleCompletion = (moduleIndex) => {
    setCompletedModules([...completedModules, moduleIndex]);
  };

  const calculateProgress = () => {
    const totalModules = course.modules.length;
    const completedModuleCount = completedModules.length;
    const totalQuizzes = course.modules.reduce((acc, module) => acc + 1, 0);
    const completedQuizCount = completedQuizzes.length;

    return {
      moduleProgress: (completedModuleCount / totalModules) * 100,
      quizProgress: (completedQuizCount / totalQuizzes) * 100,
    };
  };

  const { moduleProgress, quizProgress } = calculateProgress();

  return (
    <div className="course-detail">
      <h1>Course Details</h1>

      <label htmlFor="course-selector">Select a Course:</label>
      <select
        id="course-selector"
        value={selectedCourseId}
        onChange={handleCourseChange}
      >
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>

      <h1>{course.title}</h1>
      <p>{course.overview}</p>

      <div className="instructor-details">
        <h3>Instructor: {course.instructor.name}</h3>
        <p>{course.instructor.bio}</p>
        <p>Contact: <a href={`mailto:${course.instructor.email}`}>{course.instructor.email}</a></p>
      </div>

      <h2>Modules</h2>
      <ul>
        {course.modules.map((module, index) => (
          <li key={index} className="module-item">
            <button
              className="module-toggle"
              onClick={() => toggleModule(index)}
            >
              {module.title}
            </button>

            {openModuleIndex === index && (
              <div className="module-content">
                <h3>Learning Points:</h3>
                <ul>
                  {module.courses.map((courseName, courseIndex) => (
                    <li key={courseIndex}>{courseName}</li>
                  ))}
                </ul>

                <p>
                  Completion Status:{" "}
                  {completedModules.includes(index) ? (
                    <span className="completed-status">Completed</span>
                  ) : (
                    <span className="not-completed-status">Not Completed</span>
                  )}
                </p>

                <button
                  className="complete-module"
                  onClick={() => handleModuleCompletion(index)}
                >
                  Mark Module as Completed
                </button>

                <button
                  className="quiz-toggle"
                  onClick={() => handleQuizClick(course.id, index)}
                >
                  Take Quiz
                </button>

                {completedQuizzes.includes(`${course.id}-${index}`) && (
                  <span className="completed-status">Quiz Completed!</span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2>Learning Outcomes</h2>
      <ul>
        {course.learningOutcomes.map((outcome, index) => (
          <li key={index}>{outcome}</li>
        ))}
      </ul>

      <h2>Progress Tracker</h2>
      <div>
        <h3>Modules Progress: {moduleProgress}%</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${moduleProgress}%` }}
          />
        </div>
        <h3>Quizzes Progress: {quizProgress}%</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${quizProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;