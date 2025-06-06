import { useState } from "react";

//Styled
import styled from "styled-components";

//Img
import Logo from "../assets/img/Logo.svg";

// Icons
// import insta from "../assets/icons/insta.svg";
// import instaHov from "../assets/icons/insta-hov.svg";
// import linked from "../assets/icons/linked.svg";
// import linkedHov from "../assets/icons/linked-hov.svg";
import telegram from "../assets/icons/telegram.svg";
import facebook from "../assets/icons/facebook.svg";
import facebookHov from "../assets/icons/facebook-hov.svg";

//Docs
import personal from "../assets/docs/personal.pdf";
import politics from "../assets/docs/politics.pdf";

// i18n
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
            {/*<li>*/}
            {/*  <a*/}
            {/*    href=""*/}
            {/*    onMouseEnter={() => handleMouseEnter("insta")}*/}
            {/*    onMouseLeave={() => handleMouseLeave("insta")}*/}
            {/*  >*/}
            {/*    <img*/}
            {/*      src={hoveredIcons.insta ? instaHov : insta}*/}
            {/*      alt="Instagram"*/}
            {/*    />*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a
                href="https://t.me/ombudsman_pl"
                // onMouseEnter={() => handleMouseEnter("linked")}
                // onMouseLeave={() => handleMouseLeave("linked")}
              >
                <img src={telegram} alt="Telegram" width={21} height={21} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61568834698026"
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
          <div className="footer-text-left d-flex">
            <div>
              <div className="text-block">
                <h3>{t("footer.address.title")}</h3>
                <h3>{t("footer.address.street")}</h3>
              </div>
              <div className="text-block">
                <h3>{t("footer.contact.title")}</h3>
                <a className="mail-to" href="mailto:ombudsman@ombudsman.pl">
                  ombudsman@ombudsman.pl
                </a>
                <a className="tel_number" href="tel:+48 605 911 005">
                  +48 605 911 005 <span>{t("footer.contact.hotline")}</span>
                </a>
              </div>
              <div className="text-block">
                <span>{t("footer.consultations.title")}</span>
                <h3>{t("footer.consultations.hours")}</h3>
                <h3>{t("footer.consultations.appointment")}</h3>
              </div>
              <h4 className="copy">{t("footer.copyright")}</h4>
            </div>

            <div>
              <div className="text-block">
                <a className="mail-to" href="mailto:hotline@ombudsman.gov.ua">
                  hotline@ombudsman.gov.ua 
                </a>
                <a href={`mailto:${t("contactPage.ukraineEmails.other")}`}>
                  {t("contactPage.ukraineEmails.other")}
                </a>
                <a className="mail-to" href="mailto:zvernennia@ombudsman.pl">
                  zvernennia@ombudsman.pl 
                </a>
                <p>{t("footer.emails.note")}</p>
              </div>
              <div className="text-block">
                <a
                  className="download-link"
                  href={personal}
                  download="Про обробку персональних даних.pdf"
                >
                  {t("footer.documents.personalData")}
                </a>
                <a
                  className="download-link"
                  href={politics}
                  download="Політика захисту персональних даних.pdf"
                >
                  {t("footer.documents.privacyPolicy")}
                </a>
              </div>
              <div className="text-block">
                <a href="https://ombudsman.gov.ua/">
                  {t("footer.links.ombudsmanWebsite")}
                </a>
                <a href="https://poland.mfa.gov.ua/">
                  {t("footer.links.consulateWebsite")}
                </a>
                <a href="https://mfa.gov.ua/">{t("footer.links.mfaWebsite")}</a>
              </div>
            </div>
          </div>
          {/* <div className="footer-text-right">
            <div className="text-block">
              <span>
                Громадська приймальня Уповноваженого з прав людини в
                Житомирській області
              </span>
              <h3>Козиренко Микита Валерійович</h3>
              <a className="tel_number" href="tel:+380930000000">
                +38 093 000 00 00
              </a>
              <a className="mail-to" href="mailto:shutenko@ombudsman.gov.ua">
                shutenko@ombudsman.gov.ua
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Рівненській області</span>
              <h3>Луференко Владислав Олександрович</h3>
              <a className="tel_number" href="tel:+380930000000">
                +38 093 000 00 00
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Житомирській області</span>
              <h3>Перетятько Олександр Ілліч</h3>
              <a className="tel_number" href="tel:+380930000000">
                +38 093 000 00 00
              </a>
            </div>
            <div className="text-block">
              <span>Представник в Рівненській області</span>
              <h3>Козиренко Микита Валерійович</h3>
              <a className="tel_number" href="tel:+380930000000">
                +38 093 000 00 00
              </a>
            </div>
          </div> */}
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
    /* display: flex;
    justify-content: space-between; */
  }

  .d-flex {
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
      line-height: 150%;
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

  .download-link {
    font-weight: 400 !important;
  }

  @media screen and (max-width: 768px) {
    .d-flex {
      justify-content: space-between;
      flex-direction: column;
    }
    .footer-links {
      flex-direction: column;
      align-items: baseline;
      ul {
        margin-top: 24px;
        padding-left: 50px;
      }
    }
    .footer-text-left {
      h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 171%;
      }
      .text-block {
        a {
          font-weight: 400;
          font-size: 14px;
          line-height: 214%;
        }
        p {
          font-weight: 300;
          font-size: 14px;
          line-height: 229%;
        }
      }
      .copy {
        display: none;
      }
    }
    .footer-text-right {
      display: none;
    }
  }
`;

export default Footer;
