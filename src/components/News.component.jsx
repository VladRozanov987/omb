//Styled
import styled from "styled-components";

//Icons
import arrowUp from "../assets/icons/ArrowUpRightW.svg";

//Data
import { data as newsData } from "../data/News.data";

//Router
import { Link, useLocation } from "react-router-dom";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = ({ title = "Останні новини", limit, showButton }) => {
  const location = useLocation();
  const isAllNewsPage = location.pathname === "/news";

  const newsToDisplay = limit ? newsData.slice(0, limit) : newsData;

  return (
    <StyledNews isAllNewsPage={isAllNewsPage}>
      <div className="container">
        <div className="news-container d-flex">
          <h2>{title}</h2>
          {showButton && !isAllNewsPage && (
            <Link to="/news" className="btn-secondary pc-btn">
              Переглянути всі новини <img src={arrowUp} alt="arrowUp" />
            </Link>
          )}
        </div>

        {/* Desktop Grid */}
        <div
          className={`news-items-desktop ${isAllNewsPage ? "grid-column" : ""}`}
        >
          {newsToDisplay.map(({ id, name, short, date, image }) => (
            <Link key={id} to={`/news/${id}`} className="news-item">
              <img src={image} alt={name} className="news-image" />
              <div className="news-content">
                <h3>{name}</h3>
                <p>{short}</p>
                <span className="news-date">{date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Slider */}
        {!isAllNewsPage && (
          <div className="news-items-mobile">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              loop
            >
              {newsToDisplay.map(({ id, name, short, date, image }) => (
                <SwiperSlide key={id}>
                  <Link to={`/news/${id}`} className="news-item">
                    <img src={image} alt={name} className="news-image" />
                    <div className="news-content">
                      <h3>{name}</h3>
                      <p>{short}</p>
                      <span className="news-date">{date}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {showButton && (
              <Link to="/news" className="btn-secondary mob-btn">
                Переглянути всі новини <img src={arrowUp} alt="arrowUp" />
              </Link>
            )}
          </div>
        )}
      </div>
    </StyledNews>
  );
};

const StyledNews = styled.section`
  padding-top: 128px;
  .news-container {
    justify-content: space-between;

    .btn-secondary {
      border-radius: 16px;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      img {
        margin-left: 4px;
      }
    }
  }

  .news-items-desktop {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

    img {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
  .grid-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .news-items-mobile {
    display: none;
    margin-top: 50px;
    img {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }

  .news-item {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .news-image {
    border-radius: 32px;
  }

  .news-content {
    h3 {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      color: #000;
      margin-bottom: 16px;
    }

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 200%;
      color: #6e6e6e;
      margin-bottom: 8px;
    }

    span {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 14px;
      line-height: 229%;
      color: #000;
    }
  }

  @media (max-width: 768px) {
    padding-top: 0;
    .news-items-desktop {
      display: none;
    }
    .pc-btn {
      display: none !important;
    }
    .grid-column {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 32px;
    }
    .news-items-mobile {
      display: block;
      margin-top: 24px;
    }
    h2 {
      font-weight: 700;
      font-size: 30px;
      line-height: 107%;
    }
    .news-content {
      h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
      }

      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
      }

      span {
        font-weight: 300;
        font-size: 14px;
        line-height: 229%;
        color: var(--1c1f1c);
      }
    }
    .mob-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      padding: 16px 24px;
      width: 100%;
      img {
        margin: 0 0 0 4px;
      }
    }

    .swiper-wrapper {
      margin-bottom: 56px;
    }
    .swiper-pagination {
      bottom: 24px;
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

export default News;
