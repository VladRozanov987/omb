//Styled
import styled from "styled-components";

//Data
import AccordionList from "./Accordion.component";

//Icons
import ArrowUp from "../assets/icons/ArrowUpRightW.svg";

//Modal
import ContactFormModal from "./ContactFormModal.component";

import { useState } from "react";

const Questions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledQuestions>
      <div className="container d-flex">
        <div className="questions-aside">
          <h2>Основні категорії прав та принципи, які захищає Уповноважений</h2>
          <p>
            Ви можете звернутися з питаннями щодо соціального захисту, прав на
            освіту, економічної підтримки та інших важливих аспектів вашого
            життя за межами України. Захистимо ваші права разом!
          </p>
          <button className="btn-secondary" onClick={openModal}>
            Зв’язатись з омбудсманом <img src={ArrowUp} alt="ArrowUp" />
          </button>
        </div>
        <div className="accordion-container">
          <AccordionList />
        </div>
      </div>

      {isModalOpen && (
        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      )}
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

  @media screen and (max-width: 768px) {
    padding-top: 56px;
    .container {
      flex-direction: column;
    }
    .questions-aside {
      max-width: 100%;
      width: auto;
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 107%;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 171%;
        color: #6e6e6e;
      }
      .btn-secondary {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .accordion-container {
      margin-top: 24px;
      padding: 0;
    }
  }
`;

export default Questions;
