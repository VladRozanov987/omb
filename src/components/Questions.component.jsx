//Styled
import styled from "styled-components";

//Data
import AccordionList from "./Accordion.component";

//Icons
import ArrowUp from "../assets/icons/ArrowUpRightW.svg";

const Questions = () => {
  return (
    <StyledQuestions>
      <div className="container d-flex">
        <div className="questions-aside">
          <h2>Перелік питань, за якими можна звернутись до омбудсмена</h2>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи,{" "}
          </p>
          <button className="btn-secondary">
            Зв’язатись з омбудсменом <img src={ArrowUp} alt="ArrowUp" />{" "}
          </button>
        </div>
        <div className="accordion-container">
          <AccordionList />
        </div>
      </div>
    </StyledQuestions>
  );
};

const StyledQuestions = styled.section`
  padding-top: 128px;

  .container {
    display: flex;
  }

  .questions-aside {
    max-width: 566px;
    width: 566px;

    h2 {
      max-width: 514px;
      margin-bottom: 48px;
    }

    p {
      max-width: 430px;
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
      margin-bottom: 40px;
    }
  }

  .accordion-container {
    margin-top: 128px;
    flex: 1;
    padding-left: 24px;
  }
`;

export default Questions;
