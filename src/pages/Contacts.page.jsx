import { useState } from "react";

//Styled
import styled from "styled-components";

//Icons
import arrow from "../assets/icons/ArrowUpRight.svg";

// Modal
import ContactFormModal from "../components/ContactFormModal.component";

//Components
import Info from "../components/Info.section.component";
import Banner from "../components/Banner.component";
import News from "../components/News.component";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledContacts>
      <div className="container">
        <h2 className="contacts-header">Контакти</h2>
        <div className="text-block">
          <h3>
            Представництво Уповноваженого Верховної Ради України з прав людини в
            Республіці Польща
          </h3>

          <div className="d-flex">
            <div className="text-block-el">
              <span>Адреса</span>
              <p>Алея Єрозолімські 109, офіс 70,02-797, Варшава, Польща</p>
              <span>Пошта</span>
              <a href="mailto:ombudsman@ombudsman.pl">ombudsman@ombudsman.pl</a>
              <span>Номер телефону</span>
              <a href="tel:+48 605 110 05">+48 605 110 05</a>
            </div>

            <div className="text-block-el">
              <span>Гаряча лінія в Польщі</span>
              <a href="tel:+48 605 110 05">+48 605 110 05</a>
              <span>Громадська приймальня у Варшаві працює:</span>
              <p>
                Понеділок - п’ятниця: з 9:00 до 17:00 Субота та неділя: вихідні
              </p>
            </div>
          </div>

          <button className="btn-primary contacts-btn" onClick={openModal}>
            Відправити запит до Представництва у Польщі
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-block">
          <h3>
            Громадська приймальня Уповноваженого Верховної Ради України з прав
            людини в Україні
          </h3>

          <div className="d-flex">
            <div className="text-block-el">
              <span>Адреса</span>
              <p>вул. Інститутська, 21/8, 01008, м. Київ, Україна</p>
              <span>Режим роботи</span>
              <p>
                Понеділок - п’ятниця: з 9:00 до 17:00 Субота та неділя: вихідні
              </p>
              <span>Пошта</span>
              <div className="flex-col">
                <a href="mailto:hotline@ombudsman.gov.ua">
                  hotline@ombudsman.gov.ua
                </a>
                <span className="flex-col-span">
                  (виключно для електронних звернень та адвокатських запитів)
                </span>
              </div>
              <div className="flex-col">
                <a href="mailto:zapyt@ombudsman.gov.ua">
                  zapyt@ombudsman.gov.ua
                </a>
                <span className="flex-col-span">
                  (виключно для запитів на інформацію)
                </span>
              </div>
            </div>

            <div className="text-block-el">
              <span>Гаряча лінія в Україні</span>
              <a href="tel:+0800-50-17-20">0800-50-17-20 (безкоштовно)</a>
              <a href="tel:+044-299-74-08">044-299-74-08</a>
              <span>Режим роботи гарячої лінії</span>
              <p>
                Понеділок - п'ятниця з 8:00-19:00, субота, неділя з 9:00 -15:00
              </p>
            </div>
          </div>
        </div>
        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="styled-info">
        <Info />
      </div>
      <div className="styled-banner">
        <Banner />
      </div>
      <News limit={2} showButton={true} />
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin-top: 100px;
  padding-top: 80px;
  padding-bottom: 128px;
  min-height: calc(100vh - 100px);
  .styled-banner {
    margin-top: -128px;
  }
  .d-flex {
    gap: 32px;
  }
  .contacts-header {
    font-weight: 700;
    font-size: 56px;
    line-height: 114%;
    margin-bottom: 64px;
  }
  .contacts-btn {
    max-width: 445px;
    margin-top: 40px;
  }
  .text-block:last-child {
    margin-bottom: 128px;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-col-span {
    font-weight: 400;
    font-size: 14px;
    color: var(--464646);
  }
  .text-block {
    margin-bottom: 64px;
    h3 {
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      color: var(--1c1f1c);
      margin-bottom: 24px;
      max-width: 760px;
    }
    span {
      font-weight: 300;
      font-size: 14px;
      line-height: 229%;
      color: var(--464646);
    }
    p,
    a {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--1c1f1c);
    }
    .text-block-el {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 64px;
    margin-top: 64px;
    .contacts-header {
      font-weight: 700;
      font-size: 30px;
      line-height: 107%;
      margin-bottom: 32px;
    }
    .text-block:last-child {
      margin-bottom: 64px;
    }
    .text-block {
      margin-top: 32px;
      margin-bottom: 40px;
      .contacts-btn {
        max-width: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 133%;
      }
      span {
        font-weight: 300;
        font-size: 14px;
        line-height: 229%;
      }
      p,
      a {
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
      }
    }
    .d-flex {
      flex-direction: column;
    }
  }
  .styled-info {
    padding-bottom: 84px;
  }
`;

export default Contacts;
