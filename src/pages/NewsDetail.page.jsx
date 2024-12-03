import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//Styled
import styled from "styled-components";

//Component
import News from "../components/News.component";
import Banner from "../components/Banner.component";

//Icons
import X from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import telegram from "../assets/icons/telegram.svg";

//Data
import { data as newsData } from "../data/News.data";

const NewsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const newsItem = newsData.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return <h2>Новина не знайдена</h2>;
  }

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(newsItem.name)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const shareOnTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(newsItem.name)}`;
    window.open(telegramUrl, "_blank", "width=600,height=400");
  };

  return (
    <StyledNews>
      <div className="container">
        <StyledWrapper>
          <h2>{newsItem.name}</h2>
          <span>{newsItem.date}</span>
          <img src={newsItem.image} alt={newsItem.name} />
          <div
            className="news-text"
            dangerouslySetInnerHTML={{ __html: newsItem.text }}
          />

          <div className="share d-flex">
            <p>Поділитись новиною:</p>

            <img
              className="share-btn"
              src={X}
              alt="X"
              onClick={shareOnTwitter}
            />
            <img
              className="share-btn"
              src={facebook}
              alt="facebook"
              onClick={shareOnFacebook}
            />
            <img
              className="share-btn"
              src={telegram}
              alt="telegram"
              onClick={shareOnTelegram}
            />
          </div>
        </StyledWrapper>
      </div>
      <News title="Схожі новини" limit={2} showButton={false} />
      <Banner />
    </StyledNews>
  );
};

const StyledNews = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 65px;
  }
`;

const StyledWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;

  h2 {
    margin-bottom: 24px;
  }

  ul {
    display: block;
    list-style-type: disc;
  }

  span {
    margin-bottom: 32px;
  }

  img {
    border-radius: 50px;
    margin-bottom: 32px;
  }

  .share-btn {
    cursor: pointer;
  }

  .news-text p {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 187%;
    color: var(--1c1f1c);
    margin-bottom: 32px;
  }

  .news-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: var(--1c1f1c);
    margin-bottom: 16px;
  }

  .share {
    border-top: 1px solid #b9b9b9;
    margin-top: 64px;
    padding-top: 24px;
    align-items: center;
    justify-content: start;

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 200%;
      color: #000;
      margin-right: 30px;
    }

    img {
      width: 24px;
      margin: 0 40px 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-weight: 700;
      font-size: 30px;
      line-height: 107%;
      margin-bottom: 0;
    }
    span {
      margin: 16px 0;
      font-weight: 300;
      font-size: 14px;
      color: var(--1c1f1c);
    }
    img {
      margin-bottom: 24px;
    }
    .news-text {
      font-weight: 300;
      font-size: 14px;
      line-height: 171%;
    }
    .news-title {
      font-weight: 500;
      font-size: 18px;
      line-height: 178%;
    }
    .share {
      margin-top: 0;
    }
  }
`;

export default NewsDetail;
