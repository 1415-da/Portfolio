import React from "react";

const skills = [
  { name: "Python", group: "Languages & Databases" },
  { name: "MySQL", group: "Languages & Databases" },
  { name: "C", group: "Languages & Databases" },
  { name: "C++", group: "Languages & Databases" },
  { name: "HTML", group: "Languages & Databases" },
  { name: "CSS", group: "Languages & Databases" },
  { name: "JavaScript", group: "Languages & Databases" },
  { name: "Pandas", group: "Visualization Tools" },
  { name: "NumPy", group: "Visualization Tools" },
  { name: "Matplotlib", group: "Visualization Tools" },
  { name: "Seaborn", group: "Visualization Tools" },
  { name: "Tableau", group: "Visualization Tools" },
  { name: "Power BI", group: "Visualization Tools" },
  { name: "Excel", group: "Visualization Tools" },
  { name: "Transformers", group: "AI" },
  { name: "Hugging Face", group: "AI" },
  { name: "LangChain", group: "AI" },
  { name: "NLTK", group: "AI" },
  { name: "RAG System", group: "AI" },
  { name: "React.js", group: "Other Skills" },
  { name: "Python Flask", group: "Other Skills" },
  { name: "Machine Learning", group: "Other Skills" },
  { name: "Scikit-learn", group: "Other Skills" },
  { name: "Natural Language Processing", group: "Other Skills" },
  { name: "Deep Learning", group: "Other Skills" },
  { name: "Web Scrapping", group: "Other Skills" },
  { name: "Data Analysis", group: "Other Skills" },
  { name: "Data Visualization", group: "Other Skills" },
  
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
                <div className="flex flex-wrap justify-center gap-2">
                  {grouped[group].map((skill) => (
                    <div key={skill.name} className="bg-gray-700 text-gray-200 rounded-full px-4 py-1 text-sm font-medium">
                      {skill.name}
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
