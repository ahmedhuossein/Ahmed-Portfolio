import React from 'react';
import './Projects.css';
const Projects = ({projectsRef}) => {
    return (
        <div ref={projectsRef}>
            <h3 className="Projects">Projects</h3>

            <ul className="Projects-list">
                <li>
                    <p>Project 1: Workflow Management | Python, Django, React, JavaScript, HTML, CSS <br></br><br></br>
                        Collaborated in a team of two to create a Workflow Management web application, allowing users to add
                        tasks with dates and set priorities. <br></br><br></br>
                        Designed and implemented a feature-rich interface allowing users to add tasks, set priorities, and specify
                        deadlines. Tasks are categorized by urgency levels and displayed accordingly.<br></br><br></br>
                        Built an advanced task assignment feature where users can assign tasks to others, invite collaborators,
                        and manage shared responsibilities through an email invitation system.
                    </p>
                </li>

                <li>
                    <p>RV Jack Pad Predictor | Python, Scikit-learn <br></br><br></br>
                        Developed a predictive machine learning model using Python and Scikit-learn to determine the optimal
                        jack pad for recreational vehicles (RVs), achieving an accuracy of 97%.  <br></br><br></br>
                        Implemented a Random Forest algorithm to model complex interactions within the data, incorporating
                        inputs such as model manufacturer, model name, and trim to enhance prediction accuracy.  <br></br><br></br>
                        Executed data cleaning procedures by eliminating non-essential columns, converting data types for
                        consistency, and applying one-hot encoding to categorical variables.</p>


                </li>
            </ul>

        </div>
    );



}
export default Projects;