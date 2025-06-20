import React from "react";

const skills = [
  { name: "Python", level: 90, group: "Languages & Databases" },
  { name: "MySQL", level: 80, group: "Languages & Databases" },
  { name: "C", level: 75, group: "Languages & Databases" },
  { name: "C++", level: 75, group: "Languages & Databases" },
  { name: "HTML", level: 80, group: "Languages & Databases" },
  { name: "CSS", level: 80, group: "Languages & Databases" },
  { name: "JavaScript", level: 80, group: "Languages & Databases" },
  { name: "Pandas", level: 85, group: "Visualization Tools" },
  { name: "NumPy", level: 85, group: "Visualization Tools" },
  { name: "Matplotlib", level: 80, group: "Visualization Tools" },
  { name: "Seaborn", level: 80, group: "Visualization Tools" },
  { name: "Tableau", level: 90, group: "Visualization Tools" },
  { name: "Power BI", level: 90, group: "Visualization Tools" },
  { name: "Excel", level: 95, group: "Visualization Tools" },
  { name: "Transformers", level: 65, group: "AI" },
  { name: "Hugging Face", level: 70, group: "AI" },
  { name: "LangChain", level: 75, group: "AI" },
  { name: "NLTK", level: 65, group: "AI" },
  { name: "RAG System", level: 60, group: "AI" },
  { name: "React.js", level: 70, group: "Other Skills" },
  { name: "Python Flask", level: 75, group: "Other Skills" },
  { name: "Machine Learning", level: 80, group: "Other Skills" },
  { name: "Scikit-learn", level: 80, group: "Other Skills" },
  { name: "Natural Language Processing", level: 70, group: "Other Skills" },
  { name: "Deep Learning", level: 65, group: "Other Skills" },
  { name: "Web Scrapping", level: 75, group: "Other Skills" },
  { name: "Data Analysis", level: 80, group: "Other Skills" },
  { name: "Data Visualization", level: 80, group: "Other Skills" },
  
];

const grouped = skills.reduce((acc, skill) => {
  acc[skill.group] = acc[skill.group] || [];
  acc[skill.group].push(skill);
  return acc;
}, {});

export default function Skills() {
  return (
    <section id="skills" className="group w-full min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h2 className="section-title group-hover:animate-title text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 gap-8 pb-4 w-full md:flex md:flex-row md:gap-8 md:justify-center md:items-start md:overflow-x-auto md:pb-0">
          {Object.keys(grouped).map((group, groupIdx) => (
            <div key={group} className="mb-2 w-full md:w-80 bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-700 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:border-blue-400 animate-float text-center" style={{ animationDelay: `${(groupIdx % 4) * 0.15}s` }}>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{group}</h3>
              <div className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 px-1">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                  {grouped[group].map((skill, idx) => (
                    <div key={skill.name} className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-200 w-1/2 text-left">{skill.name}</span>
                        <span className="text-sm text-gray-300 w-1/2 text-right">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3" aria-label={`Proficiency in ${skill.name}: ${skill.level}%`}>
                        <div
                          className="bg-blue-400 h-3 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
