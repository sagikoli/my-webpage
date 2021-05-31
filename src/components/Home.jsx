import profilePic from "../assets/profilePic.jpg";
function Home() {
  return (
    <div className="container-fluid d-flex flex-column flex-grow-1 ">
      <div className="row justify-content-center align-items-center flex-column  flex-grow-1 ">
        <div className="col-md-8 ">
          <div className="row align-items-center" style={{ maxHeight: "50vh" }}>
            <div className="col-lg-5 text-center">
              <img
                className="profile-pic img-responsive"
                src={profilePic}
                alt="profile"
              />
            </div>
            <div className="col-lg-7 text-center">
              <div
                className="if-smallScreen-marginTop"
                style={{ textAlign: "left" }}
              >
                <h2>Hi,</h2>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ overflow: "auto" }}>
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
