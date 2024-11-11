import React, { useState } from "react";

//Styled
import styled from "styled-components";

//Data
import { data } from "../data/Council.data";

//Icons
import ArrowUp from "../assets/icons/ArrowUpRightW.svg";

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
        <div className={`header d-flex ${isAboutPage ? "centered" : ""}`}>
          <h2>{title}</h2>
          {!isAboutPage && (
            <div className="filters d-flex">
              <FilterButtons
                filter={filter}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}
        </div>

        {isAboutPage && (
          <div className="filters d-flex">
            <FilterButtons
              filter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
        )}

        <div className="cards-container">
          {filteredData.map((item) => (
            <div key={item.id} className="card d-flex">
              <img src={item.image} alt={item.name} />
              <div className="card-text">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {!isAboutPage && (
          <button className="council-btn btn-secondary">
            Детальніше про раду
            <img src={ArrowUp} alt="" />
          </button>
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
    margin: 24px 0 40px 0;
    gap: 16px;
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
  }
`;

export default Council;
