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
import weatherImage from "../src/images/weather.png"
import foodie from "../src/images/foodie.jpeg"
import profile from "../src/images/PROFILE IMAGE.jpg"
function App() {
  return (
    <>
      <div className="container g-0 min-vh-100  ">
        <Navbar className="g-0" style={{ backgroundColor: "#282c34" }}>
          <Nav>
            <Nav.Link
              className="links"
              href="https://www.linkedin.com/in/david-gonzalez2/"
            >
              <span>
                LinkedIn <FontAwesomeIcon icon={faLinkedin} className="fs-5" />
              </span>

              {/* href="https://www.linkedin.com/in/david-gonzalez2/"
              className="links " */}
              {/* <span>David Gonzalez</span>
              <span>Resume</span> */}
            </Nav.Link>
            <Nav.Link
              className="links"
              href="https://github.com/David-Gonzalez11"
            >
              <span>
                GitHub{" "}
                <FontAwesomeIcon icon={faSquareGithub} className="fs-5" />
              </span>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="row">
          {/* <p>Front End Web Developer</p> */}
          <div className="column">
            <p className="experience-paragraph">
              A software developer with experience in building Responsive and
              Scalable Web apps. I am well-knowledged in UI/UX principles and
              practices.
            </p>
            <div className="column">
              <img
                src={profile}
                style={{
                  width: "300px",
                  borderRadius: "50px",
                  marginLeft: "30px",
                }}
                alt="placeholder"
              />
            </div>
          </div>
          <div className="column">
            <h3>Skills</h3>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="">
              <p className="stacks">HTML</p>
            </div>
            <div className="">
              <p className="stacks">CSS</p>
            </div>
            <div className="">
              <p className="stacks">JAVASCRIPT</p>
            </div>
            <div className="">
              <p className="stacks">REACT</p>
            </div>
            <div className="">
              <p className="stacks">GITHUB</p>
            </div>
            <div className="">
              <p className="stacks">NODE JS</p>
            </div>
            <div className="">
              <p className="stacks">PostgreSQL</p>
            </div>

            {/* <img src="https://user-images.githubusercontent.com/24907191/185052395-797da3f8-04c3-41d3-a146-1148676762e7.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052405-6e25fa88-0581-469c-a8f5-5739fb884082.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052418-1e8eb9e2-a031-400f-8dc6-b1c1ea0ca447.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052427-4505fc3b-8084-4cb9-99fd-bd62deaefa1b.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052440-21b4e60b-d506-4f5e-9942-c6399c16b97d.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052468-8c3b2b72-d934-49e5-8865-7f7db94a95a0.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052483-e432a0d3-c6cd-46d3-bfc0-2108c4395a18.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052494-40767fcc-c190-4c15-ad82-48b5b73a46b5.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052506-d96c3912-d85c-4ed2-903f-1fbcac8d4d71.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052516-1b2c547e-28e6-4715-b4fc-f0d1425b8b8f.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052531-a1f2f813-5af3-4946-b427-1b1efb682753.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052543-8c722ecf-afeb-4018-bec1-2c67bfd80b96.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052552-d2c25f83-b155-4844-9517-c82070580913.png" />
            <img src="https://user-images.githubusercontent.com/24907191/185052559-38474ccf-8546-4b20-82d8-12ed3dc98808.png" />
            <img src="https://user-images.githubusercontent.com/24907191/188064113-4b5245ea-38a6-4429-a9e1-1151bf6ec1d1.png" /> */}
          </div>
          <div className="column">
            <h2>Work</h2>
          </div>

          <div className="d-flex justify-content-center">
            {/* This is for the weather application >> */}

            <Nav.Link
              className="projects"
              target="_blank"
              href="https://weather-checke.netlify.app/"
              rel="noreferrer"
            >
              <img className="" alt="weather-project " src={weatherImage} />
            </Nav.Link>
            {/* This is for the weather application ^*/}
              <Nav.Link
                className="projects"
                target="_blank"
                href="http://recipe-finder-6jxvycbi5-david-gonzalez11.vercel.app"
                rel="noreferrer"
              >
                <img alt="foodie" src={foodie} className="" />
              </Nav.Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
