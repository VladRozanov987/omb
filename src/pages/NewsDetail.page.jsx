import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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

// i18n
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const newsItem = newsData.find((news) => news.id === parseInt(id));

  const newsItemImageUrl = `${window.location.origin}${newsItem.image}`;

  if (!newsItem) {
    return <h2>{t("newsDetail.notFind")}</h2>;
  }

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(newsItem.name)}`;
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
      <Helmet>
        <meta property="og:title" content={newsItem.name} />
        <meta property="og:description" content={newsItem.text} />
        <meta property="og:image" content={newsItemImageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsItem.name} />
        <meta name="twitter:description" content={newsItem.text} />
        <meta name="twitter:image" content={newsItem.image} />
      </Helmet>
      <div className="container">
        <StyledWrapper>
          <h2>{t(`newsComponent.item.${id}.title`)}</h2>
          <span>{newsItem.date}</span>
          <img src={newsItem.image} alt={newsItem.name} />
          <div
            className="news-text"
            dangerouslySetInnerHTML={{
              __html: t(`newsComponent.item.${id}.text`),
            }}
          />

          <div className="share d-flex">
            <p>{t("newsDetail.share")}</p>

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
      <News
        title={t("newsDetail.same")}
        limit={2}
        showButton={false}
        initialLimit={2}
        hideShowMoreButton={true}
      />
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

  h2,
  h3 {
    margin-bottom: 24px;
  }

  ul {
    display: block;
    list-style-type: disc;
  }

  a {
    color: var(--245daa);
  }

  span {
    margin-bottom: 32px;
  }

  ul {
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
    margin-bottom: 24px;
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
      margin-bottom: 56px;
    }
  }
`;

export default NewsDetail;
