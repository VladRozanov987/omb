import { useState } from "react";

//Styled
import styled from "styled-components";

// Images
import logo from "../assets/img/Logo.png";

// Icons
import insta from "../assets/icons/insta.svg";
import instaHov from "../assets/icons/insta-hov.svg";
import linked from "../assets/icons/linked.svg";
import linkedHov from "../assets/icons/linked-hov.svg";
import facebook from "../assets/icons/facebook.svg";
import facebookHov from "../assets/icons/facebook-hov.svg";
import ArrowUpRight from "../assets/icons/ArrowUpRight.svg";

//Router
import { Link } from "react-router-dom";

//Modal
import ContactFormModal from "../components/ContactFormModal.component";

const Header = () => {
  const handleScrollToQuestions = () => {
    if (typeof window.scrollToQuestions === "function") {
      window.scrollToQuestions();
    }
  };

  const handleScrollToFooter = () => {
    if (typeof window.scrollToFooter === "function") {
      window.scrollToFooter();
    }
  };

  const [hoveredIcons, setHoveredIcons] = useState({
    insta: false,
    linked: false,
    facebook: false,
  });

  const handleMouseEnter = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: false }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledHeader>
      <div className="container d-flex">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/about">Про нас</Link>
          </li>
          <li>
            <a onClick={handleScrollToQuestions}>Питання</a>
          </li>
          <li>
            <Link to="/news">Новини</Link>
          </li>
          <li>
            <a onClick={handleScrollToFooter}>Контакти</a>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="#"
              onMouseEnter={() => handleMouseEnter("insta")}
              onMouseLeave={() => handleMouseLeave("insta")}
            >
              <img
                src={hoveredIcons.insta ? instaHov : insta}
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              onMouseEnter={() => handleMouseEnter("linked")}
              onMouseLeave={() => handleMouseLeave("linked")}
            >
              <img
                src={hoveredIcons.linked ? linkedHov : linked}
                alt="Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              onMouseEnter={() => handleMouseEnter("facebook")}
              onMouseLeave={() => handleMouseLeave("facebook")}
            >
              <img
                src={hoveredIcons.facebook ? facebookHov : facebook}
                alt="Facebook"
              />
            </a>
          </li>
        </ul>

        <div>
          <a className="tel_number" href="tel:+0 800 501 720">
            0 800 501 720
          </a>
          <p className="tel_text">(гаряча лінія)</p>
        </div>

        <button className="btn-primary" onClick={openModal}>
          Зв’язатись з омбудсменом
          <img src={ArrowUpRight} alt="ArrowUpRight" />
        </button>

        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 24px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav,
  nav > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ul > li {
    :hover {
      text-decoration: underline;
      color: var(--245daa);
    }
  }

  ul > li:not(:last-child) {
    margin-right: 24px;
  }

  .tel_number {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #232824;
  }

  .tel_text {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 12px;
    line-height: 150%;
    text-align: right;
    color: var(--464646);
  }
`;

export default Header;
