//Styled
import styled from "styled-components";

//Img
import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";
import partner5 from "../assets/img/partner5.png";
import partner6 from "../assets/img/partner6.png";

const Partners = () => {
  const partnersData = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
  ];

  return (
    <StyledPartners>
      <div className="container">
        <h2>Наші партнери</h2>
        <div className="partners-grid">
          {partnersData.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner} alt={`Партнер ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </StyledPartners>
  );
};

const StyledPartners = styled.section`
  padding-bottom: 128px;
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 64px;
    margin-top: 40px;
  }

  .partner-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: #f8f8f8;
    border-radius: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default Partners;
