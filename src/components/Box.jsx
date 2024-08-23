import { XIcon } from "lucide-react";
import React, { useState } from "react";

const Box = ({ projectIdx, projects, openBox, setOpenBox }) => {
  const [currIdx, setCurrIdx] = useState(projectIdx);

  const project = projects[currIdx];

  return (
    <div className={`box-overlay ${openBox ? "show" : ""}`}>
      <div className="close-btn" onClick={() => setOpenBox(false)}>
        {/* <i className="fa-solid fa-close"></i> */}
        <XIcon size={50} />
      </div>

      <div className="slide-number">
        <span className="curr">{currIdx + 1}</span>/
        <span className="total">{projects.length}</span>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="img-holder col-md-6 mb-3">
            <img src={project.image} alt="project" />
          </div>

          <div className="box-info  col-md-6 mt-md-0 mt-5">
            <h1 className="title mb-3">{project.title}</h1>
            <p className="caption">{project.caption}</p>

            <ul className="p-0 mt-4 mb-6">
              <li>
                <span>Client</span>
                <p className="client">{project.client}</p>
              </li>
              <li>
                <span>Category</span>
                <p className="category">{project.category}</p>
              </li>
              <li>
                <span>Date</span>
                <p className="date">{project.date}</p>
              </li>
              <li>
                <span>Technologies</span>
                <p className="technologies">{project.technologies}</p>
              </li>
            </ul>

            <a
              href={project.external_link}
              className="external-link"
              target="_blank"
              rel="noreferrer"
            >
              Visit Project
            </a>
            <div className="box-controler d-flex mb-5">
              <i
                className={`fa-solid fa-angle-left prev ${
                  currIdx === 0 ? "disable" : ""
                }`}
                onClick={() => setCurrIdx((i) => (i > 0 ? i - 1 : i))}
              ></i>

              <i
                className={`fa-solid fa-angle-right next ${
                  currIdx === projects.length - 1 ? "disable" : ""
                }`}
                onClick={() =>
                  setCurrIdx((i) => (i < projects.length - 1 ? i + 1 : i))
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
