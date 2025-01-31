import React, {useState} from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ()=>{
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am venkat</h1>
            <p className={styles.description}>I'm a Full-stack developer with 4 years of experience in Java, React, AWS. Reach out if you'd like to learn more!</p>
            <a href="mailto:srivenky33@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <div className={styles.imageContainer}>
      {/* Front Image */}
      <img
        src={`/assets/hero/venkat-photo.png`} // Replace with your image
        className={`${styles.heroImg} ${styles.frontImg}`}
        alt="Front Image"
      />
      {/* Back Image */}
      <img
        src={`/assets/hero/heroImage.png`} // Replace with your image
        className={`${styles.heroImg} ${styles.backImg}`}
        alt="Back Image"
      />
    </div>

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
};
