//Styled
import styled from "styled-components";

//Img
import Logo from "../assets/img/Logo.png";

// Icons
import insta from "../assets/icons/insta.svg";
import instaHov from "../assets/icons/insta-hov.svg";

import linked from "../assets/icons/linked.svg";
import linkedHov from "../assets/icons/linked-hov.svg";

import facebook from "../assets/icons/facebook.svg";
import facebookHov from "../assets/icons/facebook-hov.svg";
import { useState } from "react";

const Footer = () => {
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

  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-links">
          <img src={Logo} alt="Logo" />
          <ul>
            <li>
              <a
                href=""
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
                href=""
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
                href=""
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
        </div>
        <div className="footer-text">
          <div className="footer-text-left">
            <div className="text-block">
              <h3>Україна, 01008, м. Київ,</h3>
              <h3>вул. Інститутська, 21/8</h3>
            </div>
            <div className="text-block">
              <span>Громадська приймальня працює:</span>
              <h3>понеділок - п'ятниця з 9:00-17:00</h3>
              <h3>субота та неділя — вихідні</h3>
            </div>
            <div className="text-block">
              <a className="tel_number" href="tel:+0 800 501 720">
                0 800 501 720 <span>(гаряча лінія)</span>
              </a>
              <a className="tel_number" href="tel:+044 299 74 08">
                044 299 74 08
              </a>
            </div>
            <div className="text-block">
              <a className="mail-to" href="mailto:hotline@ombudsman.gov.ua ">
                hotline@ombudsman.gov.ua 
              </a>
              <p>виключно для електронних звернень </p>
            </div>
            <div className="text-block">
              <a href="https://ombudsman.gov.ua/">Сайти Омбудсмена України</a>
              <a href="https://poland.mfa.gov.ua/">
                Сайт генконсульства України в Польщі
              </a>
              <a href="https://mfa.gov.ua/">
                Сайт Міністерства закордонних справ України
              </a>
            </div>
            <h4 className="copy">
              © 2024 Секретаріат Уповноваженого Верховної Ради України з прав
              людини 2013-2024
            </h4>
          </div>
          <div className="footer-text-right">
            <div className="text-block">
              <span>
                Громадська приймальня Уповноваженого з прав людини в
                Житомирській області
              </span>
              <h3>Козиренко Микита Валерійович</h3>
              <a className="tel_number" href="tel:+38 093 000 00 00">
                +38 093 000 00 00
              </a>
              <a className="mail-to" href="mailto:shutenko@ombudsman.gov.ua">
                shutenko@ombudsman.gov.ua
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Рівненській області</span>
              <h3>Луференко Владислав Олександрович</h3>
              <a className="tel_number" href="tel:+38 093 000 00 00">
                +38 093 000 00 00
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Житомирській області</span>
              <h3>Перетятько Олександр Ілліч</h3>
              <a className="tel_number" href="tel:+38 093 000 00 00">
                +38 093 000 00 00
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Рівненській області</span>
              <h3>Козиренко Микита Валерійович</h3>
              <a className="tel_number" href="tel:+38 093 000 00 00">
                +38 093 000 00 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 46px 0 13px 0;
  background: #f3f3f3;
  .footer-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul > li:not(:last-child) {
      margin-right: 32px;
    }
  }
  .footer-text {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .text-block {
    display: flex;
    flex-direction: column;
    margin: 12px 0;
    a {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 16px;
      line-height: 200%;
      color: var(--1c1f1c);
    }
  }
  .copy {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 267%;
    color: var(--464646);
  }
`;

export default Footer;
