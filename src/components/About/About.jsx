import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                {/* <img src={getImageUrl("about/aboutImage.png")} alt="sitting with laptop" className={styles.aboutImage}/> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src= {getImageUrl("about/cursorIcon.png")} alt ="cursor icon" className={styles.aboutImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                            Translate design concepts into responsive and interactive web pages using React, HTML, and CSS.
                            Ensure seamless and visually appealing user interfaces that perform well across various devices.
                            Apply best practices in styling and performance optimization to enhance functionality and load times.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src= {getImageUrl("about/serverIcon.png")} alt ="server icon" className={styles.aboutImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                            Develop and maintain server-side applications using Node.js, ensuring robust API integrations and data management.
                            Design and manage MySQL databases for efficient data storage, retrieval, and manipulation.
                            Implement scalable backend solutions to handle increasing application demands and ensure high performance.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src= {getImageUrl("about/cursorIcon.png")} alt ="UI icon" className={styles.aboutImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                            Create visually compelling and user-friendly interfaces that align with brand guidelines.
                            Design intuitive and accessible user interfaces that enhance the overall user experience.
                            Ensure design consistency across different platforms and devices to provide a cohesive user experience.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};