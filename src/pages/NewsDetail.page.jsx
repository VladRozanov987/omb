//Styled
import styled from "styled-components";

//Component
import News from "../components/News.component";
import Banner from "../components/Banner.component";

//Icons
import X from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import telegram from "../assets/icons/telegram.svg";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data as newsData } from "../data/News.data";

const NewsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const newsItem = newsData.find((news) => news.id === parseInt(id));

  if (!newsItem) {
    return <h2>Новина не знайдена</h2>;
  }

  return (
    <StyledNews>
      <div className="container">
        <StyledWrapper>
          <h2>{newsItem.name}</h2>
          <span>{newsItem.date}</span>
          <img src={newsItem.image} alt={newsItem.name} />
          <p className="news-text">
            Тривале поліпшення, модернізація персоналу, розробка оптимальних
            торгових марок та універсальні технології забезпечили компанії
            визнання і провідну роль на світовому ринку.
          </p>
          <p className="news-text">
            Хочемо вражати домашніх улюбленців комфортом продуктів харчування і
            прагнемо розвивати кабельне телебачення, юридичний захист ваших прав
            і передачу даних разом із клієнтами. Наша мета проста: це надання
            вам інновацій, відкриттів та глобального громадянства. Стабільно
            надається широкий вибір зберігання даних: розробка програмного
            забезпечення, кімнатні й садові рослини і інформаційні технології
            для стильних особистостей і гостей столиці. З 2002-го року компанія
            застосовує вигідні комп'ютерні технології неперервної інтеграції,
            безпрограшних домовленостей та новаторства.
          </p>
          <h4 className="news-title">
            Координаційна рада з економічних питань
          </h4>
          <p className="news-text">
            Завдяки довершеним та прогресивним продуктам та послугам,
            талановитим співробітникам і серйозному підходу до бізнесу та
            накопичення, а також співпраці з іноземними компаніями та нашими
            партнерами, організація відкриває перед Україною нові захоплюючі
            можливості. Одна з найбільших міжнародних компаній здійснює
            діяльність за наступними напрямками: підприємницька діяльність,
            мобільний голосовий зв'язок та кредити для малого та середнього
            бізнесу.{" "}
          </p>
          <p>
            Завдяки довершеним та прогресивним продуктам та послугам,
            талановитим співробітникам і серйозному підходу до бізнесу та
            накопичення, а також співпраці з іноземними компаніями та нашими
            партнерами, організація відкриває перед Україною нові захоплюючі
            можливості. Одна з найбільших міжнародних компаній здійснює
            діяльність за наступними напрямками: підприємницька діяльність,
            мобільний голосовий зв'язок та кредити для малого та середнього
            бізнесу. Ми впевнені, що впровадження продуктів харчування
            (відкритість виваженої команди) життєво важливе для розвитку, тому
            ми постійно виконуємо зобов'язання та разом з тим, відкриті до
            інновацій. Постійне поліпшення, розширення асортименту товарів,
            динамічне впровадження та робітнича майстерність забезпечили
            підприємству визнання і провідну роль на світовому ринку. Хочемо
            підкорювати киян якістю відкриттів і прагнемо розвивати послуги
            доставки кореспонденції, закупівлю-продаж і кабельне телебачення
            разом із замовниками. Мета компанії проста: це забезпечення вам
            глобального громадянства, зберігання даних та неперервної
            інтеграції. Стабільно надається широкий вибір безпрограшних
            домовленостей: свіжі овочі та фрукти, телекомунікації і розробка
            програмного забезпечення для домашніх улюбленців і стильних
            особистостей. На постійній основі товариство застосовує фінансово
            відповідальні до найменших дрібниць прораховані засоби новаторства,
            бізнесу та накопичення.{" "}
          </p>
          <div className="share d-flex">
            <p>Поділитись новиною:</p>

            <img src={X} alt="X" />
            <img src={facebook} alt="facebook" />
            <img src={telegram} alt="telegram" />
          </div>
        </StyledWrapper>
      </div>
      <News title="Схожі новини" limit={2} showButton={false} />
      <Banner />
    </StyledNews>
  );
};

const StyledNews = styled.div`
  margin-top: 100px;
`;

const StyledWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  max-width: 1020px;
  margin: 0 auto;
  h2 {
    margin-bottom: 24px;
  }
  span {
    margin-bottom: 32px;
  }
  img {
    margin-bottom: 32px;
  }
  .news-text {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 187%;
    color: var(--1c1f1c);
    margin-bottom: 32px;
  }
  .news-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: var(--1c1f1c);
    margin-bottom: 16px;
  }
  .share {
    border-top: 1px solid #b9b9b9;
    margin-top: 64px;
    padding-top: 24px;

    p {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 16px;
      line-height: 200%;
      color: #000;
    }
  }
  .share {
    align-items: center;
    justify-content: start;
    p {
      margin-right: 30px;
    }
    img {
      width: 24px;
      margin: 0 40px 0 0;
    }
  }
`;

export default NewsDetail;
