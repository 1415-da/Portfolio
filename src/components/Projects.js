import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Weather Data Analysis",
    date: "July 2025",
    image: require("../assets/weather.png"),
    description:
      "This Power BI Weather Data Analysis Dashboard is an interactive project where I extracted both current and forecasted weather data using a Weather API to visualize key metrics like temperature, humidity, rainfall, and wind speed. It was created as part of a task by Pianalytix Pvt. Ltd. to showcase my skills in real-time data integration, transformation, and visual storytelling. The dashboard features dynamic KPIs, trend charts, and filters for location and time, enabling users to explore meaningful insights and compare actual vs predicted weather patterns in a clean and intuitive interface.",
    technologies: ["Weather API", "Power BI", "DAX"],
    github: "https://github.com/1415-da/Weather-Data-Analysis",
    demo: "#",
    blog: "#",
  },
  {
    title: "Credit Scoring Web App",
    date: "June 2025",
    image: require("../assets/creditScore.png"),
    description:
      "Built a professional banking application with Ml-powered credit scoring using React.js and Python Flask. The app features an interactive credit score gauge, analysis of 27 financial metrics, real-time risk assessment, and a sleek dark theme UI. Powered by machine learning, it showcases full-stack development, fintech-focused UX/UI design, and seamless integration of frontend animations with backend intelligence. Users receive dynamic risk insights based on financial behavior, enabling smarter lending decisions. This project demonstrates advanced skills in data visualization, and responsive fintech application design.",
    technologies: ["Flask", "React.js", "Scikit-learn", "Pandas","NumPy","Joblib", "Jupyter Notebook"],
    github: "https://github.com/1415-da/Credit_Scoring",
    demo: "https://credit-scoring-6ydz.vercel.app/",
    blog: "#",
  },
  {
    title: "Celebrity Info Web App",
    date: "May 2025",
    image: require("../assets/CelebrityInfo.png"),
    description:
      "This Streamlit application offers comprehensive celebrity information powered by Groq's LLaMA3 70B model through LangChain integration. Users can search for any celebrity and receive AI-generated insights including a detailed biography, date of birth, significant historical events around their birth, notable awards and recognitions, estimated net worth, and social media presence. The app features a clean and interactive UI with expandable sections for organized content display. It employs multi-step sequential prompting using LangChain chains.",
    technologies: ["Python 3.8+", "Streamlit", "GROQ API Key","LangChain"],
    github: "https://github.com/1415-da/Celebrity_Search",
    demo: "https://celebritysearch-co4ehtucxzb7aucw2gz8x5.streamlit.app/",
    blog: "#",
  },
  {
    title: "LinkedIn Post Generator",
    date: "May 2025",
    image: require("../assets/LinkedinPost.png"),
    description:
      "This AI-powered application is designed to help users craft authentic and high-performing LinkedIn posts in seconds. Built using Llama 3.2, Streamlit, and insights drawn from top-performing LinkedIn content creators, the app offers a seamless experience for generating impactful posts. Users can select from trending topics, choose their preferred post length—short, medium, or long—and even write in English or Hinglish. Leveraging few-shot learning with carefully selected viral examples, the app ensures the generated content reflects the right tone, structure.",
    technologies: ["Python", "Streamlit", "Llama 3.2"],
    github: "https://github.com/1415-da/Linkedin_Post_Generator",
    demo: "#",
    blog: "#",
  },
  {
    title: "Personalized Fitness & Nutrition Recommender – ML Web App",
    date: "Apr 2025",
    image: require("../assets/FitnessWebapp.png"),
    description:
      "Built an end-to-end web app that provides personalized workout plans, nutrition tips, and progress tracking using a trained ML model. Developed the backend with Flask to process user inputs and generate dynamic fitness recommendations using Scikit-learn. Crafted a dynamic and responsive front-end using Tailwind CSS and Jinja2 templates, seamlessly integrating progress charts for clear and engaging user insights.",
    technologies: ["Python", "Flask", "Tailwind CSS", "Scikit-learn"],
    github: "https://github.com/1415-da/Fitness-WebApp",
    demo: "https://fitness-web-app-bag1.vercel.app/",
    blog: "#",
  },
  {
    title: "Loan Approval Prediction – ML Web App",
    date: "Mar 2025",
    image: require("../assets/LoanApproval.png"),
    description:
      "Built a loan approval prediction system by cleaning and preprocessing data with Pandas, training a classification model using Scikit-learn, and optimizing it with performance metrics and hyperparameter tuning. Developed and deployed a lightweight Flask web app with an intuitive HTML/CSS front-end, enabling real-time predictions based on user input with 80% accuracy. Integrated the complete pipeline from data processing to model inference, demonstrating the ability to merge data science with web development effectively.",
    technologies: ["Python", "Scikit-learn", "Flask", "HTML/CSS"],
    github: "https://github.com/1415-da/Loan_Approval_Prediction",
    demo: "#",
    blog: "#",
  },
];

const Projects = ({ hideDescriptionOnMobile = false }) => {
  return (
    <div className="space-y-8">
      {/* Projects Grid - Single column on mobile, multi-column on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group/3d-border">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            {...project} 
            hideDescriptionOnMobile={hideDescriptionOnMobile}
          />
        ))}
      </div>

      {/* Project Stats */}
      <div className="bg-[#222222] rounded-xl p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-2xl font-bold text-white">Project Statistics</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD600] mb-2">6</div>
            <div className="text-[#B0B0B0] text-sm">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD600] mb-2">4</div>
            <div className="text-[#B0B0B0] text-sm">Live Demos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD600] mb-2">15+</div>
            <div className="text-[#B0B0B0] text-sm">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD600] mb-2">100%</div>
            <div className="text-[#B0B0B0] text-sm">Open Source</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 
