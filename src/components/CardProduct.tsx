import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../store/types/types";


export const CardProduct: FC<IProduct> = (product) => {

    const history = useNavigate()
    const imgSrc = `./images/${product.img}`;

    const goToProductPage = () => {
        history(`/catalog/${product.barcode}`);
    }

    const showCardTitle = (title: string) => {
        return title.length > 56 ? title.slice(0, 55) + ' ...' : title
    }

    return (
        <div className="card" onClick={goToProductPage}>

            <div className="img">
                <img src={imgSrc} alt="card-img" />
            </div>

            <div className="card-size">

                <img src={product.unit === 'Вес' ? './images/box-icon.svg' : "./images/bottle-icon.svg"} alt="box-icon" className="icon" />
                <p className="card-size_text">{product.size} {product.unit === 'Вес' ? ' кг' : " мл"}</p>
            </div>

            <div className="card-content">
                <p className="card-title"> {showCardTitle(product.title)}</p>
                <div className="card-text">
                    <p className="card-text_key think blue">Штрихкод:</p> <p className="card-text_value"> {product.barcode}</p>
                    <p className="card-text_key think blue">Производитель:</p> <p className="card-text_value">{product.manufacturer} </p>
                    <p className="card-text_key think blue">Бренд:</p> <p className="card-text_value">{product.brand} </p>



                </div>
            </div>

            <div className="card-action">
                <p className=" card-action_price">{product.price} ₸</p>
                <button className="btn card-action_btn">В корзину <img src="./images/basket-btn.svg" alt="arrow" className="btn-icon" /></button>
            </div>
        </div>
    );
};