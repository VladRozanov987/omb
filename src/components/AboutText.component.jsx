//Styled
import styled from "styled-components";

// i18n
import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <StyledAboutText>
      <div className="container">
        <p>{t("aboutSec.bp1")}</p>
        <p>{t("aboutSec.bp2")}</p>
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
