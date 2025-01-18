import styled from "styled-components";
import order from "../assets/img/order.jpg";

// i18n
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();
  return (
    <StyledOrder>
      <div className="container">
        <p className="order-text">{t("orderPage.breadcrumb")}</p>
        <h2
          className="order-title"
          dangerouslySetInnerHTML={{ __html: t("orderPage.title") }}
        ></h2>
        <div className="wrapper">
          <img className="wrapper-img" src={order} alt="order" />
          <div className="wrapper-text">
            <p>{t("orderPage.orderText1")}</p>
            <p>{t("orderPage.orderText2")}</p>
          </div>
        </div>
        <div className="order-info">
          <div className="info-block">
            <div className="info-title">
              <h3>{t("orderPage.submitEmailTitle")}</h3>
            </div>
            <div className="info-text">
              <h4>{t("orderPage.email")}</h4>
              <p>{t("orderPage.emailText")}</p>
              <p className="info-text-colored">{t("orderPage.formLink")}</p>
            </div>
          </div>
          <div className="info-block">
            <div className="info-title">
              <h3>{t("orderPage.submitMailTitle")}</h3>
            </div>
            <div className="info-text">
              <h5>{t("orderPage.mailAddress")}</h5>
            </div>
          </div>
          <div className="info-block">
            <div className="info-title">
              <h3>{t("orderPage.hotlineTitle")}</h3>
            </div>
            <div className="info-text last">
              <p className="info-text-line">{t("orderPage.hotlineText")}</p>
              <div className="info-number">
                <a href={`tel:${t("orderPage.hotlineNumbers.first")}`}>
                  {t("orderPage.hotlineNumbers.first")}
                </a>
                <span>{t("orderPage.hotlineDescription1")}</span>
              </div>
              <div className="info-number">
                <a href={`tel:${t("orderPage.hotlineNumbers.second")}`}>
                  {t("orderPage.hotlineNumbers.second")}
                </a>
                <span>{t("orderPage.hotlineDescription2")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-banner">
          <p className="order-banner-text">{t("orderPage.bannerText")}</p>
          <p className="order-banner-office">{t("orderPage.bannerOffice")}</p>
          <div className="order-web d-flex">
            <a
              className="order-web-link"
              href={`mailto:${t("orderPage.emailLinks.first")}`}
            >
              {t("orderPage.emailLinks.first")}
            </a>
            <a
              className="order-web-link"
              href={`mailto:${t("orderPage.emailLinks.second")}`}
            >
              {t("orderPage.emailLinks.second")}
            </a>
          </div>
        </div>
      </div>
    </StyledOrder>
  );
};

const StyledOrder = styled.section`
  margin-top: 150px;
  padding: 16px 0 128px 0;

  .order-text {
    font-weight: 300;
    font-size: 14px;
    line-height: 171%;
    color: var(--464646);
  }

  .order-title {
    font-weight: 700;
    font-size: 56px;
    line-height: 114%;
    margin: 40px 0 64px 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .wrapper-img {
    position: relative;
    left: -105px;
    border-radius: 30px;
    max-width: 584px;
    width: 100%;
  }

  .wrapper-text {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
    }
    p:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .info-block {
    display: flex;
    justify-content: space-between;
    margin: 64px 0;
  }

  .info-title {
    width: 24%;
    h3 {
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      color: var(--1c1f1c);
    }
  }

  .info-text {
    width: 70%;
    margin-top: 63px;
    h4 {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--245daa);
      margin-bottom: 20px;
    }
    h5 {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--1c1f1c);
    }
    p,
    span {
      font-weight: 300;
      font-size: 14px;
      color: #6e6e6e;
    }
    .info-text-colored {
      color: var(--1c1f1c);
    }
    .info-text-span {
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: var(--245daa);
    }
    .info-text-line {
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: var(--464646);
    }
  }

  .last {
    margin-top: 20px;
  }

  .info-number {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    a {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--1c1f1c);
    }
    span {
      font-weight: 300;
      font-size: 14px;
      line-height: 229%;
      color: var(--464646);
    }
  }

  .order-banner {
    border: 5px solid #67a4c7;
    border-radius: 30px;
    padding: 40px 44px 48px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(36, 93, 170, 0.1) 0%,
      rgba(224, 210, 157, 0.1) 100%
    );
  }
  .order-banner-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 187%;
    text-align: center;
    color: var(--1c1f1c);
    margin-bottom: 24px;
  }

  .order-banner-office {
    font-weight: 400;
    margin-bottom: 16px;
  }

  .order-web-link {
    color: var(--245daa);
  }
  .order-web-link:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding-bottom: 56px;
    .wrapper-text {
      font-weight: 300;
      font-size: 14px;
      line-height: 171%;
    }
    .order-text {
      display: none;
    }
    .order-title {
      font-weight: 700;
      font-size: 30px;
      line-height: 107%;
      margin: 32px 0;
    }
    .wrapper,
    .info-block {
      flex-direction: column;
    }
    .info-block {
      margin: 40px 0 0 0;
    }
    .wrapper-img {
      left: 0;
      margin-bottom: 32px;
    }
    .info-title,
    .info-text {
      width: 100%;
    }
    .info-title {
      font-weight: 400;
      font-size: 24px;
      line-height: 133%;
    }
    .info-text {
      margin: 16px 0;
      font-weight: 300;
      font-size: 14px;
      line-height: 171%;
    }
    .order-banner {
      margin-top: 40px;
    }
    .order-web {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export default Order;
