//Styled
import styled from "styled-components";

//Icons
import infoArr from "../assets/icons/info-arr.svg";

//Docs
import centers from "../assets/docs/centers.docx";
import diplomatic from "../assets/docs/diplomatics.docx";
import instruction from "../assets/docs/instruction.docx";

const Info = () => {
  return (
    <StyledInfo>
      <div className="container">
        <h2>Корисна інформація</h2>
        <div className="d-flex">
          <p>Центри допомоги українцям в Польщі</p>
          <a href={centers} download="Центри_допомоги_українцям_у_Польщі.docx">
            <button className="info-btn">
              Загрузити документ <img src={infoArr} alt="Arrow" />{" "}
            </button>
          </a>
        </div>
        <div className="d-flex">
          <p>Дипломатичні установи України в Польщі</p>
          <a
            href={diplomatic}
            download="Дипломатичні_установи_України_в_Польщі.docx"
          >
            <button className="info-btn">
              Загрузити документ <img src={infoArr} alt="Arrow" />{" "}
            </button>
          </a>
        </div>
        <div className="d-flex">
          <p>
            Інструкція перетину польського кордону українцями, що потребують
            захисту від війни
          </p>
          <a
            href={instruction}
            download="Інструкція_перетин_Польського_кордону_українцям_що_потребують.docx"
          >
            <button className="info-btn">
              Загрузити документ <img src={infoArr} alt="Arrow" />{" "}
            </button>
          </a>
        </div>
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.section`
  padding-bottom: 128px;
  h2 {
    margin-bottom: 64px;
  }
  .d-flex {
    justify-content: space-between;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 24px;
      color: var(--1c1f1c);
    }
  }
  .d-flex:not(:last-child) {
    margin-bottom: 44px;
  }
  .info-btn {
    border: 2px solid var(--245daa);
    border-radius: 16px;
    padding: 16px 24px;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 171%;
    color: var(--245daa);
    background: #fff;
  }
  @media (max-width: 768px) {
    padding-bottom: 56px;
    h2 {
      font-weight: 700;
      font-size: 30px;
      line-height: 107%;
      margin-bottom: 32px;
    }
    .d-flex {
      flex-direction: column;
      text-align: center;
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 171%;
      }
    }
    .info-btn {
      padding: 8px 10px;
      margin-top: 8px;
    }
  }
`;

export default Info;
