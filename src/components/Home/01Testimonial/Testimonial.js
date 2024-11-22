// Import Swiper and its modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Roboto } from "next/font/google";

const roboto1 = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

const roboto2 = Roboto({
  subsets: ["latin"],
  weight: ["300"],
});

const roboto3 = Roboto({
  subsets: ["latin"],
  weight: ["900"],
});

const Testimonial = () => {
  const testimonials = [
    {
      text: "Their team demonstrated exceptional expertise and creativity, delivering a user-friendly and high-performance application on time and within budget. The seamless collaboration and proactive communication made the entire development process smooth and enjoyable",
      author: "Sophia Martinez",
      role: "CTO at InnovateX",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "They crafted a stunning, responsive website that perfectly represents our brand and enhances user experience. Our online presence has significantly improved, attracting more clients and driving business growth. It's a pleasure working with such a dedicated partner.",
      author: "Abhinav Arora",
      role: "Founder of GreenLeaf Solutions",
      image: "https://via.placeholder.com/50",
    },
    {
      text: "Their innovative approach and deep understanding of the market helped us create a product that stands out. From initial concept to final launch, their team was supportive, responsive, and incredibly skilled. We’re thrilled with the results and look forward to future projects together.",
      author: "Amit Sharma",
      role: "CEO of TechNova",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <>
      <section
        className="py-12 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('Home/tech.webp')", // Replace with your background image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Container with overflow handling */}
        <div className=" sm:ml-40 ml-2 mx-auto  overflow-visible">
          {" "}
          {/* Ensure overflow-visible */}
          {/* Header */}
          <div>
            <h1
              className={`text-white text-xl sm:text-4xl font-bold mb-10 sm:pl-5 ${roboto3.className}`}
            >
              What Our Clients Say
            </h1>
          </div>
          {/* Swiper Navigation Buttons */}
          <div className="absolute top-10 right-20 sm:top-16 sm:right-40 max-[500px]:right-16 flex space-x-2 z-10">
            <button
              className="swiper-button-prev bg-white  p-6 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="swiper-button-next bg-white p-6 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              {/* Right chevron arrow (smaller size with h-4 w-4) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 text-blue-500" // Reduced from h-6 w-6 to h-4 w-4
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2.3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1.2 }, // For screens below 640px, show 1 full slide
              768: { slidesPerView: 1.5 }, // For medium screens (md, below 768px), show 1.5 slides
              1024: { slidesPerView: 2.3 }, // For larger screens, show 2.3 slides with a part of the third card
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-lg mx-auto bg-white rounded-lg p-6 shadow-md relative z-20">
                  <img
                    className="w-10 h-10 -mb-3 -ml-3"
                    src="/Home/testimonial/quote1.svg"
                  ></img>
                  <p
                    className={`text-[#292d32] italic mb-4 ${roboto2.className} text-[16px] text-justify`}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="text-left">
                      <h4
                        className={`text-[#292d32] text-[18px] font-bold ${roboto1.className}`}
                      >
                        {testimonial.author}
                      </h4>
                      <p
                        className={`text-[#7e7e83] text-[14px] ${roboto1.className}`}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
