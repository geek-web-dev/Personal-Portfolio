import Service from "../components/Service";
import { myServices } from "../data";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  // useObserver();
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <SectionTitle title="Services" des="My services and what i do !" />

          {myServices.map((obj, idx) => (
            <Service
              key={idx}
              service={obj.service}
              IconName={obj.IconName}
              description={obj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
