import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

const Testimonials = () => {
  const dataClient = [
    {
      imgSrc: "/PaulP.jpeg",
      client: "Paul Peterson",
      review:
        "Anwar is great at making sure all my company's finances are organized and documented, his timely responses are much appreciated and I will look forward to working with him again soon!",
    },
    {
        imgSrc: "/ErikS.jpeg",
        client: "Erik Strong",
        review:
          "I continuously re-hire Anwar because he is an absolute professional. His attentiveness and attention to detail are unmatched. Another great project!",
    },
    {
        imgSrc: "/DanielR.jpeg",
        client: "Daniel",
        review:
          "Anwar's been great. I worked with him for 3 months on QuickBooks, he helped me get everything organized. Taught me many things. I will continue to work with him. Highly recommend!",
    },
    {
        imgSrc: "/DavidK.jpeg",
        client: "David Krueger",
        review:
          "Anwar did fantastic work. on time under budget. Very valuable end result, very professional as promised and on time. Great work Thank you!",
    },
    {
        imgSrc: "/Ismail.jpeg",
        client: "Ismail",
        review:
          "I hired Anwar for Data Analysis with Report work and he was so fantastic, professional and deliver the project within the time, and also offer revision after completing. I recommend Anwar!",
    }
  ];

  return (
    <section className="Testimonials" id="Testimonial">
      <div className="titleTestimonial">
        <h1>Testimonials</h1>
        {/* <p>Don't take our word for it. Take theirs!</p> */}
      </div>

    <Swiper modules={[Navigation, Autoplay]} loop={true} navigation autoplay={{delay: 3500, disableOnInteraction: false,}}
        spaceBetween={30} breakpoints={{0: {slidesPerView: 1,}, 768: {slidesPerView: 2,},1200: {slidesPerView: 3,},}}
        className="testimonial-slider"
      >
        {dataClient.map((client, index) => (
            <SwiperSlide key={index}>
                <div className="client-card">
                    <img
                        src={client.imgSrc}
                        alt={client.client}
                        className="client-image"
                    />
                    <div className="client-card-info">
                        <h2 className="client-Name">{client.client}</h2>
                        <p className="client-Review">{client.review}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </section>
  );
};

export default Testimonials;