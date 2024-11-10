//Styled
import styled from "styled-components";

//Img
import secondPhoto from "../assets/img/secondaryAbout.png";

const AboutSecondary = () => {
  return (
    <StyledAboutSecondary>
      <div className="container d-flex">
        <img src={secondPhoto} alt="secondPhoto" />
        <div className="text-block">
          <h2>Перелік питань, за якими можна звернутись до омбудсмена</h2>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи
          </p>
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
  .text-block {
    margin-left: 77px;
    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
      margin-top: 48px;
    }
  }
`;

export default AboutSecondary;
