import React from 'react';
import './About.css';
import ahmedImage from './ahmed.jpg';

const About = () => {
    return (
        <div className="main-container">
            <div className="bio">I am a computer science major, studying at the City College of New York!</div>
           <div className="profileWrap">
            <img src={ahmedImage} className="profile"></img>
            </div>
            <ul>
                <li>
                    <h3>New York City Taxi and Limousine Commission – Data Analyst Intern</h3>
                    <p>
                        Developed complex SQL queries to optimize database performance, reducing data retrieval time by
                        30%. <br /> <br></br>
                        Collaborated with cross-functional teams to align analytical capabilities with business requirements,
                        producing data visualizations that drove key decisions. <br /> <br></br>
                        Utilized SQL Server Management Studio and Power BI to create and customize reports, providing
                        stakeholders with clear, actionable insights.
                    </p>
                </li>
                <li>
                    <h3>Research Foundation of CUNY – Tutor</h3>
                    <p>
                        Supported students in college algebra, precalculus, and the calculus sequence, contributing to their
                        academic success. <br /> <br></br>
                        Conducted surveys and assessed student needs to ensure effective tutor-student matching for
                        personalized support.
                    </p>
                </li>
                <li>
                    <h3>Mathnasium of Bayside – Tutor</h3>
                    <p>
                        Provided tailored support to students aged 4 to 17 across a diverse range of mathematical concepts,
                        diligently tracking their progress and adjusting instructional methods to meet individual learning
                        needs. <br /> <br></br>
                        Maintained an organized record of student progress and performance, contributing to data-driven
                        decision-making for instructional improvements.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default About;
