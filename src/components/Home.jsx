import { useState } from "react";
import profilePic from "../assets/profilePic.jpg";
import "./Home.css";
function Home() {
  const [profileLoaded, setProfileLoaded] = useState(false);
  const onImageLoad = (event) => {
    console.log("Image loaded");
    setProfileLoaded(true);
  };
  return (
    <div className="container-fluid d-flex flex-column flex-grow-1 ">
      <div className="row justify-content-center align-items-center flex-column  flex-grow-1 main-row">
        <div className="col-lg-8 ">
          <div className="row align-items-center" style={{ maxHeight: "50vh" }}>
            <div className="col-lg-5 text-center">
              <img
                style={{ display: profileLoaded ? "inline" : "none" }}
                id="profile pic"
                className="profile-pic img-responsive"
                src={profilePic}
                alt="profile"
                onLoad={(e) => onImageLoad(e)}
              />
              <span
                className="profile-pic img-responsive"
                style={{
                  display: profileLoaded ? "none" : "flex",
                  aspectRatio: " 1 / 1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </span>
            </div>
            <div className="col-lg-7 text-center summary">
              <div
                className="if-smallScreen-marginTop"
                style={{ textAlign: "left" }}
              >
                <h2 className="color-dusky">Hi,</h2>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ overflow: "auto" }} className="color-dusky">
                  I'm a web developer at Infosys ltd. I was always passionate
                  about coding and development and its numerous applications ,
                  which keeps me inspired to learn and try new technologies. I
                  am a good team player and problem solver with proficient
                  communication skills.I'm currently actively working on angular
                  and AWS , while i have worked previously on micro-services ,
                  react redux , Mongodb etc Skills : Angular, AWS, React.js,
                  Express.js, Node.js, Mongodb , HTML , CSS Feel free to get in
                  touch with me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
