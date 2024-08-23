import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { myClients } from "../data";
import Stars from "../components/Stars";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <SectionTitle title="Testimonial" des="Praise from happy clients" />

          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
            className="swiper-container"
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
          >
            {myClients.map((obj, idx) => (
              <SwiperSlide key={idx}>
                <img src={obj.img} alt="Client" loading="lazy" />
                <div className="text">
                  {/* <i className="fa-solid fa-quote-left icon"></i> */}
                  <Quote id="quote" />
                  <p className="mb-4">{obj.comment}</p>
                  <div className="info d-flex justify-content-between align-items-center">
                    <div className="data">
                      <h6>{obj.name}</h6>
                      <h6>{obj.jobTitle}</h6>
                    </div>
                    <Stars starsCount={obj.rate} />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
