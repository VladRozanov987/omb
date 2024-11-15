import { useState } from "react";

// Styled
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
import call from "../assets/icons/call.svg";
import burgerIcon from "../assets/icons/burger-icon.svg";

// Router
import { Link, useNavigate } from "react-router-dom";

// Modal
import ContactFormModal from "../components/ContactFormModal.component";

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIcons, setHoveredIcons] = useState({
    insta: false,
    linked: false,
    facebook: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToQuestions = () => {
    navigate("/", { state: { scrollTo: "questions" } });
  };

  const handleScrollToFooter = () => {
    if (typeof window.scrollToFooter === "function") {
      window.scrollToFooter();
    }
  };

  const handleMouseEnter = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: false }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader>
      <div className="container d-flex">
        <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={burgerIcon} alt="Burger Menu" />
        </div>

        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <div className="desctop-menu d-flex">
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
        </div>

        <button className="btn-primary" onClick={openModal}>
          <span className="button-text">Зв’язатись з омбудсменом</span>
          <img className="arrow-icon" src={ArrowUpRight} alt="ArrowUpRight" />
        </button>

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="mob-link-list">
            <li>
              <Link onClick={closeMenu} to="/">
                Головна
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about">
                Про нас
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  handleScrollToQuestions();
                  closeMenu();
                }}
              >
                Питання
              </a>
            </li>
            <li>
              <Link onClick={closeMenu} to="/news">
                Новини
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  handleScrollToQuestions();
                  closeMenu();
                }}
              >
                Контакти
              </a>
            </li>
            <ul className="mob-menu-social">
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
          </ul>
          <div className="mob-phone">
            <a className="tel_number" href="tel:+0 800 501 720">
              0 800 501 720
            </a>
            <p className="tel_text">(гаряча лінія)</p>
          </div>
          <button className="mob-menu-btn" onClick={openModal}>
            Зв’язатись з омбудсменом
            <img className="arrow-icon" src={ArrowUpRight} alt="ArrowUpRight" />
          </button>
        </div>

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

  .burger-menu {
    display: none;
    cursor: pointer;
  }

  .desctop-menu ul {
    margin-right: 37px;
    li:not(:last-child) {
      margin-right: 24px;
    }
  }

  //Mobile
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: calc(100vh - 24px);
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 12px;
    display: flex;
    flex-direction: column;
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-menu.open {
    transform: translateX(0);
  }

  .mob-link-list {
    display: flex;
    flex-direction: column;
    li {
      margin: 16px 0;
    }
    li a {
      font-weight: 400;
      font-size: 18px;
      color: #232824;
    }
  }

  .mob-menu-social {
    display: flex;
    margin-top: 20px;
    li {
      margin: 0;
    }
    li > a {
      margin-right: 40px;
    }
  }

  .mob-menu-btn {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: var(--1c1f1c);
    border-radius: 16px;
    padding: 16px;
    background: var(--ffc50a);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }

  .mob-phone {
    margin: 16px 0 24px 0;
  }

  //Media
  @media (max-width: 768px) {
    padding: 12px;
    .burger-menu {
      display: block;
    }

    .btn-primary {
      padding: 13px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button-text {
      display: none;
    }

    .arrow-icon {
      content: url(${call});
      width: 20px;
    }
    .logo {
      width: 164px;
    }

    .desctop-menu {
      display: none;
    }
  }
`;

export default Header;
