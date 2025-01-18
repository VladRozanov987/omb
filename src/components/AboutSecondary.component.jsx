//Styled
import styled from "styled-components";

//Img
import secondPhoto from "../assets/img/secPhoto.jpg";
import firstPhoto from "../assets/img/secondaryAbout.png";

// i18n
import { useTranslation } from "react-i18next";

const AboutSecondary = () => {
  const { t } = useTranslation();

  return (
    <StyledAboutSecondary>
      <div className="container">
        <div className="wrapper d-flex">
          <img className="first-img" src={firstPhoto} alt="firstPhoto" />
          <div className="text-block">
            <p>{t("aboutSec.p1")}</p>
            <p>{t("aboutSec.p2")}</p>
          </div>
        </div>
        <div className="reverse-wrapper d-flex">
          <div className="text-block">
            <p>{t("aboutSec.p3")}</p>
            <p>{t("aboutSec.p4")}</p>
          </div>
          <img className="second-img" src={secondPhoto} alt="secondPhoto" />
        </div>
      </div>
    </StyledAboutSecondary>
  );
};

const StyledAboutSecondary = styled.section`
  padding: 48px 0;
  .d-flex {
    align-items: center;
  }
  .first-img {
    max-width: 100%;
    margin-right: 65px;
  }
  .text-block {
    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
    }
    p:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  .reverse-wrapper {
    margin-top: 128px;
  }
  .second-img {
    max-width: 100%;
    margin-left: 126px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    .wrapper,
    .reverse-wrapper {
      flex-direction: column;
    }
    .reverse-wrapper {
      margin-top: 56px;
    }
    .first-img {
      margin: 0 0 24px 0;
    }
    .second-img {
      margin: 24px 0 0 0;
    }
  }
`;

export default AboutSecondary;
