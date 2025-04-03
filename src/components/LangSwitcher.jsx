import React from "react";
import i18next from "i18next";
import styled from "styled-components";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <LanguageSwitcherContainer>
      <LanguageButton
        onClick={() => changeLanguage("ua")}
        color="ua"
      ></LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage("pl")}
        color="pl"
      ></LanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;

// Styled-components

const LanguageSwitcherContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

const LanguageButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: 1px solid silver;

  background: ${({ color }) =>
    color === "ua"
      ? "linear-gradient(to bottom, #005bbb 50%, #ffd700 50%)"
      : "linear-gradient(to bottom, #ffffff, #d7141a 50%)"};

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.2);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(1);
  }

  &:focus {
    outline: none;
  }
`;
