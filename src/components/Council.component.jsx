import React, { useEffect, useState } from "react";
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

//PopUp
const Popup = ({ person, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <StyledPopup>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="popup-content-inner">
          <img className="person-image" src={person.image} alt={person.name} />
          <div className="popup-body">
            <h3>{person.name}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: person.fullDescription }}
            ></div>
          </div>
        </div>
      </div>
    </StyledPopup>
  );
};

const Council = ({
  title = "Рада експертів",
  isAboutPage = false,
  initialFilter = "Director",
}) => {
  const [filter, setFilter] = useState(initialFilter);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const handlePopupOpen = (person) => {
    setSelectedPerson(person);
  };

  const handlePopupClose = () => {
    setSelectedPerson(null);
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

        <div className="content-container">
          <div className="cards-container">
            {filteredData.map((item) => (
              <div key={item.id} className="card d-flex">
                <img src={item.image} alt={item.name} />
                <div className="card-text">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <button
                    className="popUp-btn"
                    onClick={() => handlePopupOpen(item)}
                  >
                    Детальніше
                  </button>
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
                      <button
                        className="popUp-btn"
                        onClick={() => handlePopupOpen(item)}
                      >
                        Детальніше
                      </button>
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

      {selectedPerson && (
        <Popup person={selectedPerson} onClose={handlePopupClose} />
      )}
    </StyledCouncil>
  );
};

const FilterButtons = ({ filter, onFilterChange }) => (
  <>
    {["Director", "Expert", "Regional Director", "Volunteers"].map((type) => (
      <button
        key={type}
        className={`btn btn-secondary ${filter === type ? "active" : ""}`}
        onClick={() => onFilterChange(type)}
      >
        {type === "Director"
          ? "Директори"
          : type === "Expert"
          ? "Наша команда"
          : type === "Regional Director"
          ? "Регіональні Директори"
          : "Волонтери"}
      </button>
    ))}
  </>
);

const MobileFilterSelect = ({ filter, onFilterChange }) => (
  <select
    value={filter}
    onChange={(e) => onFilterChange(e.target.value)}
    className="mobile-filter"
  >
    <option value="Director">Директори</option>
    <option value="Expert">Рада Експертів</option>
    <option value="Regional Director">Регіональні Директори</option>
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
        : "justify-content: flex-start;"}

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

  .popUp-btn {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    color: var(--245daa);
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
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
    align-self: normal;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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
      margin-left: 12px;
    }
  }

  .filters {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .filter-buttons-desktop {
    display: flex;
    gap: 16px;
  }

  .filter-select-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    padding-top: 56px;

    .header-text {
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 107%;
      }
    }

    .council-btn {
      display: none;
    }

    .slider-container {
      display: block;
    }

    .cards-container {
      display: none;
    }

    .filter-select-mobile {
      display: block;
      border-radius: 16px;
      padding: 16px 24px;
      background: #e8e8e8;
      width: 100%;
    }

    .mobile-filter {
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: var(--1c1f1c);
      border: none;
      outline: none;
      background: transparent;
      width: 100%;
    }

    .card {
      flex-direction: column;
      img {
        margin: 0;
      }
    }

    .card-text {
      padding-top: 16px;
      text-align: center;
    }

    .filter-buttons-desktop {
      display: none;
    }

    .popUp-btn {
      display: flex;
      justify-content: center;
      margin: 12px 0 24px 0;
    }
  }
`;

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 999999999;

  .close-button {
    position: absolute;
    top: -30px;
    right: -30px;
    width: 30px;
    height: 30px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.1);
    }
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    display: flex;
    align-items: flex-start;
    position: relative;
    max-height: 90vh;

    .popup-content-inner {
      display: flex;
      width: 100%;
      max-height: 100%;
      overflow-y: auto;
    }

    .person-image {
      width: 170px;
      height: 300px;
      max-height: 100%;
      border-radius: 8px;
      object-fit: cover;
      margin-right: 20px;
    }

    .popup-body {
      margin-top: 0;
      flex: 1;
      max-height: 60vh;
      overflow-y: auto;

      h3 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }

      p {
        font-size: 16px;
        color: #666;
        line-height: 1.5;
        margin-top: 10px;
        word-wrap: break-word;
      }
    }

    @media (max-width: 768px) {
      .popup-content-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        max-height: 70vh;
        overflow-y: auto;
      }
      .person-image {
        margin: 0 0 20px 0;
        max-width: 100%;
      }
    }
  }
`;

export default Council;
