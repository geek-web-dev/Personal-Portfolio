
const ContactInfo = ({icon, title, info}) => {
  return (
    <div className="contact-info mt-2 d-flex">
      <i className={icon}></i>
      <div className="text ms-2">
        <h6 className="mb-2">{title}</h6>
        <p>
          {info.line_1}
          {info.line_2 !== "" ? <br /> : ""}
          {info.line_2}
        </p>
      </div>
    </div>
  )
}

export default ContactInfo