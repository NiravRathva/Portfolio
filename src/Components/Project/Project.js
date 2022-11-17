import "./Project.css"

const Project = ({ name, img, desc, link }) => {
  return (
    <div  className="project" >


      <img className="projectImg" src={img} alt="" />
      <div className="cardBody">
        <h1  className="projectTitle">{name}</h1>
        <p className="projectDesc">{desc.slice(0,95)}...</p>
        <a className="projectLink" href={link} ><button className="btn">View Code</button></a>
      </div>
    </div>


  )
}

export default Project