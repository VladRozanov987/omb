//Styled
import styled from "styled-components";

//Img
import BG from "../assets/img/BG.jpg";
import mobBG from "../assets/img/mobileBG.png";

//Icons
import qm from "../assets/icons/qm.svg";

//Components
import AboutSecondary from "../components/AboutSecondary.component";
import Council from "../components/Council.component";
import Banner from "../components/Banner.component";
import AboutText from "../components/AboutText.component";

// i18n
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledAbout>
        <div className="container">
          <div className="about-text">
            <h2>{t("aboutSec.title")}</h2>
            <p>{t("aboutSec.text")}</p>
          </div>
          <div className="mobile-bg">
            <img src={mobBG} alt="BG-image" />
          </div>
        </div>
      </StyledAbout>
      <AboutSecondary />
      <Council isAboutPage={true} initialFilter="Expert" />
      <Banner />
      <AboutText />
    </>
  );
};

const StyledAbout = styled.section`
  padding-top: 155px;
  margin-top: 100px;
  min-height: calc(100vh - 100px);
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .about-text {
    max-width: 658px;
    p {
      margin-top: 32px;
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
    }
  }
  .mobile-bg {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 65px;
    padding-top: 40px;
    min-height: auto;
    background-image: none;
    .about-text {
      max-width: auto;
      h2 {
        font-weight: 700;
        font-size: 30px !important;
        line-height: 107%;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 171%;
      }
    }
    .mobile-bg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default AboutPage;
