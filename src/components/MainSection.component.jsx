//Styled
import styled from "styled-components";

//Icons
import ArrowUpRightW from "../assets/icons/ArrowUpRightW.svg";

//Img
import BG from "../assets/img/BG.jpg";
import test from "../assets/img/test.png";

//Router
import { Link } from "react-router-dom";

//Translate
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <div className="container">
        <div className="main-aside">
          <h1>{t("mainSection.title")}</h1>
          <p>{t("mainSection.description")}</p>
        </div>
        <div className="wrapper">
          <Link to="/about" className="btn-secondary">
            {t("mainSection.detailsButton")}{" "}
            <img src={ArrowUpRightW} alt="ArrowUpRight" />
          </Link>

          <div className="main-name">
            <h3>{t("mainSection.representativeName")}</h3>
            <p>{t("mainSection.representativePosition")}</p>
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  margin-top: 100px;
  padding-top: 150px;
  min-height: calc(100vh - 100px);
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  h1 {
    max-width: 780px;
  }

  p {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 187%;
    color: #6e6e6e;
    max-width: 546px;
    margin-top: 32px;
    margin-bottom: 40px;
  }

  .btn-secondary {
    display: inline-flex;
    width: auto;
    border-radius: 16px;
    align-items: center;
    img {
      margin-left: 4px;
    }
  }

  .main-name {
    margin-top: 78px;
    max-width: 388px;
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-self: center;

    h3 {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 20px;
      text-align: right;
      color: var(--1c1f1c);
    }

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 14px;
      line-height: 171%;
      text-align: right;
      color: #6e6e6e;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: url(${test});
    padding-top: 40px;
    min-height: auto;
    margin-top: 116px;
    .wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
    .main-name {
      margin-top: 0;
      margin-bottom: 27px;
      max-width: 215px;
      h3 {
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        color: var(--1c1f1c);
      }
      p {
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        color: #6e6e6e;
      }
    }
    .main-aside {
      max-width: 190px;
      h1 {
        font-weight: 700;
        font-size: 30px;
        line-height: 107%;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 171%;
        color: #6e6e6e;
      }
    }
    .btn-secondary {
      margin-top: 60px;
      width: 100%;
      justify-content: center;
    }
  }
`;

export default MainSection;
