//Styled
import styled from "styled-components";
import { useState } from "react";

//Img
import bannerBg from "../assets/img/banner.jpg";

//Icons
import arrowUp from "../assets/icons/ArrowUpRight.svg";

// Modal
import ContactFormModal from "./ContactFormModal.component";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledBanner>
      <div className="container d-flex">
        <div className="banner-text">
          <h4>Виникли питання?</h4>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи,{" "}
          </p>
        </div>
        <button className="btn-primary" onClick={openModal}>
          Зв’язатись з омбудсменом <img src={arrowUp} alt="ArrowUp" />{" "}
        </button>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  margin-top: 128px;
  background-image: url(${bannerBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .container {
    border-radius: 24px;
    padding: 112px 80px;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 16px 24px;
      font-family: var(--second-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: var(--1c1f1c);
    }
  }

  .banner-text {
    max-width: 689px;

    h4 {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 56px;
      line-height: 114%;
      color: #fff;
    }

    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 187%;
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    margin: 56px 0;
    .container {
      flex-direction: column;
      padding: 56px 10px;
    }
    .banner-text {
      h4 {
        font-weight: 700;
        font-size: 32px;
        line-height: 125%;
        margin-bottom: 16px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 171%;
        margin-bottom: 32px;
      }
    }
    .btn-primary {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default Banner;
