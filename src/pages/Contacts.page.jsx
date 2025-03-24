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

// i18n
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledContacts>
      <div className="container">
        <h2 className="contacts-header">{t("contactPage.title")}</h2>
        <div className="text-block">
          <h3>{t("contactPage.representationTitle")}</h3>
          <div className="d-flex">
            <div className="text-block-el">
              <span>{t("contactPage.address")}</span>
              <p>{t("contactPage.address")}</p>
              <span>{t("contactPage.email.main")}</span>
              <a href={`mailto:${t("contactPage.email.main")}`}>
                {t("contactPage.email.main")}
              </a>
              <a href={`mailto:${t("contactPage.email.second")}`}>
                {t("contactPage.email.second")}
              </a>
              <a href={`mailto:${t("contactPage.ukraineEmails.other")}`}>
                {t("contactPage.ukraineEmails.other")}
              </a>
            </div>

            <div className="text-block-el">
              <span>{t("contactPage.hotlineTitle")}</span>
              <a href={`tel:${t("contactPage.phoneNumber")}`}>
                {t("contactPage.phoneNumber")}
              </a>
              <span>{t("contactPage.consultationInfo")}</span>
            </div>
          </div>

          <button className="btn-primary contacts-btn" onClick={openModal}>
            {t("contactPage.requestButton")}
            <img src={arrow} alt="arrow" />
          </button>
        </div>

        <div className="text-block">
          <h3>{t("contactPage.ukraineReceptionTitle")}</h3>
          <div className="d-flex">
            <div className="text-block-el">
              <span>{t("contactPage.ukraineAddress")}</span>
              <p>{t("contactPage.ukraineWorkingHours")}</p>
              <span>{t("contactPage.ukraineEmails.main")}</span>
              <div className="flex-col">
                <a href={`mailto:${t("contactPage.ukraineEmails.main")}`}>
                  {t("contactPage.ukraineEmails.main")}
                </a>
                <span className="flex-col-span">
                  {t("contactPage.ukraineEmails.mainNote")}
                </span>
              </div>
              <div className="flex-col">
                <a href={`mailto:${t("contactPage.ukraineEmails.info")}`}>
                  {t("contactPage.ukraineEmails.info")}
                </a>
                <span className="flex-col-span">
                  {t("contactPage.ukraineEmails.infoNote")}
                </span>
                <a href={`mailto:${t("contactPage.ukraineEmails.other")}`}>
                  {t("contactPage.ukraineEmails.other")}
                </a>
              </div>
            </div>

            <div className="text-block-el">
              <span>{t("contactPage.ukraineHotline.main")}</span>
              <a href={`tel:${t("contactPage.ukraineHotline.main")}`}>
                {t("contactPage.ukraineHotline.main")}
              </a>
              <a href={`tel:${t("contactPage.ukraineHotline.secondary")}`}>
                {t("contactPage.ukraineHotline.secondary")}
              </a>
              <span>{t("contactPage.ukraineHotlineWorkingHours")}</span>
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
      <News
        limit={2}
        initialLimit={2}
        showButton={true}
        hideShowMoreButton={true}
      />
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
