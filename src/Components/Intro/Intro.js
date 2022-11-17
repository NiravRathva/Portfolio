import "./Intro.css"
import {Link} from "react-router-dom"
const Intro = () => {
  return (

    <div className="bg">
      <div className="container">


        <div className="topnav">
          <div id="nr">NR</div>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="/">Home</a>
        </div>
      </div>
      <div className="text">
       
        <h1 className="textH1">I'm Nirav Rathwa</h1>
        <h1 className="textH1">And I'm  a Web Developer</h1>
        <button className="introBtn">Hire me</button>
      </div>
    </div>
  )
}

export default Intro