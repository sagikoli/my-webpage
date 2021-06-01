import { NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCode,
  faCopy,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import "./Header.css";

const textCopied_toast = ({ closeToast, toastProps }) => (
  <div>
    <FontAwesomeIcon className="me-2" size="lg" icon={faCopy} />
    'sagikoli@gmail.com' copied
  </div>
);

function Header() {
  const copyToClipboard = (event) => {
    event.preventDefault();
    event.target.blur();
    navigator.clipboard.writeText("sagikoli@gmail.com");
    notify();
  };
  const notify = () =>
    toast.info(textCopied_toast, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-4" to="/">
          <div className="logo">
            <div className="avatar">{"S"}</div>
            <div className="logo-text">Shashikumar koli</div>
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link " to="/">
                <FontAwesomeIcon
                  className="smallScreenMenuIcon"
                  size="lg"
                  icon={faHome}
                  fixedWidth
                />{" "}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/resume">
                <FontAwesomeIcon
                  className="smallScreenMenuIcon"
                  size="lg"
                  icon={faIdCard}
                  fixedWidth
                />{" "}
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/projects">
                <FontAwesomeIcon
                  className="smallScreenMenuIcon"
                  size="lg"
                  icon={faCode}
                  fixedWidth
                />{" "}
                Projects
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav d-flex me-4">
            <li className="nav-item  me-4 header-icon-list">
              <a
                href="https://www.linkedin.com/in/shashikoli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  data-tip
                  data-for="linkedinTooltip"
                  className="HeaderIcons"
                  size="lg"
                  icon={faLinkedin}
                  fixedWidth
                />
                <p className="smallScreenMenuText">LinkedIn</p>
              </a>
              <ReactTooltip
                className="tooltip"
                id="linkedinTooltip"
                type="light"
                place="bottom"
                effect="solid"
              >
                Click to open LinkedIn
              </ReactTooltip>
            </li>
            <li className="nav-item me-4 header-icon-list">
              <a
                href="https://github.com/sagikoli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  data-tip
                  data-for="githubTooltip"
                  className="HeaderIcons"
                  size="lg"
                  icon={faGithub}
                  fixedWidth
                />
                <p className="smallScreenMenuText">GitHub</p>
              </a>
              <ReactTooltip
                className="tooltip"
                id="githubTooltip"
                type="light"
                place="bottom"
                effect="solid"
              >
                Click to open Github
              </ReactTooltip>
            </li>
            <li className="nav-item me-4 header-icon-list">
              <span className="CopyEmail me-4" onClick={copyToClipboard}>
                <FontAwesomeIcon
                  data-tip
                  data-for="emailTooltip"
                  className="HeaderIcons"
                  size="lg"
                  icon={faAt}
                  fixedWidth
                />
                <p className="smallScreenMenuText">E-mail</p>
              </span>
              <ReactTooltip
                className="tooltip"
                id="emailTooltip"
                type="light"
                place="bottom"
                effect="solid"
              >
                Click to copy mailId
              </ReactTooltip>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </nav>
  );
}

export default Header;
