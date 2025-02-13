import React from "react";
import styles from "./Skills.module.css";

const skillsData = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Angular", icon: "🅰️" },
  { name: "Node.js", icon: "🌿" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "HTML", icon: "🔤" },
  { name: "CSS", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "SQL", icon: "🗄️" },
  { name: "Git", icon: "🔗" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
];

export const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>Skills & Technologies</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
