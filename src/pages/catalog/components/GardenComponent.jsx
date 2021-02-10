import React from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import garden1 from '../../../assets/catalog-items/garden/garden1.jpg';
import basket from '../../../assets/common/basket.png';

const Garden = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
    <div className="container-wrap">
      <div className="items">
        <div className="item-wrap">
          <div className="info">
            <p className="-yes">
              <svg viewBox="0 0 15 15">
                <g>
                  <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.51,7.51,0,0,0,7.5,0Zm4.31,6.23L7.09,10.94a1.06,1.06,0,0,1-1.5,0l-2.4-2.4A1.06,1.06,0,1,1,4.69,7L6.34,8.69l4-4a1.06,1.06,0,0,1,1.5,1.5Z" />
                </g>
              </svg>
              Наличие
            </p>
          </div>
          <img className="imgItem" src={garden1} alt="Качели садовые" title="Качели садовые" />
          <h4>Качели садовые</h4>
          <div className="purchase">
            <p>390 РУБ.</p>
            <button className="busketButton" type="button">
              <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
              <span>В корзину</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Garden;