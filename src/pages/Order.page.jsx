import styled from "styled-components";
import order from "../assets/img/order.jpg";

const Order = () => {
  return (
    <StyledOrder>
      <div className="container">
        <p className="order-text">
          Головна / Порядок звернення до Уповноваженого з прав людини
        </p>
        <h2 className="order-title">
          Порядок звернення <br /> до Уповноваженого з прав людини
        </h2>
        <div className="wrapper">
          <img className="wrapper-img" src={order} alt="order" />
          <div className="wrapper-text">
            <p>
              Уповноважений розглядає звернення відповідно до законів України
              «Про Уповноваженого Верховної Ради України з прав людини» та «Про
              звернення громадян» щодо порушення прав і свобод людини і
              громадянина органами державної влади, органами місцевого
              самоврядування та їх посадовими і службовими особами, а також
              юридичними та фізичними особами.
            </p>
            <p>
              Не підлягають розгляду Уповноваженим звернення про порушення прав
              і свобод, які є предметом досудового або судового розгляду,
              трудового спору чи спору в рамках законодавства про захист
              економічної конкуренції. Звернення без зазначення місця
              проживання, не підписані автором (авторами), а також такі, з яких
              неможливо встановити авторство (анонімні) не розглядаються
            </p>
          </div>
        </div>
        <div className="order-info">
          <div className="info-block">
            <div className="info-title">
              <h3>Подати звернення на електронну пошту</h3>
            </div>
            <div className="info-text">
              <h4>hotline@ombudsman.gov.ua</h4>
              <p>
                У зверненні має бути зазначено прізвище, ім`я, по батькові,
                місце проживання громадянина, викладено суть порушеного питання,
                зауваження, пропозиції, заяви чи скарги, прохання чи вимоги.
                Письмове звернення повинно бути підписано заявником (заявниками)
                із зазначенням дати. В електронному зверненні також має бути
                зазначено електронну поштову адресу, на яку заявнику може бути
                надіслано відповідь, або відомості про інші засоби зв’язку з
                ним. Звернення, оформлене без дотримання зазначених вимог,
                повертається заявнику з відповідними роз'ясненнями не пізніш як
                через десять днів від дня його надходження, крім випадків,
                передбачених частиною першою статті 7 Закону України "Про
                звернення громадян"
              </p>
              <p className="info-text-colored">
                Отримати бланк заяви можна:{" "}
                <span className="info-text-span">
                  завантажити за посиланням
                </span>
              </p>
            </div>
          </div>
          <div className="info-block">
            <div className="info-title">
              <h3>Подати звернення поштою на адресу</h3>
            </div>
            <div className="info-text">
              <h5>
                Секретаріату Уповноваженого Верховної Ради України з прав
                людини: вул. Інститутська, 21/8, м. Київ 01008
              </h5>
            </div>
          </div>
          <div className="info-block">
            <div className="info-title">
              <h3>Гаряча лінія</h3>
            </div>
            <div className="info-text last">
              <p className="info-text-line">
                Крім того, з метою здійснення моніторингу, реагування на
                порушення прав і свобод людини і громадянина можна
                зателефонувати на гарячу лінію:
              </p>
              <div className="info-number">
                <a href="tel:+38 0 800 501 720">+38 0 800 501 720</a>
                <span>Уповноваженого ВРУ з прав людини</span>
              </div>
              <div className="info-number">
                <a href="tel:+38 044 299 74 08">+38 044 299 74 08</a>
                <span>Секретаріату Уповноваженого ВРУ з прав людини</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-banner">
          <p className="order-banner-text">
            У разі, якщо звернення громадянина України, що перебуває в Польщі,
            потребує розгляду безпосередньо в країні перебування, тоді ним
            займається Представництво Омбудсмана України в Польщі, яке надає
            необхідну підтримку для захисту прав громадян за кордоном і сприяє
            вирішенню питань у межах своєї компетенції.
          </p>
          <p className="order-banner-office">Контакт офісу у Варшаві</p>
          <div className="order-web d-flex">
            <a className="order-web-link" href="ombudsman@ombudsman.pl">
              ombudsman@ombudsman.pl
            </a>
            <a className="order-web-link" href="headoffice@ombudsman.pl">
              headoffice@ombudsman.pl
            </a>
          </div>
        </div>
      </div>
    </StyledOrder>
  );
};

const StyledOrder = styled.section`
  margin-top: 150px;
  padding: 16px 0 128px 0;

  .order-text {
    font-weight: 300;
    font-size: 14px;
    line-height: 171%;
    color: var(--464646);
  }

  .order-title {
    font-weight: 700;
    font-size: 56px;
    line-height: 114%;
    margin: 40px 0 64px 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .wrapper-img {
    position: relative;
    left: -105px;
    border-radius: 30px;
    max-width: 100%;
  }

  .wrapper-text {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: #6e6e6e;
    }
    p:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .info-block {
    display: flex;
    justify-content: space-between;
    margin: 64px 0;
  }

  .info-title {
    width: 24%;
    h3 {
      font-weight: 400;
      font-size: 32px;
      line-height: 150%;
      color: var(--1c1f1c);
    }
  }

  .info-text {
    width: 70%;
    margin-top: 63px;
    h4 {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--245daa);
      margin-bottom: 20px;
    }
    h5 {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--1c1f1c);
    }
    p,
    span {
      font-weight: 300;
      font-size: 14px;
      color: #6e6e6e;
    }
    .info-text-colored {
      color: var(--1c1f1c);
    }
    .info-text-span {
      text-decoration: underline;
      text-decoration-skip-ink: none;
      color: var(--245daa);
    }
    .info-text-line {
      font-weight: 300;
      font-size: 16px;
      line-height: 187%;
      color: var(--464646);
    }
  }

  .last {
    margin-top: 20px;
  }

  .info-number {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    a {
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
      color: var(--1c1f1c);
    }
    span {
      font-weight: 300;
      font-size: 14px;
      line-height: 229%;
      color: var(--464646);
    }
  }

  .order-banner {
    border-radius: 30px;
    padding: 40px 44px 48px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(36, 93, 170, 0.1) 0%,
      rgba(224, 210, 157, 0.1) 100%
    );
  }
  .order-banner-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 187%;
    text-align: center;
    color: var(--1c1f1c);
    margin-bottom: 24px;
  }

  .order-banner-office {
    font-weight: 400;
    margin-bottom: 16px;
  }

  .order-web-link {
    color: var(--245daa);
  }
  .order-web-link:not(:last-child) {
    margin-right: 12px;
  }
`;

export default Order;
