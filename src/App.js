import logo from "./logo.svg"
import "./App.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Nav.Link>
          <a
            href="https://www.linkedin.com/in/david-gonzalez2/"
            className="links resume"
          >
            <span>Resume</span>
          </a>
        </Nav.Link>
      </Navbar>

      <br />
      <div className="background">
        {/* <p>Front End Web Developer</p> */}
        <h3>David Gonzalez</h3>
        <p className="background">
          Software Engineer looking to pursue a career in tech and show my
          skills to the right company.
        </p>
        <img src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg" />
      </div>
      <div className="App-header">
        <FontAwesomeIcon icon={faSquareGithub} className="text-white icons" />
        <FontAwesomeIcon icon={faLinkedin} className="text-white icons" />
      </div>
    </>
  )
}

export default App
