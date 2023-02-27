import React from "react";
import "./App.css";
import sidepic from "./component/user-interface.gif";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineGithub, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Recharts from "./Recharts";
import Whatido from "./component/Whatido";
import Whatido1 from "./component/whatido1";
import Whatido2 from "./component/whatido2";
import Whatido3 from "./component/Whatido3";
import Whatido4 from "./component/Whatido4";
import Whatido5 from "./component/Whatido5";
import Whatido6 from "./component/Whatido6";
import Whatido7 from "./component/Whatido7";
import Whatido8 from "./component/Whatido8";
import resume from "./MARADANABHARATH.pdf";
import js from "./js.png";
import pb from "./pb.png";
import food from "./food.png";
import elearning from "./e-learning.jpg";
import pythonb from "./basicpython.png";
import dsapython from "./dsapython.png";
import agile from "./agile.png";
import voting from "./voting.jpg";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <div class="container">
        <div className="bubbles">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 28 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 31 }}></span>
          <span style={{ "--i": 17 }}></span>

          <span style={{ "--i": 43 }}></span>
          <span style={{ "--i": 42 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 7 }}></span>

          <span style={{ "--i": 63 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 55 }}></span>
          <span style={{ "--i": 82 }}></span>
          <span style={{ "--i": 71 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 33 }}></span>
          <span style={{ "--i": 29 }}></span>
          <span style={{ "--i": 30 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 27 }}></span>
          <span style={{ "--i": 35 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 39 }}></span>
          <span style={{ "--i": 17 }}></span>
        </div>

        {/* <nav
              class="navbar navbar-expand-lg navbar-dark"
              style={{ background: "#000000" }}
            >
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav> */}
        {/*  nvabar section*/}
        <nav class="navbar navbar-light navbar-fixed-top">
          <div class="container">
            <div class="navbar-header page-scroll">
              <a
                href="#"
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#navHeaderCollapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </a>
              <a
                class="navbar-brand page-scroll"
                href="#page-top"
                style={{ color: "white" }}
              >
                Maradana Bharath
              </a>
            </div>

            <div class="collapse navbar-collapse" id="navHeaderCollapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <a
                    class="page-scroll"
                    href="#about"
                    style={{ color: "white" }}
                  >
                    <p style={{ color: "white" }}>About</p>
                  </a>
                </li>
                <li>
                  <a
                    class="page-scroll"
                    href="#portfolio"
                    style={{ color: "white" }}
                  >
                    <p style={{ color: "white" }}>Projects</p>
                  </a>
                </li>
                <li>
                  <a
                    class="page-scroll"
                    href="#more"
                    style={{ color: "white" }}
                  >
                    <p style={{ color: "white" }}>More</p>
                  </a>
                </li>
                <li>
                  <a
                    class="page-scroll"
                    href="#contact"
                    style={{ color: "white" }}
                  >
                    <p style={{ color: "white" }}>Contact</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ width: "100%" }}>
          <div className="row">
            <div
              className="col-lg-6"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }} className="nameplate">
                {" "}
                <h1 style={{ background: "transparent" }}>
                  Putting My <span className="texthead">IMAGINATIONS</span> on
                  to the screen is the only way I know
                </h1>
                <p style={{ background: "transparent" }}>
                  Yeah This is <span className="texthead">M.Bharath</span>.
                  <br />
                  I'm a <span className="texthead">Web Developer</span> and{" "}
                  <span className="texthead">Competative programmer</span>!!
                </p>
                <div>
                  <a
                    href="https://www.linkedin.com/in/bharath-maradana/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <SlSocialLinkedin />
                  </a>
                  <a
                    href="https://github.com/Bharathmaradana"
                    target="_blank"
                    style={{ textDecoration: "none", marginLeft: "2%" }}
                  >
                    {" "}
                    <AiOutlineGithub />
                  </a>
                  <a
                    href="Tel:+917569967428"
                    style={{ textDecoration: "none", marginLeft: "2%" }}
                  >
                    {" "}
                    <AiOutlinePhone />
                  </a>
                  <a
                    href="mailto:bharathmaradana86@gmail.com"
                    style={{ textDecoration: "none", marginLeft: "2%" }}
                  >
                    {" "}
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={sidepic}
                style={{
                  background: "transparent",
                  height: "550px",
                  width: "650px",
                }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <section className="row">
          <div className="row what_i_1">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "transparent",
              }}
            >
              <h1 style={{ background: "transparent" }}>WHAT I DO</h1>
            </div>
            <p
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "transparent",
              }}
            >
              I am passionate about many fields of Computer Science. I am bit
              partial to some of them. :P
            </p>
            <div className="row what_i">
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido />
              </div>

              <div className="col-lg-4 something">
                <div>
                  <div style={{ background: "transparent" }}></div>
                  <Whatido />
                </div>
              </div>
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido1 />
              </div>
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido2 />
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <center>
            <h1>My Computer science Carrier until Now</h1>
          </center>

          <div class="timeline">
            <div class="timeline_1 left">
              <div class="date">CSE </div>
              <i class="icon fa fa-home"></i>
              <div class="content">
                <h2>Computer Science Engineering</h2>
                <p>
                  Speaking honestly, money drives me more than anything else.
                  Just look at the 10 richest companies in the US, or 10 richest
                  men. Most of them come from technological background.
                </p>
              </div>
            </div>
            <div class="timeline_1 right">
              <div class="date">1ST YEAR</div>
              <i class="icon fa fa-gift"></i>
              <div class="content">
                <h2>Competative Programming</h2>
                <p>
                  I have started my computer carrier with C language after that
                  i just moved to c++ to make coding simple . I was introduced
                  to Competative programming and i have solved about 200-300
                  problems in my first year
                </p>
              </div>
            </div>
            <div class="timeline_1 left">
              <div class="date">2nd Year</div>
              <i class="icon fa fa-user"></i>
              <div class="content">
                <h2>WEB DEVELOPMENT</h2>
                <p>
                  I want to put my thoughts on the screen and i realized this is
                  one of the way to handle by thoughts and i started learning
                  HTML,CSS,JS. I have build several Frontend applications of my
                  thoughts .
                </p>
              </div>
            </div>
            <div class="timeline_1 right">
              <div class="date">3rd Year</div>
              <i class="icon fa fa-running"></i>
              <div class="content">
                <h2>Time Handling</h2>
                <p>
                  I have started to learn how to manage my time regarding
                  programming and Web development.Started building projects on
                  social problems.
                </p>
              </div>
            </div>
            <div class="timeline_1 left">
              <div class="date">Final</div>
              <i class="icon fa fa-cog"></i>
              <div class="content">
                <h2>My Journey , My Dream</h2>
                <p>I always believe Hardwork pays off!!!.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="row">
          <div className="row what_i_1">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "transparent",
              }}
            >
              <h1 style={{ background: "transparent" }}>Experience</h1>
            </div>
            <p
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "transparent",
              }}
            >
              I worked with expert technical team in my internship periods which
              helped me to get Real Tech World Experiance!
            </p>
            <div className="row what_i">
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido3 />
              </div>

              <div className="col-lg-4 something">
                <div>
                  <div style={{ background: "transparent" }}></div>
                  <Whatido3 />
                </div>
              </div>
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido4 />
              </div>
              <div className="col-lg-4" style={{ background: "transparent" }}>
                <Whatido5 />
              </div>
            </div>
          </div>
        </section>
        {/* <section style={{ marginTop: "5%" }}>
          <center>
            <h1>Projects</h1>
          </center>
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-lg">
              <div className="pro_1">
                <h3>Online Voting System</h3>
                <p>
                  Online voting systems protect the integrity of your vote by
                  preventing voters from being able to vote multiple times
                </p>

                <p>
                  TECH STACK : MERN
                  <li>React js</li>
                  <li>Express js + Node js</li>
                  <li>Mongodb</li>
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="pro_1">
                <h3>Online Voting System</h3>
                <p>
                  Online voting systems protect the integrity of your vote by
                  preventing voters from being able to vote multiple times
                </p>

                <p>
                  TECH STACK : MERN
                  <li>React js</li>
                  <li>Express js + Node js</li>
                  <li>Mongodb</li>
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="pro_1">
                <h3>Online Voting System</h3>
                <p>
                  Online voting systems protect the integrity of your vote by
                  preventing voters from being able to vote multiple times
                </p>

                <p>
                  TECH STACK : MERN
                  <li>React js</li>
                  <li>Express js + Node js</li>
                  <li>Mongodb</li>
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section style={{ height: "max-content" }}>
          <div className="container" style={{ height: "max-content" }}>
            <center>
              <h1>PROJECTS</h1>
            </center>
            <div className="row" style={{ height: "max-content" }}>
              <div
                className="col-lg-4"
                style={{
                  marginBottom: "5%",
                  position: "relative",
                  height: "max-content",
                }}
              >
                <img src={voting} style={{ width: "100%" }} />
                <div
                  className="projects_1"
                  style={{ padding: "15px", height: "max-content" }}
                >
                  <h5>
                    Online voting systems protect the integrity of your vote by
                    preventing voters from being able to vote multiple times
                  </h5>
                  <p>
                    TECH STACK:
                    <br />
                    REACT JS
                    <br />
                    EXPRESS JS + NODE JS
                    <br />
                    MONGODB
                  </p>
                  <a href="https://github.com/Bharathmaradana/voting-frontend">
                    {" "}
                    <button>Code</button>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4"
                style={{
                  marginBottom: "5%",
                  position: "relative",
                  height: "max-content",
                }}
              >
                <img
                  src={food}
                  style={{
                    width: "100%",
                    height: "50%",
                    height: "max-content",
                  }}
                />
                <div
                  className="projects_1"
                  style={{ padding: "20px", height: "max-content" }}
                >
                  <h5>
                    Online Your Plate!! This project is about promoting the
                    restaurant and contact free ordering through our website .
                  </h5>
                  <p>
                    TECH STACK:
                    <br />
                    REACT JS
                    <br />
                    EXPRESS JS + NODE JS
                    <br />
                    MONGODB
                  </p>
                  <a href="https://github.com/Bharathmaradana/Tsangpo-Restaurent-project.git">
                    {" "}
                    <button>Code</button>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 "
                style={{
                  marginBottom: "5%",
                  position: "relative",
                }}
              >
                <img
                  src={elearning}
                  style={{
                    width: "100%",
                    height: "50%",
                  }}
                />
                <div
                  className="projects_1"
                  style={{ padding: "20px", height: "max-content" }}
                >
                  <h5>
                    This project is about E-LEARNING platform where every thing
                    is digitalized!!
                  </h5>
                  <p>
                    TECH STACK:
                    <br />
                    REACT JS
                    <br />
                    EXPRESS JS + NODE JS
                    <br />
                    MONGODB
                  </p>
                  <a href="https://github.com/Bharathmaradana/Elearning.git">
                    {" "}
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="resume" class="section-padding section-connector"> */}
        {/* <div class="container">
            <div class="row">
              <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                <div class="setion-title text-center">
                  <h1>Education & Experiance</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci architecto dignissimos saepe iste soluta. Aperiam
                    exercitationem doloribus soluta.
                  </p>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <div class="row gy-5">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="eduexp p-5 pt-0">
                      <h5>Univercity of Boston, Computer Science</h5>
                      <small class="text-brand">2010 - 2016</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                  <div class="col-12" data-aos="fade-up" data-aos-delay="200">
                    <div class="eduexp p-5 pt-0">
                      <h5>Masters in UI Animations</h5>
                      <small class="text-brand">2016 - 2018</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                  <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="eduexp p-5 pt-0 pb-0">
                      <h5>Graduate in Infromation Technologye</h5>
                      <small class="text-brand">2016 - 2018</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-12" data-aos="fade-up" data-aos-delay="400">
                    <div class="eduexp p-5 pt-0">
                      <h5>Front End Developer, Freelance</h5>
                      <small class="text-brand">2010 - 2016</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                  <div class="col-12" data-aos="fade-up" data-aos-delay="500">
                    <div class="eduexp p-5 pt-0">
                      <h5>Website Developer, Google</h5>
                      <small class="text-brand">2016 - 2018</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                  <div class="col-12" data-aos="fade-up" data-aos-delay="600">
                    <div class="eduexp p-5 pt-0 pb-0">
                      <h5>Wireframe Designer, Dribbble</h5>
                      <small class="text-brand">2016 - 2018</small>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente dolorem ducimus minima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="services" id="services">
          <div class="services_1">
            <h2 className="title">My Projects</h2>
            <div className="serv-content">
              <div className="card">
                <div className="card">
                  <i class="fas fa-paint-brush"></i>
                  <div class="card-header text">Tsangpo-Restaurent</div>
                  <p className="card-body">
                    his is project is about promoting the restaurant and contact
                    free ordering through our website . This website contains of
                    online ordering and different designing sections which are
                    unique . It can be scanned through QR CODE
                  </p>
                  <p style={{ color: "#E0791b" }}>TECH STACK: MERN STACK</p>
                  <a
                    href="https://bharathmaradana.github.io/Tsangpo-Restaurent-project/"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Take a Look</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <i class="fas fa-chart-line"></i>
                  <div class="text">E-Learning Platform</div>
                  <p>
                    The complete website gives us about the E-platform uses and
                    also allows us to make or play Educational Videos.
                  </p>
                  <p style={{ color: "#E0791b" }}>TECH STACK: MERN STACK</p>
                  <a
                    href="https://github.com/Bharathmaradana/Elearning"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Take a Look</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <i class="fas fa-code"></i>
                  <div class="text">Save Lactos</div>
                  <p>
                    Our main goal is to save the waste of milk products in the
                    current world so inorder to save them we have created a
                    website where importer and exporter upload and check the
                    details of milk products.Tech used is MERN STACK mainly
                    REACT
                  </p>
                  <p style={{ color: "#E0791b" }}>TECH STACK: MERN STACK</p>
                  <a
                    href="https://github.com/Bharathmaradana/Diary-Farming"
                    target="_blank"
                  >
                    <button className="btn btn-primary">Take a Look</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <div className="footer_2">
        <div className="footer_1" style={{ marginBottom: "5%" }}>
          <center style={{ marginTop: "5%" }}>
            <h3>CERTIFICATES</h3>
          </center>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src={pythonb}
                  alt="First slide"
                  className="car_1 img-fluid"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={dsapython}
                  alt="Second slide"
                  className="car_1 img-fluid"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src={agile}
                  alt="Third slide"
                  className="car_1"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src={pb}
                  alt="Third slide"
                  className="car_1"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src={js}
                  alt="Third slide"
                  className="car_1"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      {/* <footer>
        <div className="footer_1">
          <center>
            <h3>CONTACT ME!!</h3>
            <p>Feel Free to get in touch. Cheers!</p>
          </center>
          <div className="footer_2">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </footer> */}

      <section
        class="dark-bg text-center section-padding contact-wrap"
        id="contact"
      >
        <a href="#page-top" class="up-btn page-scroll">
          <i class="fa fa-chevron-up"></i>
        </a>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Contact Me</h2>
              <h3 class="section-subheading">
                Feel free to get in touch. Cheers!
              </h3>
            </div>
            <div class="row contact-details">
              <div class="col-lg-2"></div>
              <div class="col-lg-4">
                <div class="light-box box-hover">
                  <h2>
                    <i class="fa fa-file-text"></i>
                    <span style={{ background: "transparent" }}>Resume</span>
                  </h2>
                  <p>
                    <a href={resume} download="resume">
                      <button>Download</button>
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="light-box box-hover">
                  <h2>
                    <i class="fa fa-paper-plane"></i>
                    <span>Email</span>
                  </h2>
                  <p>
                    <a href="mailto:bharathmaradana86@gmail.com">
                      bharathmaradana86@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ background: "#242830", marginLeft: "5%" }}>
        <p>@Copyright 2023 Bharath Maradana. All Rights Reserved.</p>
      </footer>
      {/* work*/}
    </div>
  );
}

export default App;

// <svg viewBox="0 0 1440 319">
// <path fill="#000000" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
// </svg>
