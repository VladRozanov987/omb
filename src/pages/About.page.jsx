//Styled
import styled from "styled-components";

//Img
import aboutImg from "../assets/img/about.jpg";

//Icons
import qm from "../assets/icons/qm.svg";
import AboutSecondary from "../components/AboutSecondary.component";
import Council from "../components/Council.component";
import Banner from "../components/Banner.component";
import AboutText from "../components/AboutText.component";

const AboutPage = () => {
  return (
    <>
      <StyledAbout>
        <div className="container">
          <h2>Про нас</h2>
          <div className="about-text">
            <h4>
              Кожен громадянин може подати звернення щодо <br /> порушення його
              прав та отримати захист, адже саме <br /> Уповноважений Верховної
              Ради України з прав людини <br /> здійснює парламентський контроль
              за додержанням <br /> конституційних прав і свобод людини і
              громадянина.
            </h4>
            <h5>Марчук Вероніка Олена </h5>
            <p>
              Представник Уповноваженого Верховної Ради <br /> України з прав
              людини в Республіці Польща
            </p>
          </div>
        </div>
      </StyledAbout>
      <AboutSecondary />
      <Council title="Регіональні представники" isAboutPage={true} />
      <Banner />
      <AboutText />
    </>
  );
};

const StyledAbout = styled.section`
  margin-top: 100px;
  min-height: calc(100vh - 100px);
  background-image: url(${aboutImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    position: relative;
    z-index: 1;
    padding-top: 55px;
  }

  .about-text {
    position: relative;
    margin-top: 150px;
    max-width: 710px;

    &::before {
      content: "";
      position: absolute;
      top: -35px;
      left: -60px;
      width: 93px;
      height: 70px;
      background-image: url(${qm});
      background-repeat: no-repeat;
      background-size: contain;
      z-index: -1;
    }
    h4 {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 20px;
      line-height: 200%;
      color: var(--1c1f1c);
      margin-bottom: 48px;
    }
    h5 {
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
    .text-container {
      max-width: 1020px;
      display: flex;
      flex-direction: column;
      justify-self: center;
    }
  }
`;

export default AboutPage;
