import myImage from "../imgs/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { heroData } from "../data";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="hero-text col-lg-8">
            <h4>Hi!, I'm</h4>
            <h1>{heroData.name}</h1>
            <div className="typewriter">
              <Typewriter
                className="fs-1"
                words={[heroData.job_title_1, heroData.job_title_2]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={25}
                delaySpeed={600}
              />
            </div>
          </div>

          <div className="col-lg-4 hero-links">
            <div className="d-flex gap-3 justify-content-lg-center flex-wrap">
              <a
                className="hero-btn cv d-block"
                download="pdf"
                href={heroData.cvFilePath}
              >
                Download Cv
                <i className="lnr lnr-download"></i>
              </a>
              <Link className="hero-btn hire d-block" to="contact">
                Hire Me
                <i className="lnr lnr-envelope"></i>
              </Link>
            </div>

            <div className="social-links d-flex mt-3 justify-content-lg-center">
              <SocialLinks />
            </div>
          </div>

          <div className="col-xl-8 col-7 img-wrapper">
            <img src={myImage} alt={`${heroData.name} img`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
