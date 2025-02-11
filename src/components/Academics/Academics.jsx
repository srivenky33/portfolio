import React, { useEffect, useState } from "react";
import styles from "./Academics.module.css"; // Import CSS module
import academicsData from "../../data/academics.json";

export const Academics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(academicsData);
  }, []);

  return (
    <section className={styles.academicsContainer} id="academics">
      <h2 className={styles.academicsTitle}>Academics</h2>
      <div className={styles.academicsContent}>
        <div className={styles.academicsItems}>
          {data.map((edu, index) => (
            <div key={index} className={styles.academicsItem}>
              <p className={styles.academicsPeriod}>{edu.period}</p>
              <h3 className={styles.academicsInstitution}>{edu.institution}</h3>
              <p className={styles.academicsDegree}>{edu.degree}</p>
              <h3 className={styles.academicsInstitution}>Course Work:</h3>
              <p className={styles.academicsSpecialization}>{edu.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
