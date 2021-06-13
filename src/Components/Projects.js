import React from "react";

const Projects = () => {
  return (
    <div>
      <h2> Projects </h2>
      <hr />
      <div className="projects-div">
        <div className="project">
          <h3>Blog application</h3>
          <p>
            A CRUD application that allows users to create and delete blogs,
            With full database support.
          </p>
          <button className="btn btn-success">
            <a href="https://demo-blog-h.herokuapp.com/" className="proj-link">
              Demo
            </a>
          </button>
        </div>
        <div className="project">
          <h3>Chat-app</h3>
          <p>
            An application that allows real-time communication, supported by
            socket.io .
          </p>
          <button className="btn btn-success">
            <a href="demo-chat-h.herokuapp.com" className="proj-link">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
