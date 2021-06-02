import {
  faDownload,
  faExclamationTriangle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
import environment from "../environment";
import "./Resume.css";
import Modal from "react-modal";
import React from "react";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "100px",
    width: "250px",
    background: "#3d3f43",
  },
};

Modal.setAppElement("#root");

function Resume() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const ErrorToast = ({ closeToast, toastProps }) => (
    <div>
      <div className="text-center">
        <FontAwesomeIcon
          className="me-2"
          size="sm"
          icon={faExclamationTriangle}
        />
        <span>Oops,we ran into some issue. </span>
      </div>
      <div className="text-center">please try again later</div>
    </div>
  );

  const downloadResume = () => {
    openModal();
    axios
      .get(`${environment.s3}`, {
        responseType: "arraybuffer",
        headers: { "Content-Type": "application/pdf" },
      })
      .then((res) => {
        console.log(res);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `ShashikumarKoli2021.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        closeModal();
      })
      .catch((err) => {
        closeModal();
        toast.error(ErrorToast, {
          bodyClassName: "ToastBody",
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        console.error(err);
      });
    console.log("downloading resume");
  };

  return (
    <div className="container-fluid">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <div
          className="text-white"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#3d3f43",
          }}
        >
          <span>
            Loading, please wait...{" "}
            <FontAwesomeIcon size="lg" icon={faSpinner} fixedWidth spin />
          </span>
        </div>
      </Modal>
      <div className="row pt-4 pb-4 border">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className=" h1 ms-5 ps-2 " style={{ display: "inline" }}>
            Resume
          </h1>
          <span style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              className="download"
              size="lg"
              icon={faDownload}
              fixedWidth
              onClick={downloadResume}
            />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 ms-5 ps-3 mt-5">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-dark text-white no-border-top">
              <div className="h3">Experience</div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-dark text-white">
                  <div className="h5"> Infosys Ltd.</div>
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark text-white">
                      <div className="h6"> Digital Specialist Engineer</div>
                      <div className="text-secondary"> Jan 2021 - Present</div>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                      <div className="h6">System Engineer Specialist</div>
                      <div className="text-secondary">July 2019 - Jan 2021</div>
                    </li>
                    <li className="no-border-bot list-group-item bg-dark text-white">
                      <div className="h6">Summary</div>
                      <div className="text-secondary fs-6">
                        <ul>
                          <li>
                            Working in the role of Full stack developer as a
                            part of the specialist team which is responsible for
                            fast paced development and delivery of critical
                            applications.
                          </li>
                          <li>
                            Using MEAN and MERN stack along with AWS for
                            designing and developing web applications in
                            collaboration with other team members using Agile
                            development methodology.
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="list-group-item bg-dark text-white no-border-bot">
                  <div className="h5">GlobalStep Pvt. Ltd.</div>
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark text-white">
                      <div className="h6">Game Tester Intern</div>
                      <div className="text-secondary">
                        June 2018 - July 2018, Pune
                      </div>
                    </li>
                    <li className="list-group-item bg-dark text-white no-border-bot">
                      <div className="h6">Summary</div>
                      <div className="text-secondary fs-6">
                        <ul>
                          <li>
                            Collaborated with a team of 10+ members to test and
                            analyze quality and performance of games, reproduce
                            and documented bugs using JIRA to optimize the
                            gaming experience.
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white ">
              <div className="h3"> Skills </div>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li
                  className="list-group-item bg-dark text-white col-md-6 "
                  style={{ borderTop: "1px solid #333 " }}
                >
                  Angular (Infosys certified angular developer)
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  JavaScript & Typescript
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row ">
                <li className="list-group-item bg-dark text-white col-md-6">
                  AWS (Infosys certified cloud practitioner)
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  ReactJS
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  ExpressJS (NodeJS){" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  MongoDb
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  HTML5/CSS
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  Android Development{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  Java Core(certified by NIIT){" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  C/C++ (certified by NIIT and NPTEL)
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 50%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  MySQL{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: " 75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  Git{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  Firebase{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  Redux
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-6">
                  NgRx
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6">
                  D3.js{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li
                  className="list-group-item bg-dark text-white col-md-6 no-border-bot"
                  style={{ borderBottom: "none" }}
                >
                  Mongoose.js{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-6 no-border-bot">
                  Python{" "}
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white ">
              <div className="h3"> Education </div>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>B.E. in Computer Science and Eng.</div>
                  <div>CGPA : 8.93</div>
                  <div className=" text-white ">
                    <div className="text-secondary">
                      Walchand Institute of Technology
                    </div>
                    <div className="text-secondary">
                      Sep 2015 - Apr 2019 , Solapur
                    </div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>HSC</div>
                  <div>Percentage : 77.69%</div>
                  <div className=" text-white ">
                    <div className="text-secondary"> Sangameshwar College</div>
                    <div className="text-secondary"> Feb 2015 , Solapur</div>
                  </div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>SSC</div>
                  <div>Percentage : 95.09%</div>
                  <div className=" text-white ">
                    <div className="text-secondary"> Indian Model School</div>
                    <div className="text-secondary"> Mar 2013 , Solapur</div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white no-border-top">
              <div className="h3"> Achievements </div>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Infosys certified AWS Cloud practitioner</div>
                  <div className="text-secondary">Infosys Ltd. 2021</div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Infosys certified Angular developer</div>
                  <div className="text-secondary">Infosys Ltd. 2019</div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Among top 500 of HackwithInfy</div>
                  <div className="text-secondary">Infosys Ltd. 2018</div>
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white no-border-top">
              <div className="h3"> Interests </div>
              <ul className="list-group list-group-flush list-group-horizontal row">
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Online multiplayer gaming</div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Watching anime / web series</div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Learning and making use of new technologies</div>
                </li>
                <li className="list-group-item bg-dark text-white col-md-4 no-border-bot">
                  <div>Solving problems in day to day life</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
