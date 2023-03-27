import React from "react";

export const HeaderMenu: React.FC = () => {
    return (
        <div className="menu">

            <img src="./images/header-logo.svg" alt="card" />

            <div className="searchBar">
                <input id="searchInput" type="text" name="searchInput" placeholder="Поиск..." />
                <button id="searchBtn" type="submit" name="searchBtn" >
                    <img src="./images/search.svg" alt="icon" />
                </button>
            </div>

            <div className="manager">
                <div className="manager-text">
                    <p className="bold black">+7 (777) 490-00-91</p>
                    <p className="think blue">время работы: 9:00-20:00</p>
                    <p className="underline blue">Заказать звонок</p>
                </div>
                <img src="./images/callcentre.png" alt="manager" />
            </div>
            <button className="btn">Прайс-лист <img src="./images/download.svg" alt="arrow" className="btn-icon" /></button>
            <div className="basket">

                <a href="http://orehi.252x.ru/cart/" className="basket-wrap"><span className="basket__counter">2</span>
                    <span className="basket__title think blue">Корзина</span>
                    <span className="basket__amount">200 руб</span>
                </a>

            </div>

        </div>

    )
}

