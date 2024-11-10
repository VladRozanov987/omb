//Styled
import styled from "styled-components";

//Data
import AccordionList from "./Accordion.component";

const Faq = () => {
  return (
    <StyledFaq>
      <div className="container">
        <div className="faq-aside">
          <h2>FAQ</h2>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи,{" "}
          </p>
        </div>
        <div className="accordion-container">
          <AccordionList />
        </div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled.section`
  padding: 128px 0;
  .container {
    display: flex;
  }

  .faq-aside {
    max-width: 443px;
    width: 443px;
    margin-right: 161px;
    h2 {
      max-width: 400px;
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
    margin-top: 38px;
    flex: 1;
  }
`;

export default Faq;
