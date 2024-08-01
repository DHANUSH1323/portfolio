import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Dhanush Babu Ramadoss</h1>
            <p className={styles.description}>
                As a dedicated Full Stack Developer with hands-on experience in both frontend and backend technologies, I specialize in creating seamless and dynamic web applications. With a solid foundation in languages like C, C++, and Python, and practical knowledge in Node.js and MySQL, I bring a comprehensive understanding of both client-side and server-side development. My recent projects, including developing a Bill_buddy application and an online bookstore, showcase my ability to deliver robust and user-centric solutions. Passionate about clean code and efficient problem-solving, I am committed to building innovative solutions that drive success.
            </p>
            <a href="mailto:dhanushramrt@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
};

