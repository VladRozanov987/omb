import React from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div className="d-flex">
      <button onClick={() => changeLanguage("ua")}>UA</button>
      <button onClick={() => changeLanguage("pl")}>PL</button>
    </div>
  );
};

export default LanguageSwitcher;
