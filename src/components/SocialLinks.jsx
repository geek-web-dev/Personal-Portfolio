import { mySocialLinks } from "../data";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";

const SocialLink = () => {
  return (
    <>
      {mySocialLinks.map((obj, idx) => (
        <a key={idx} href={obj.link} rel="noreferrer" target="_blank">
          <FAI icon={obj.icon} />
        </a>
      ))}
    </>
  );
};

export default SocialLink;
