import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';

const About = () => (
  <>
    <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
    <div className="about-wrap">
      <h1 className="headerH1">
        ВСЕ ДЛЯ ДОМА – строительный гипермаркет
      </h1>
      <p className="paragraph">
        <i>ВСЕ ДЛЯ ДОМА</i>
        {' '}
        — первый в Минске
        {' '}
        <i>строительный гипермаркет</i>
        {' '}
        формата DIY, соответствующий высоким стандартам обслуживания европейского уровня.
      </p>
      <p className="paragraph">
        DIY (Do It Yourself) - английское название
        {' '}
        <i>строительных магазинов</i>
        {' '}
        для дома и ремонта, дословный перевод — «Сделай сам». Формат DIY подразумевает
        как возможность самому подобрать необходимый товар, так и приобрести все необходимое
        в одном месте для реализации собственного проекта. Качественный мерчандайзинг и
        удобная навигация отделов упрощают поиск товара,
        а профессиональные продавцы магазина предоставляют необходимую консультацию.
      </p>
      <ul className="list">
        <p className="paragraph">
          <b className="boldBlock">Магазин стройматериалов имеет торговую площадь 7500 кв.м., покупателям предлагается более 45 000 различных товаров, которые представлены в девяти отделах:</b>
          <li className="listItem">строительные материалы,</li>
          <li className="listItem">товары для дома,</li>
          <li className="listItem">инструмент и электрика,</li>
          <li className="listItem">изделия из дерева,</li>
          <li className="listItem">сантехника,</li>
          <li className="listItem">краски,</li>
          <li className="listItem">декоративные материалы,</li>
          <li className="listItem">садовый мир.</li>
        </p>
      </ul>
      <p className="paragraph">Качество предлагаемых товаров гарантировано и сертифицировано.</p>
      <h2 className="headerH2">Отличительными особенностями строительного гипермаркета  &quot;ВСЕ ДЛЯ ДОМА&quot; являются:</h2>
      <ul className="list">
        <p className="paragraph">
          <li className="listItem">широкий ассортимент продукции,</li>
          <li className="listItem">доступные цены,</li>
          <li className="listItem">грамотная навигация и наглядность экспозиций,</li>
          <li className="listItem">доставка товара,</li>
          <li className="listItem">профессиональная помощь продавцов-консультантов,</li>
          <li className="listItem">удобное месторасположение и транспортное сообщение,</li>
          <li className="listItem">большая и вместительная парковка на 300 мест,</li>
          <li className="listItem">удобное время работы – ежедневно с 9 до 22 часов.</li>
        </p>
      </ul>
      <p className="paragraph">
        <i>Магазин стройматериалов &quot;ВСЕ ДЛЯ ДОМА&quot; </i>
        {' '}
        предоставляет лучший выбор и оптимальные цены, благодаря чему вне зависимости от
        своего образа жизни, доходов, возраста, семейного положения, вкусов, желаний,
        каждый может повысить комфорт в своем жилище, осуществить свои большие и
        маленькие проекты. Здесь все необходимые покупки можно сделать в одном месте,
        что существенно облегчает планирование и проведение ремонта на любых стадиях.
        &quot;ВСЕ ДЛЯ ДОМА&quot; - доступен каждому, это комфортабельный
        строительный гипермаркет, который уважает своих покупателей.
      </p>
      <h3 className="headerH3">Добро пожаловать в строительную цивилизацию «ВСЕ ДЛЯ ДОМА»</h3>
    </div>
    <Footer />
  </>
);

export default About;
