import { useInView } from "react-intersection-observer";

// import * as lucide from "lucide-react"

const Service = ({ service, IconName, description }) => {
  const { ref: iconRef, inView: animate } = useInView();

  return (
    <div className={`col-lg-4 col-md-6 service ${animate ? "animate" : ""}`}>
      <div className="icon-wrap">
        <div className="icon" ref={iconRef}>
          <div className="face front">
            <IconName size={32} color="white" />
          </div>
          <div className="face back">
            <IconName size={32} color="white" />
          </div>
        </div>
      </div>
      <h4>{service}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
