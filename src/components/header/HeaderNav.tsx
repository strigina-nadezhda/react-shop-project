import React from "react";
import { RiMapPinLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";


export const HeaderNav: React.FC = () => {
    return (

        <nav>
            <div className="info">
                <div className="info-content">
                    <RiMapPinLine className="info-content_icon" />

                    <div className="info-content_text">
                        <p className="bold black">
                            г. Кокчетав, ул. Ж. Ташенова 129Б
                        </p>
                        <p className="think blue">  (Рынок Восточный)</p>
                    </div>

                </div>
                <div className="info-content" >
                    <FiMail className="info-content_icon" />
                    <div className="info-content_text">
                        <p className="bold black"> opt.sultan@mail.ru </p>
                        <p className="think blue">  На связи в любое время</p>
                    </div>

                </div>
            </div>
            <div className="links">
                <ul>
                    <li>О компании</li>
                    <li>Доставка и оплата </li>
                    <li> Возврат</li>
                    <li> Контакты</li>
                </ul>
            </div>
        </nav>

    )
}
