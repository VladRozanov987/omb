//Styled
import styled from "styled-components";

//Icons
import arrowUp from "../assets/icons/ArrowUpRightW.svg";

//Data
import { data as newsData } from "../data/News.data";

//Router
import { Link } from "react-router-dom";

const News = ({ title = "Останні новини", limit, showButton }) => {
  const newsToDisplay = limit ? newsData.slice(0, limit) : newsData;

  return (
    <StyledNews>
      <div className="container">
        <div className="news-container d-flex">
          <h2>{title}</h2>
          {showButton && (
            <button className="btn-secondary">
              Переглянути всі новини <img src={arrowUp} alt="arrowUp" />
            </button>
          )}
        </div>

        <div className="news-items">
          {newsToDisplay.map(({ id, name, text, date, image }) => (
            <div key={id} className="news-item">
              <img src={image} alt={name} className="news-image" />
              <div className="news-content">
                <h3>
                  <Link to={`/news/${id}`}>{name}</Link>
                </h3>
                <p>{text}</p>
                <span className="news-date">{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledNews>
  );
};

const StyledNews = styled.section`
  .news-container {
    justify-content: space-between;
  }

  .news-items {
    cursor: pointer;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

    img {
      max-width: 100%;
      margin-bottom: 16px;
    }
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
`;

export default News;
