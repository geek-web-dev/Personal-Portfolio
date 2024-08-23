import { useInView } from "react-intersection-observer";

const SectionTitle = ({ title, des }) => {
  const { ref: titleSectionRef, inView: show } = useInView();
  return (
    <div
      className={`section-title ${show ? "show" : ""}`}
      ref={titleSectionRef}
    >
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  );
};

export default SectionTitle;
