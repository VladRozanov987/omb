//Styled
import styled from "styled-components";

//Img
import people from "../assets/img/people.jpg";

//Icons
import qm from "../assets/icons/qm.svg";

const Photo = () => {
  return (
    <StyledPhoto>
      <div className="main-img">
        <img src={people} alt="people" />
      </div>
      <div className="container">
        <div className="main-expl">
          <h3>
            Офіс Омбудсмана України діє як посередник між людиною <br /> та
            державою. Це незалежна інституція, яка покликана <br /> захищати
            права громадян, які до неї звертаються.
          </h3>
        </div>
      </div>
    </StyledPhoto>
  );
};

const StyledPhoto = styled.section`
  margin-top: -30px;
  z-index: 2;

  .main-img {
    margin: 80px 0 130px 0;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }

  .main-expl {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;

    h3 {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      text-align: center;
      color: var(--1c1f1c);
    }
  }

  .main-expl::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -50%);
    width: 114px;
    height: 86px;
    background-image: url(${qm});
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    .main-img {
      margin: 56px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
        max-width: 200%;
      }
    }
    .main-expl {
      h3 {
        font-size: 20px;
        line-height: 160%;
      }
    }
  }
`;

export default Photo;
