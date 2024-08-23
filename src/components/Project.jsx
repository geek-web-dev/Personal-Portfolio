import { useEffect, useState } from "react";
import Box from "./Box";
import { useInView } from "react-intersection-observer";

const Project = ({ idx, projects, title, category, imgSrc }) => {
  const [openBox, setOpenBox] = useState(false);
  const { ref: projectRef, inView: show } = useInView();

  useEffect(() => {
    if (openBox) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "unset";

    return () => (document.body.style.overflowY = "");
  }, [openBox]);

  return openBox ? (
    <Box
      projectIdx={idx}
      projects={projects}
      openBox={openBox}
      setOpenBox={setOpenBox}
      imgSrc={imgSrc}
    />
  ) : (
    <div
      ref={projectRef}
      className={`project ${show ? "show" : ""}`}
      onClick={() => setOpenBox(true)}
    >
      <div className="project-wrap">
        <img src={imgSrc} className="img-fluid" alt="project" loading="lazy" />
        <div className="project-info">
          <h4>{title}</h4>
          <p>{category}</p>
          <span>More Info</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
