import React, { useEffect } from "react";
import useReveal from "../hooks/useReveal";

export default function Education() {
    // useReveal?.();
    useEffect(() => {
        const applyLock = () => {
            if (window.location.hash === "#education") {
                document.body.setAttribute("data-lock", "education");
            } else {
                if (document.body.getAttribute("data-lock") === "education") {
                    document.body.removeAttribute("data-lock");
                }
            }
        };

        applyLock();
        window.addEventListener("hashchange", applyLock);
        return () => {
            window.removeEventListener("hashchange", applyLock);
            if (document.body.getAttribute("data-lock") === "education") {
                document.body.removeAttribute("data-lock");
            }
        };
    }, []);

    return (
        <section id="education" className="section" aria-labelledby="education-title" tabIndex="-1">
            <div className="container">
                <div className="edu-panel reveal">
                    <header className="edu-head">
                        <span className="edu-eyebrow">Education</span>
                        <h2 id="education-title" className="edu-title">My Education</h2>
                    </header>

                    <div className="edu-grid">
                        {/* Left column — Education */}
                        <div className="edu-col">
                            <h3 className="edu-col__title">Education</h3>
                            <ol className="edu-tl" aria-label="Education timeline">
                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Masters in Computer Science and Engineering</h4>
                                            <span className="pill">CGPA: 3.75</span>
                                        </div>
                                        <div className="edu-item__period">2023 – 2024</div>
                                        <div className="edu-item__school">University at Buffalo – SUNY</div>
                                    </div>
                                </li>

                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Bachelors in Computer Science</h4>
                                            <span className="pill">GPA: 8.11/10</span>
                                        </div>
                                        <div className="edu-item__period">2016 – 2020</div>
                                        <div className="edu-item__school">R.M.D Engineering College (Anna University)</div>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        {/* Right column — Experience (optional; matches your screenshot) */}
                        {/* Right column — Experience */}
                        <div className="edu-col">
                            <h3 className="edu-col__title">Experience</h3>
                            <ol className="edu-tl" aria-label="Experience timeline">
                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Lead Software Engineer</h4>
                                            <span className="pill">August 2024 – Present</span>
                                        </div>
                                        <div className="edu-item__school">Redprint Inc</div>
                                        <ul className="edu-bullets">
                                            <li>Created, executed, and launched microservices that drive NFC-capable gym equipment monitoring, instant workout tracking, and tailored fitness suggestions serving over 100K active users across frontends in React Native, Swift, and React (TypeScript, JavaScript).</li>
                                            <li>Created backend solutions using Node.js, Express, PostgreSQL, SQL Server, and MongoDB, implementing containerized applications on AWS Lambda and Google Cloud Functions, linked with AWS S3 for secure file storage and Firebase Auth for user authentication.</li>
                                            <li>Designed event-driven microservice interactions with message queues and Firebase Cloud Functions for high-volume workout updates, enhancing data synchronization reliability by 25% in peak periods.</li>
                                            <li>Developed scalable API agreements and modular data structures facilitating dynamic workout logic and analytics with sub-200ms response times across different platforms.</li>
                                            <li>Directed CI/CD automation through GitHub Actions and Xcode Cloud, reducing deployment cycles by 40%, incorporating regression test coverage, and facilitating zero-downtime releases.</li>
                                            <li>Worked collaboratively with QA, design, and product groups to deliver features every two weeks, achieving over 95% crash-free sessions and notable enhancements in user experience.</li>
                                            <li>Promoted best practices for observability and debugging by implementing distributed tracing, structured logging, and real-time analytics to track system performance and user interactions after release.</li>
                                        </ul>
                                    </div>
                                </li>

                                {/* NEW #1 */}
                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Software Engineer – Tata Consultancy Services</h4>
                                            <span className="pill">Dec 2021 – Jul 2023</span>
                                        </div>
                                        <div className="edu-item__school">Chennai, India</div>
                                        <ul className="edu-bullets">
                                            <li>Created and built modular enterprise-level tools utilizing Java (Spring Boot), .NET Core (C#), Angular, and SQL Server, enhancing operational efficiency by 30% within finance and supply chain teams for ALDI's ERP modernization projects.</li>
                                            <li>Developed microservices and RESTful APIs with Spring Boot and ASP.NET Web API, incorporating token-based authentication (JWT/OAuth2), domain-driven design, and layered architecture to facilitate cross-platform ERP operations.</li>
                                            <li>Upgraded outdated monoliths by transitioning services to Java 17 and .NET 6 with asynchronous I/O and non-blocking streams, achieving a more than 40% reduction in API response times and facilitating scalable, cloud-native implementations on AWS ECS and Azure App Services.</li>
                                            <li>Implemented strong testing frameworks such as JUnit, Mockito, xUnit, and Moq, ensuring over 85% coverage and enhancing release assurance in CI/CD pipelines.</li>
                                            <li>Enhanced database efficiency by developing intricate stored procedures and SQL indexing methods, cutting reporting query expenses by 50% for large customer and order datasets.</li>
                                            <li>Implemented functionalities in Agile sprints with Azure DevOps and Jira, engaging in code reviews, release strategy sessions, and stakeholder demonstrations for significant modules within Java and C# frameworks.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Performace Test Engineer – Cognizant Technology Solutions Solutions</h4>
                                            <span className="pill">Oct 2020 – Aug 2021</span>
                                        </div>
                                        <div className="edu-item__school">Chennai, India</div>
                                        <ul className="edu-bullets">
                                            <li>Conducted extensive performance and load testing for high-throughput hospital applications utilizing JMeter, LoadRunner, and tailored Java-, C#-, and Python-based test harnesses featuring intricate SQL queries, guaranteeing system reliability during maximum patient data volumes.</li>
                                            <li>Utilized AppDynamics and Dynatrace APM to oversee Java and .NET (C#) applications, pinpoint bottlenecks, and execute optimizations that lowered SLA violations by 35%.</li>
                                            <li>Created automation scripts in Java, C#, and Python to emulate multi-threaded traffic, carry out log parsing, and automate performance testing workflows — decreasing manual testing effort by 30% and speeding up test cycles.</li>
                                            <li>Collaborated with backend engineering teams to analyze and optimize Java Spring Boot APIs, ASP.NET Core APIs, and Python-based microservices, suggesting CPU/memory modifications that enhanced response times and resource efficiency.</li>
                                            <li>Provided production performance baselines and benchmarking reports prior to significant releases, confirming scalability in AWS and Azure settings.</li>
                                            <li>Created comprehensive test strategies, execution plans, and knowledge documents to improve the team’s QA performance processes, ensuring adherence to best practices within Java, .NET, and Python environments.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="edu-item">
                                    <span className="edu-tl__dot" />
                                    <div className="edu-item__body">
                                        <div className="edu-item__row">
                                            <h4 className="edu-item__title">Programmer Analyst Intern – Cognizant Technology Solutions Solutions</h4>
                                            <span className="pill">Jan 2020 – May 2020</span>
                                        </div>
                                        <div className="edu-item__school">Chennai, India</div>
                                        <ul className="edu-bullets">
                                            <li>Gained a thorough understanding of Java programming, including both basic and advanced concepts such as multithreading and exception handling.</li>
                                            <li>Acquired knowledge of JavaScript to improve the interactivity of web applications by using frameworks to create dynamic user interfaces.</li>
                                            <li>Obtained practical experience using Spring Boot to develop enterprise-level apps, including developing RESTful APIs and putting security measures in place.</li>
                                            <li>Worked on real-world projects with cross-functional teams, participating in brainstorming, debugging, and code reviews.</li>
                                            <li>Participated in ongoing education through online courses, workshops, and independent study to broaden knowledge of Java technology and keep current with market developments.</li>
                                        </ul>
                                    </div>
                                </li>


                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}