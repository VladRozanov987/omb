import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styled
import styled from "styled-components";

//Data
import { data } from "../data/Council.data";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//Icons
import ArrowUp from "../assets/icons/ArrowUpRightW.svg";
import select from "../assets/icons/select.svg";

const Council = ({ title = "Рада експертів", isAboutPage = false }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.type === filter);

  return (
    <StyledCouncil isAboutPage={isAboutPage}>
      <div className="container">
        <div className={`header-text d-flex ${isAboutPage ? "centered" : ""}`}>
          <h2>{title}</h2>
        </div>

        <div className="filters d-flex">
          {/* Показываем кнопки фильтров на десктопе, и выпадающий список на мобильных устройствах */}
          <div className="filter-buttons-desktop">
            <FilterButtons
              filter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="filter-select-mobile">
            <MobileFilterSelect
              filter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Статичная сетка для десктопа и слайдер для мобильных устройств */}
        <div className="content-container">
          <div className="cards-container">
            {filteredData.slice(0, 6).map((item) => (
              <div key={item.id} className="card d-flex">
                <img src={item.image} alt={item.name} />
                <div className="card-text">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-container">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                768: { slidesPerView: 1 },
              }}
            >
              {filteredData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="card d-flex">
                    <img src={item.image} alt={item.name} />
                    <div className="card-text">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {!isAboutPage && (
          <Link to="/about" className="council-btn btn-secondary">
            Детальніше про Раду <img src={ArrowUp} alt="ArrowUp" />
          </Link>
        )}
      </div>
    </StyledCouncil>
  );
};

const FilterButtons = ({ filter, onFilterChange }) => (
  <>
    {["All", "Coordinator", "Help", "Entrepreneurs", "Volunteers"].map(
      (type) => (
        <button
          key={type}
          className={`btn btn-secondary ${filter === type ? "active" : ""}`}
          onClick={() => onFilterChange(type)}
        >
          {type === "All"
            ? "Всі"
            : type === "Coordinator"
            ? "Координатори"
            : type === "Help"
            ? "Гум. допомога"
            : type === "Entrepreneurs"
            ? "Підприємці"
            : "Волонтери"}
        </button>
      )
    )}
  </>
);

const MobileFilterSelect = ({ filter, onFilterChange }) => (
  <select
    value={filter}
    onChange={(e) => onFilterChange(e.target.value)}
    className="mobile-filter"
  >
    <option value="All">Всі</option>
    <option value="Coordinator">Координатори</option>
    <option value="Help">Гум. допомога</option>
    <option value="Entrepreneurs">Підприємці</option>
    <option value="Volunteers">Волонтери</option>
  </select>
);

const StyledCouncil = styled.section`
  padding-top: 128px;

  .d-flex {
    align-items: center;
    ${({ isAboutPage }) =>
      isAboutPage
        ? "justify-content: flex-start;"
        : "justify-content: space-between;"}

    h2 {
      margin-bottom: 24px;
    }
  }

  .btn {
    border-radius: 12px;
    padding: 12px 24px;
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 14px;
  }

  .btn:not(:last-child) {
    margin-right: 16px;
  }

  .btn.active {
    background: var(--245daa);
    color: #fff;
  }

  .btn:not(.active) {
    background: #e8e8e8;
    color: #000;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 40px;
  }

  .slider-container {
    display: none;
  }

  .card {
    padding: 16px;
    text-align: left;

    img {
      max-width: 170px;
      height: auto;
      border-radius: 8px;
      margin-bottom: 16px;
      margin-right: 32px;
    }
  }

  .card-text {
    h3 {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 20px;
      color: var(--1c1f1c);
    }

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 14px;
      line-height: 171%;
      color: #6e6e6e;
    }
  }

  .council-btn {
    display: flex;
    justify-self: center;
    border-radius: 16px;
    img {
      margin-left: 4px;
    }
  }

  .mobile-filter {
    display: none;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    font-size: 14px;
  }

  .filter-buttons-desktop {
    display: flex;
  }

  .filter-select-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    padding-top: 56px;
    .header-text {
      font-weight: 700;
      font-size: 30px;
    }
    .cards-container {
      display: none;
    }

    .slider-container {
      display: block;
    }

    .mobile-filter {
      display: block;
    }

    .filter-buttons-desktop {
      display: none;
    }

    .filter-select-mobile {
      display: block;
      width: 100%;
    }

    .mobile-filter {
      border-radius: 16px;
      padding: 16px 24px;
      background: #e8e8e8;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url(${select});
      background-repeat: no-repeat;
      background-position: right 20px center;
      border: none;
      outline: none;
    }

    .council-btn {
      display: none;
    }

    .swiper-wrapper {
      margin-bottom: 88px;
    }
    .card {
      flex-direction: column;
      text-align: center;
    }
    .swiper-pagination {
      bottom: 48px;
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

export default Council;
