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

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .faq-aside {
      max-width: 100%;
      width: auto;
      margin: 0;
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 107%;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 171%;
      }
    }
  }
`;

export default Faq;
