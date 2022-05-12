// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './style.scss';

// import required modules for Swiper
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';

import TechSkills from './TechSkills';
import ProSkills from './ProSkills';
import SoftSkills from './SoftSkills';

const Skills = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
  };

  return (
    <section className="skills">
      <div className="mobile">
        <Swiper
          {...params}
          spaceBetween={40}
          navigation={{
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
          }}
          pagination={{
            el: '.my-custom-pagination-div',
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          keyboard
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide"><TechSkills /></SwiperSlide>
          <SwiperSlide className="swiper-slide"><ProSkills /></SwiperSlide>
          <SwiperSlide className="swiper-slide"><SoftSkills /></SwiperSlide>

          {/* Swiper navigation arrows */}
          <span className="swiper-button-prev-unique">
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="xl"
              fixedWidth
            />
          </span>
          <span className="swiper-button-next-unique">
            <FontAwesomeIcon
              icon={faAngleRight}
              size="xl"
              fixedWidth
            />
          </span>

          {/* Swiper pagination */}
          <div className="my-custom-pagination-div" />

        </Swiper>
      </div>

      <div className="desktop">

        <div className="skills">
          <article className="skills__block">
            <TechSkills />
          </article>

          <article className="skills__block">
            <ProSkills />
          </article>

          <article className="skills__block">
            <SoftSkills />
          </article>
        </div>

      </div>

    </section>
  );
};

export default Skills;
