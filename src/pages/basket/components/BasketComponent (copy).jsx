import { React, useState } from 'react';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
/* import ConnectedCounter from '../../../common/counter/components/CounterComponent'; */
import electricalGoodsAndLights from '../../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';

const Busket = () => {
  const [popupOrderActive, setPopupOrderActive] = useState(false);
  const [popupThanksActive, setPopupThanksActive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Главная</button>} link="/main-page" disabled />
      <div className="order-wrap">
        <h2 className="order"> Оформление заказа </h2>
        <ul className="listOrder-wrap">
          <div className="title">
            <p className="titleGood">Товар</p>
            <p className="titlePrice">Цена</p>
            <p className="titleQuantity">Количество</p>
            <p className="titleAmount">Сумма</p>
            <p className="titleDelete"> </p>
          </div>
          <div className="columns">
            <div className="columnGood">
              <img src={electricalGoodsAndLights} alt="Электротовары и свет" title="Электротовары и свет" />
              <h4 className="columnGoodNameTitle">Светильник потолочный Globo FORREST</h4>
            </div>
            <p className="columnPrice">
              <span className="priceNumbers">163</span>
              {' '}
              <br />
              <span className="priceLetters">руб. за шт</span>
            </p>
            <div className="columnQuantity">
              {/*      <ConnectedCounter /> */}
              123
            </div>
            <p className="columnAmount">
              163 руб.
            </p>
            <p className="columnDelete">
              <svg viewBox="0 0 20 20">
                <g>
                  <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                  <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
                </g>
              </svg>
            </p>
          </div>
          <div className="deleteAll">
            <span className="deleteAllString">Удалить все товары</span>
            <svg className="deleteAllSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
        </ul>
        <div className="result">
          <h2 className="resultSum">
            Итого: 44.9 руб
          </h2>
        </div>
        <div className="buttonOrderBox">
          <button
            className="buttonOrder"
            type="button"
            onClick={() => setPopupOrderActive(true)}
          >
            Продолжить
          </button>
        </div>
      </div>
      <Footer />
      <PopUp active={popupOrderActive} setActive={setPopupOrderActive}>
        <div className="popupOrder-box">
          <h2>Купить в 1 клик</h2>
          <div
            onClick={() => setPopupOrderActive(false)}
            onKeyDown={setPopupOrderActive}
            role="button"
            tabIndex="0"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <form className="form">
            <div className="name">
              <p className="nameString -required">Имя</p>
              <input
                className="nameInput"
                type="text"
                name="NAME"
                required
              />
            </div>
            <div className="phone">
              <p className="phoneString -required">Телефон</p>
              <input
                className="phoneInput"
                type="tel"
                name="PHONE"
                minLength="12"
                maxLength="12"
                placeholder="+375 (__) ___-__-__"
                required
              />
            </div>
            <div className="address">
              <p className="addressString -required">Адрес</p>
              <input
                className="addressInput"
                type="text"
                name="ADDRESS"
                required
              />
            </div>
            <div className="message">
              <p className="messageString">Сообщение</p>
              <textarea className="messageInput" name="MESSAGE" />
            </div>
            <button
              type="button"
              className="buttonOrder"
              onClick={() => {
                setPopupThanksActive(true);
                setPopupOrderActive(false);
              }}
            >
              Купить
            </button>
          </form>
        </div>
      </PopUp>
      <PopUp active={popupThanksActive} setActive={setPopupThanksActive}>
        <div className="popupThanks-box">
          <div
            onClick={() => setPopupThanksActive(false)}
            onKeyDown={setPopupThanksActive}
            role="button"
            tabIndex="0"
          >
            <svg className="backSymbol" viewBox="0 0 20 20">
              <g>
                <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
                <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
              </g>
            </svg>
          </div>
          <h2 className="thanksTitle">Ваш заказ принят!</h2>
          <div className="thanksContent">В ближайшее время с вами свяжется наш специалист</div>
        </div>
      </PopUp>
    </>
  );
};

export default Busket;