import { aboutInfo, aboutMe, funFacts, skills } from "../data";
import Skill from "../components/Skill";
import FunFact from "../components/FunFact";
import SectionTitle from "../components/SectionTitle";
import ShowList from "../components/ShowList";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row about-row">
          <SectionTitle title="About Me" des="Know more about me" />

          <div className="about-img mb-3">
            <img
              src={aboutMe.about_image}
              className="about-img"
              alt="person"
              loading="lazy"
            />
          </div>

          <div className="about-me col-md-8">
            <h3 className="mb-3">
              I'm <b>{aboutMe.name}</b>, {aboutMe.job}
            </h3>
            <ShowList
              list={aboutMe.paragraphs}
              renderItem={(item, i) => <p key={i}>{item}</p>}
            />
          </div>

          <div className="about-info col-md-4">
            <ShowList
              list={aboutInfo}
              renderItem={(item, i) => (
                <li key={i}>
                  <item.Icon size={32} strokeWidth={1.3} />
                  <p className="ms-3">{item.info}</p>
                </li>
              )}
            />
          </div>

          <div className="row fun-facts mt-3">
            <ShowList
              list={funFacts}
              renderItem={(item, i) => <FunFact key={i} {...item} />}
            />
          </div>

          <div className="row skills">
            {skills.map((obj, idx) => (
              <Skill key={idx} targetValue={obj.target} skill={obj.skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
