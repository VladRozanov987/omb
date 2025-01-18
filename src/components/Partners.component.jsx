import React from "react";
import styled from "styled-components";

//Img
import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.jpg";
import partner4 from "../assets/img/partner4.png";
import partner5 from "../assets/img/partner5.png";
import partner6 from "../assets/img/partner6.png";
import partner7 from "../assets/img/partner7.png";
import partner8 from "../assets/img/partner8.png";
import partner9 from "../assets/img/partner9.png";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// i18n
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  const partnersData = [
    { src: partner1 },
    { src: partner2 },
    { src: partner3 },
    { src: partner4 },
    { src: partner5 },
    { src: partner6 },
    {
      src: partner7,
      href: "https://www.facebook.com/profile.php?id=100086879193938",
    },
    { src: partner8, href: "https://dubois-kancelaria.com/en/our-team/" },
    { src: partner9, href: "https://tpu.org.pl/kontakt/" },
  ];

  return (
    <StyledPartners>
      <div className="container">
        <h2>{t("partners.title")}</h2>

        <div className="partners-grid-desktop">
          {partnersData.map((partner, index) => (
            <div key={index} className="partner-item">
              <a href={partner.href} target="_blank" rel="noopener noreferrer">
                <img src={partner.src} alt={`Партнер ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          className="partners-swiper"
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="partners-grid-mobile">
                {partnersData.map((partner, index) => (
                  <div key={index} className="partner-item">
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={partner.src} alt={`Партнер ${index + 1}`} />
                    </a>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledPartners>
  );
};

const StyledPartners = styled.section`
  padding-bottom: 128px;

  .partners-grid-desktop {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 64px;
    margin-top: 40px;

    .partner-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      border-radius: 8px;
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .partners-grid-mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .partner-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  .partners-swiper {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 56px;
    .container {
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 107%;
        margin-bottom: 48px;
      }
    }
    .partners-grid-desktop {
      display: none;
    }

    .partners-grid-mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .partners-swiper {
      display: block;
    }
    .swiper-wrapper {
      margin-bottom: 56px;
    }
    .swiper-pagination {
      bottom: 0;
      text-align: center;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: #e8e8e8;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background-color: var(--245daa);
    }
  }
`;

export default Partners;
