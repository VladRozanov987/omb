//Styled
import styled from "styled-components";

//Img
import bannerBg from "../assets/img/banner.jpg";

//Icons
import arrowUp from "../assets/icons/ArrowUpRight.svg";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="container d-flex">
        <div className="banner-text">
          <h4>Виникли питання?</h4>
          <p>
            Головний документ, яким керується Омбудсман України — Конституція
            України. Відповідно до неї Уповноважений має доступ до місць
            несвободи,{" "}
          </p>
        </div>
        <button className="btn-primary">
          Зв’язатись з омбудсменом <img src={arrowUp} alt="ArrowUp" />{" "}
        </button>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  padding: 128px 0;
  .container {
    border-radius: 24px;
    padding: 112px 80px;
    background-image: url(${bannerBg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 16px 24px;
      font-family: var(--second-family);
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: var(--1c1f1c);
    }
  }
  .banner-text {
    max-width: 689px;
    h4 {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 56px;
      line-height: 114%;
      color: #fff;
    }
    p {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 187%;
      color: #fff;
    }
  }
`;

export default Banner;
