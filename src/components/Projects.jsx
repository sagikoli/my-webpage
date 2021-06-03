import {
  faCloud,
  faShoppingCart,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
function Projects() {
  return (
    <div className="container-fluid">
      <div className="row pt-4 pb-4 border">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 className=" h1 ms-5 ps-2 color-dusky">Projects</h1>
        </div>
      </div>
      <div className="row ">
        <div className="container projects-container ">
          <ul className="list-group bg-dark ">
            <li className="list-group-item bg-dark text-white no-border-top">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon className="me-2" size="sm" icon={faCloud} />
                <div className="color-dusky">Cloud Modernization Platform</div>
              </div>
              <ul
                className="text-secondary fs-6"
                style={{ listStyleType: "square" }}
              >
                <li>
                  Developed an interactive SPA using Angular 8 & 9 framework
                  with rich UI/UX by utilizing libraries like Angular Material,
                  Font- Awesome, NgRx, Bootstrap, D3.js and integrated RESTful
                  APIs.
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  className="me-2"
                  size="sm"
                  icon={faShoppingCart}
                />
                <div className="color-dusky"> Ecommerce - Hoopla</div>
              </div>
              <ul
                className="text-secondary fs-6"
                style={{ listStyleType: "square" }}
              >
                <li>
                  Designed and built an Ecommerce web-application using MERN
                  stack with microservices architecture following Agile Scrum.
                  Some JavaScript libraries put to use are Redux, mongoose.js,
                  hydraexpress, Redis, Axios, Bootstrap, Font- Awesome etc.
                </li>
              </ul>
            </li>
            <li className="list-group-item bg-dark text-white">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon className="me-2" size="sm" icon={faStore} />
                <div className="color-dusky"> Ecommerce - SecureCart</div>
              </div>
              <ul
                className="text-secondary fs-6"
                style={{ listStyleType: "square" }}
              >
                <li>
                  Designed and implemented a web plus android application that
                  provides authentication and feedback mechanism for ecommerce
                  product deliveries. Technologies put to use are Android
                  studio, OpenCart, AWS-EC2 & RDS, MySQL, firebase Realtime
                  database, GoDaddy DNS, Java.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
