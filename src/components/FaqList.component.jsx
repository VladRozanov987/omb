import React, { useState, useEffect } from "react";

//Styled
import styled from "styled-components";

//Data
import { FaqData } from "../data/FAQ.data";

const FaqList = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleData = isMobile && !isExpanded ? FaqData.slice(0, 6) : FaqData;

  return (
    <StyledAccordionList>
      {visibleData.map(({ id, title, content }) => (
        <div key={id} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(id)}>
            <h3>{title}</h3>
            <span className="accordion-icon">
              {openAccordion === id ? "-" : "+"}
            </span>
          </div>
          {openAccordion === id && (
            <div className="accordion-body">
              <ul className="accordion-list">
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {isMobile && !isExpanded && FaqData.length > 6 && (
        <button className="expand-btn" onClick={handleExpandClick}>
          Відкрити ще
        </button>
      )}

      {isMobile && isExpanded && (
        <button className="expand-btn" onClick={handleExpandClick}>
          Сховати
        </button>
      )}
    </StyledAccordionList>
  );
};

const StyledAccordionList = styled.section`
  .accordion-item {
    margin-bottom: 16px;
    border-bottom: 1px solid #ccc;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;

    h3 {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 200%;
      color: var(--1c1f1c);
    }
  }

  .accordion-icon {
    font-size: 24px;
    color: #333;
    margin-left: 12px;
  }

  .accordion-body {
    padding: 16px;
    border-top: 1px solid #ccc;
    border-radius: 0 0 8px 8px;
  }

  .accordion-list {
    display: flex;
    flex-direction: column;
    list-style-type: disc;
  }

  li {
    margin: 8px 0;
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 14px;
    color: var(--464646);
  }

  .expand-btn {
    display: none;
  }

  @media (max-width: 768px) {
    .expand-btn {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-family: var(--second-family);
      background: #fff;
      font-weight: 500;
      font-size: 14px;
      line-height: 171%;
      color: var(--464646);
      border: 1px solid black;
      border-radius: 16px;
      padding: 16px;
    }
    .accordion-header {
      h3 {
        font-weight: 500;
        font-size: 14px;
        line-height: 171%;
      }
    }
    .accordion-list {
      list-style-type: none;
    }
  }
`;

export default FaqList;
