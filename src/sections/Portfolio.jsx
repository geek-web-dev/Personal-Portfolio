import { useEffect, useState } from "react";
import Project from "../components/Project";
import SectionTitle from "../components/SectionTitle";
import { filterKeys, myProjects } from "../data";
import Masonry from "react-masonry-css";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeGenre, setActiveGenre] = useState("all");

  useEffect(() => {
    if (activeGenre === "all") {
      setFilteredProjects(myProjects);
      return;
    }
    const filtered = myProjects.filter((project) => {
      return project.category === activeGenre;
    });
    setFilteredProjects(filtered);
  }, [activeGenre]);

  const breakpointColumns = {
    default: 4,
    1199: 3,
    767: 2,
    575: 1,
  };

  return (
    <section className="portfolio">
      <div className="container">
        <SectionTitle title="Portfolio" des="My works gallery, take a look!" />

        <div className="row my-5">
          <ul id="portfolio-filters" className="d-flex flex-wrap">
            {filterKeys.map((genre, idx) => (
              <li
                key={idx}
                onClick={() => setActiveGenre(genre)}
                className={activeGenre === genre ? "filter-active" : ""}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredProjects.map((obj, idx) => (
            <Project
              key={idx}
              idx={idx}
              projects={filteredProjects}
              title={obj.title}
              category={obj.category}
              imgSrc={obj.image}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;
