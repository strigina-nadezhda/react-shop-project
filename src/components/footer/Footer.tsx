import React from "react";
import "../../css/footer.css"


const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <div className="logo">
                        <img src="./images/footer-logo.svg" alt="logo" />
                        <p>Компания «Султан» — снабжаем розничные магазины товарами <br /> "под ключ" в Кокчетаве и Акмолинской области</p>
                    </div>
                    <div>
                        <p>Подпишись на скидки и акции</p>
                        <div className="email-input">
                            <input id="searchInput" type="text" name="searchInput" placeholder="Введите ваш E-mail" />
                            <button id="searchBtn" type="submit" name="searchBtn" >
                                <img src="./images/arrow.svg" alt="icon" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="links">
                    <p className="title">Меню сайта:</p>
                    <ul>
                        <li><a href="/" className="link">О компании</a> </li>
                        <li><a href="/" className="link">Доставка и оплата</a></li>
                        <li><a href="/" className="link">Возврат</a></li>
                        <li><a href="/" className="link">Контакты</a> </li>
                    </ul>
                </div>
                <div className="links">
                    <p className="title">Категории:</p>
                    <ul>
                        <li><a href="" className="link">Бытовая химия</a> </li>
                        <li><a href="" className="link">Косметика и гигиена</a></li>
                        <li><a href="" className="link">Товары для дома</a></li>
                        <li><a href="" className="link">Товары для детей и мам</a> </li>
                        <li><a href="" className="link">Посуда</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <p className="title">Скачать прайс-лист:</p>
                        <button className="btn">Прайс-лист <img src="./images/download.svg" alt="arrow" className="btn-icon" /></button>
                    </div>

                    <div className="mt20">
                        <p className="link">Связь в мессенджерах:</p>
                        <div className="icons">
                            <img src="./images/footer-logo_telegram.svg" alt="telegram" />
                            <img src="./images/footer-logo_WA.svg" alt="WA" />
                        </div>
                    </div>

                </div>

                <div className="contact">
                    <p className="title">Контакты:</p>
                    <div >
                        <p className="link bold">+7 (777) 490-00-91</p>
                        <p className="link think my5">время работы: 9:00-20:00</p>
                        <p className="link underline">Заказать звонок</p>
                    </div>
                    <div >
                        <div className="text">
                            <p className="link bold "> opt.sultan@mail.ru </p>
                            <p className="link think">  На связи в любое время</p>
                        </div>
                        <div className="icons">
                            <img src="./images/footer-logo_VISA.svg" alt="visa" />
                            <img src="./images/footer-logo_MASTERCARD.svg" alt="mastercard" />
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;