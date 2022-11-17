import Intro from "./Components/Intro/Intro";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import ProjectList from "./Components/ProjectList/ProjectList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
const App = () => {
  return <div>
  
    <Intro />
    <About/>
    <ProjectList/>
    <Contact/>
      
    
    </div>;
};

export default App;