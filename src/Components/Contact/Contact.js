import "./Contact.css"
import Phone from "../../Images/phone.png";
import Email from "../../Images/mail.png";
import location from "../../Images/location.png";
import { useRef ,useState} from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {

  const formRef= useRef()
  const [done, setDone] = useState(false)
  const handleSubmit=(e)=> {
    e.preventDefault();

    // emailjs.send('service_87fxr3g','template_heuu2ai', formRef.current, 'tkFg5_3mqbZsKYILQ')
    emailjs.sendForm('service_rlolui1', 'template_heuu2ai', formRef.current, 'tkFg5_3mqbZsKYILQ')
    .then((result) => {
        console.log(result.text);setDone(true)
    }, (error) => {
        console.log(error.text);
    });
   }
  return (
    <div id="contact" className="contact">

      <div id="bg"></div>
      <h1 className="MainTitle">Contact Me</h1>
      <div className="wrapper">
        <div className="left">
          <h1 className="title">Contact info</h1>
          <div className="info">
            <div className="infoItem">
              <img className="icon" src={Phone} alt="" />
              +918469120727</div>
            <div className="infoItem">
              <img className="icon" src={Email} alt="" />
              niravrathwa56@gmail.com</div>
            <div className="infoItem"> <img className="icon" src={location} alt="" />mahadev nagar, kawant,chhotaudepur pin:391170</div>
          </div>
        </div>
        <div className="right">
          <p className="desc"> <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email"/>
            <textarea name="message" cols="10" placeholder="Enter your message" rows="5"></textarea>
            <button>Submit</button> {done && "Thank you...your message is received"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact