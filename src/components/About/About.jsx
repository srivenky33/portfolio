import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Over 4 years of work experience in all phases of the Software Development Life Cycle, including Analysis, Design, Development, Testing, and Implementation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Proficient in Java Full Stack Development, with hands-on experience using Spring Boot, Spring MVC, Spring Security, Spring Boot Actuator, Spring Batch, Spring Cloud, Microservices for building scalable applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Skilled in UI Development using modern frameworks like ReactJS and Angular, combined with HTML5, CSS3, and Bootstrap for responsive designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};