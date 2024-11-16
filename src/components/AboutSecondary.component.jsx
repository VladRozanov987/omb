//Styled
import styled from "styled-components";

//Img
import secondPhoto from "../assets/img/news1.jpg";
import firstPhoto from "../assets/img/secondaryAbout.png";

const AboutSecondary = () => {
  return (
    <StyledAboutSecondary>
      <div className="container">
        <div className="wrapper d-flex">
          <img className="first-img" src={firstPhoto} alt="firstPhoto" />
          <div className="text-block">
            <p>
              Очолює офіс у Польщі Марчук Вероніка , яка представляє
              Уповноваженого з прав людини та керує діяльністю команди,
              спрямованої на допомогу українцям у різних питаннях, пов’язаних із
              правовим захистом.
            </p>
            <p>
              Крім того, при офісі діє Рада експертів, що складається з
              професіоналів у різних напрямках: трудове право, екологічна
              безпека, економічні питання, культурні права тощо. Експерти
              консультують та надають підтримку на волонтерських засадах,
              вносячи вагомий вклад у роботу офісу. Їхні знання та досвід
              допомагають більш ефективно та оперативно реагувати на запити
              громадян і забезпечувати належний захист їхніх прав.
            </p>
          </div>
        </div>
        <div className="reverse-wrapper d-flex">
          <div className="text-block">
            <p>
              Ми є незалежною інституцією, що виступає за права людини, надаючи
              підтримку та допомогу тим, хто цього потребує.
            </p>
            <p>
              Наша діяльність базується на Конституції України, яка визначає
              наші повноваження у сфері захисту прав людини та надає нам доступ
              до місць, де права і свободи можуть бути порушені. Незалежно від
              того, чи стосується питання трудових прав, безпеки навколишнього
              середовища, економічних питань або культурних прав, наша місія —
              відстоювати гідність та добробут кожного українця.
            </p>
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
