import "./About.css"
import mypic from "../../Images/mypic.png"
import mypic2 from "../../Images/mypic2.png"
const About = () => {
  return (
    <div id="about" className="about">
      <div className="aboutLeft">
        <div className="acard BG" ></div>
        <div className="acard">
          <img src={mypic2} className="aboutImg" alt="" />
        </div>
      </div>
      <div className="aboutRight"> <h1 className="aboutTitle">About Me</h1>
        <p className="aboutsubTitile">
          It is a long established fact that a reader will be distracted by the
          readable content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perferendis vitae aspernatur eligendi illo rerum consequuntur temporibus cupiditate, odit minus magni nisi.
        </p>
        <h2
        >My Skills</h2>
        <div className="myskills">
          <div className="skills">
            <div className="skill">Html</div>
            <div className="skill">CSS</div>
            <div className="skill">Javascript</div>
            <div className="skill">ReactJs</div>
            <div className="skill">Github</div>
            <div className="skill">Bootstrap</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About