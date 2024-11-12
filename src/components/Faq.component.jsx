//Styled
import styled from "styled-components";

//Data
import FaqList from "./FaqList.component";

const Faq = () => {
  return (
    <StyledFaq>
      <div className="container">
        <div className="faq-aside">
          <h2>Відповіді на часті питання</h2>
          <p>
            У цьому розділі зібрано відповіді на найактуальніші питання, з якими
            можуть стикатися українці, які перебувають у Польщі
          </p>
        </div>
        <div className="accordion-container">
          <FaqList />
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
