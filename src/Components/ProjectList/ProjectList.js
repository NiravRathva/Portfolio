import "./ProjectList.css"
import { projects } from "../../Data"
import Project from "../Project/Project"
const ProjectList = () => {
    return (<>
        <div id="project" className="projectList">
            <div className="projectListTexts">
                <h1 className="projectListTitle">Some of my recent Projects</h1>
                
            </div>
            <div className="projectsList">
                {projects.map((project) => (
                    <Project key={project.id} img={project.img} name={project.name} desc={project.description} link={project.link} />
                ))}
            </div>


        </div>
    </>
    )
}

export default ProjectList