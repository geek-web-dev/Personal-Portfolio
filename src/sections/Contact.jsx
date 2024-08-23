import React from "react";
import SectionTitle from "../components/SectionTitle";
import { myContactInfo } from "../data";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <SectionTitle
            title="Contact"
            des="Feel free to get in touch with me"
          />

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="contact-infos">
              {myContactInfo.map((obj, idx) => (
                <ContactInfo
                  key={idx}
                  icon={obj.icon}
                  title={obj.title}
                  info={obj.info}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-8">
            <form action="" method="POST">
              <div className="row">
                <div className="col-md-6 mb-3 ">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3 ps-md-2">
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-12 mb-3">
                  <textarea
                    name="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <input name="submit" type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
