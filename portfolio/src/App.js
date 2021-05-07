import Spinner from "react-bootstrap/Spinner";
import "./App.css";

function App() {
  const mySites = [
    {
      title: "Project 1#",
      gitHubLink: "https://github.com/ptums/project-1",
      libraries: ["Bootstrap", "React", "Auth0"],
      img: "https://mobirise.com/assets52/images/poster.png",
      width: 300,
      height: 200,
    },
    {
      title: "Project 2#",
      gitHubLink: "https://github.com/ptums/project-2",
      libraries: ["Bootstrap", "React", "MongoDB"],
      img:
        "https://lh3.googleusercontent.com/QigP2YA5j4Um9Rq_-OF5SWip66Bg1Qa7U1jP_Ryr92g0ucmk4NVp-vH3E1hy65HLaTocCPjzc5MOC7KnYye5PlXI=w640-h400-e365-rj-sc0x00ffffff",
      width: 300,
      height: 200,
    },
    {
      title: "Project 3#",
      gitHubLink: "https://github.com/ptums/project-3",
      libraries: ["Tailwind.css", "Next.js", "Prismic.io"],
      img:
        "https://previews.123rf.com/images/droidworks/droidworks1501/droidworks150101595/36174079-stylish-website-template-for-personal-portfolio.jpg",
      width: 300,
      height: 200,
    },
  ];
  return (
    <div className="App">
      <header className="jumbotron">
        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </>
        <h1>
          {" "}
          <Spinner animation="border" variant="dark" />
          <strong>My Portfolio</strong>
          <Spinner animation="border" variant="light" />
        </h1>

        <>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </>
      </header>
      <div className="container">
        <div className="row">
          {mySites.map((site) => (
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img
                  src={site.img}
                  className="card-img-top"
                  alt={site.title}
                  width={site.width}
                  height={site.height}
                />
                <div className="card-body">
                  <h5 className="card-title">{site.title}</h5>
                  <p>Libraries I used</p>
                  <ul className="list-unstyled">
                    {site.libraries.map((lib) => (
                      <li className="card-text">{lib}</li>
                    ))}
                  </ul>
                  <a href={site.gitHubLink} className="btn btn-primary">
                    Github Repo
                  </a>
                </div>
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
              <div className="d-block w-100">
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
