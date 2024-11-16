//Styled
import styled from "styled-components";

const AboutText = () => {
  return (
    <StyledAboutText>
      <div className="container">
        <p>
          Тривале поліпшення, модернізація персоналу, розробка оптимальних
          торгових марок та універсальні технології забезпечили компанії
          визнання і провідну роль на світовому ринку.
        </p>
        <p>
          Хочемо вражати домашніх улюбленців комфортом продуктів харчування і
          прагнемо розвивати кабельне телебачення, юридичний захист ваших прав і
          передачу даних разом із клієнтами. Наша мета проста: це надання вам
          інновацій, відкриттів та глобального громадянства. Стабільно надається
          широкий вибір зберігання даних: розробка програмного забезпечення,
          кімнатні й садові рослини і інформаційні технології для стильних
          особистостей і гостей столиці. З 2002-го року компанія застосовує
          вигідні комп'ютерні технології неперервної інтеграції, безпрограшних
          домовленостей та новаторства.
        </p>
      </div>
    </StyledAboutText>
  );
};

const StyledAboutText = styled.section`
  text-align: center;
  padding: 80px 0 128px 0;

  .container {
    padding: 0 150px;

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: var(--1c1f1c);
    }

    p:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 12px 56px 12px;
    .container {
      padding: 0;
    }
  }
`;

export default AboutText;
