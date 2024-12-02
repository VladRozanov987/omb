//Styled
import styled from "styled-components";

const AboutText = () => {
  return (
    <StyledAboutText>
      <div className="container">
        <p>
          Висловлюємо глибоку подяку всьому колективу Представництва Омбудсмана
          України в Польщі — об’єднанню людей з України та Польщі, які, працюючи
          на громадських засадах, вкладають свої знання, досвід і серце задля
          підтримки українців у надскладний час.
        </p>
        <p>
          Спільні зусилля — віддана праця юристів, волонтерів, громадських
          діячів, активістів, експертів та фахівців із різних сфер — є
          свідченням непохитної солідарності та глибокої людяності.
        </p>
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
