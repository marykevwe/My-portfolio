import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description: "A sleek developer portfolio.",
    link: "https://yourportfolio.com"
  },
  {
    title: "E-commerce App",
    image: "/ecommerce.png",
    description: "An online shop built with React and Node.js.",
    link: "https://ecommerce.com"
  },
  {
    title: "Landing Page",
    image: "/landing.png",
    description: "A modern, responsive landing page.",
    link: "https://landingpage.com"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 h-full flex flex-col">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 flex-grow">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 mt-4 hover:underline"
              >
                Visit Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
