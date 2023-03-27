import React, { FC } from "react";
import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Breadcrumbs } from "../components/Breadcrumbs";
import '../css/productPage.css'
import { IProduct } from "../store/types/types";

export const ProductPage: FC<IProduct> = (product) => {
  // btn добавить в корзину
  const addBasket = (id: any) => {
    console.log(id);
  };
  let [count, setCount] = useState(0);

  function incrementCount(list: any) {
    if (count > 0) {
      count = count - 1;
    }
    setCount(count);
    console.log(list.brend, count);
  }
  function decrementCount(list: any) {
    count = count + 1;
    setCount(count);
    console.log(list.brend, count);
  }

  //  Описание
  const [isShown, setIsShown] = useState(true);
  //  характеристика
  const [isShownFeature, setIsShownFeature] = useState(true);

  //  Описание toogle
  const handleClick = () => {
    setIsShown((current) => !current);
  };
  // характеристика toogle
  const handleClickDesc = () => {
    setIsShownFeature((current) => !current);
  };

  // продукт который придет из вне
  // const product = {
  //   title: "BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
  //   unit: "Вес",
  //   size: "90",
  //   barcode: "4604049097552",
  //   manufacturer: "BioMio",
  //   brend: "BioMio",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
  //   price: "13,76 ",
  // };

  return (
    <div className="wrapper">
      <Breadcrumbs />
      <div className="box">

        <div className="box__left">
          <img className="box__left--img" src={`../images/${product.img}`} alt="card" />
        </div>
        <div className="box__right">
          <div className="box__information">
            <div className="box__desc">
              <div className="box__desc--stock">В наличии</div>

              <div className="box__desc--name">{product.title}</div>

              <div className="box__desc--gram">


                <img src={product.unit === 'Вес' ? '../images/box-icon.svg' : "../images/bottle-icon.svg"} alt="box-icon" className="icon" />
                <p className="card-size_text">{product.size} {product.unit === 'Вес' ? ' кг' : " мл"}</p>

              </div>

              <div className="box__desc--basket">
                <div className="box__desc--count">
                  <div className="box__desc--price">{product.price} ₸</div>
                  <div className="box__desc--minplus">
                    <button
                      className="box__desc--plmn"
                      onClick={() => {
                        incrementCount(product);
                      }}
                      style={{ marginRight: "17px" }}
                    >
                      -
                    </button>
                    <div>{count}</div>
                    <button
                      style={{ marginLeft: "17px" }}
                      type="button"
                      onClick={() => {
                        decrementCount(product);
                      }}
                      className="box__desc--plmn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="box__btn"
                    onClick={() => {
                      addBasket("id: 1");
                    }}
                  >
                    В корзину
                    <img src="../images/basket-white.svg" alt="basket-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="box__sm">
            <button
              type="button"
              className="box__sm--btn"
              onClick={() => {
                addBasket("id: 1");
              }}
            >
              В корзину
            </button>
            <div className="box__sm--icon">
              <img src="../images/share.svg" alt="share" />
            </div>
          </div>

          <div className="box__info">
            <div className="box__info--icon">
              <img src="../images/share.svg" alt="share" />
            </div>
            <div className="box__info--text">
              <div className="box__info--t">
                При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и
                области
              </div>
            </div>
            <div className="box__info--link">
              Прайс-лист
              <img
                src="../images/save.svg"
                alt="save"
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>

          <div style={{ fontSize: "14px", marginBottom: "30px" }}>
            <p style={{ marginBottom: "5px" }}>
              <span style={{ fontWeight: 300 }}>Производитель: </span>
              <span style={{ fontWeight: 800 }}>{product.brand}</span>
            </p>
            <p style={{ marginBottom: "5px" }}>
              <span style={{ fontWeight: 300 }}>Бренд: </span>
              <span style={{ fontWeight: 800 }}>{product.brand}</span>
            </p>
            <p style={{ marginBottom: "5px" }}>
              <span style={{ fontWeight: 300 }}>Артикул: </span>
              <span style={{ fontWeight: 800 }}>{product.barcode.slice(1, 4)}</span>
            </p>
            <p style={{ marginBottom: "5px" }}>
              <span style={{ fontWeight: 300 }}>Штрихкод: </span>
              <span style={{ fontWeight: 800 }}>{product.barcode}</span>
            </p>
          </div>

          <div onClick={handleClick} className="box__toogle">
            Описание {isShown ? <MdArrowDropDown /> : <MdArrowDropUp />}
          </div>
          <div style={{ display: isShown ? "none" : "block" }}>
            {product.description}
          </div>

          <div className="box__line"></div>

          <div onClick={handleClickDesc} className="box__toogle">
            Характеристика{" "}
            {isShownFeature ? <MdArrowDropDown /> : <MdArrowDropUp />}
          </div>
          <div style={{ display: isShownFeature ? "none" : "block" }}>
            <div style={{ fontSize: "14px" }}>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Название: </span>
                <span style={{ fontWeight: 800 }}>{product.brand}</span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Тип: </span>
                <span style={{ fontWeight: 800 }}>{product.brand}</span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Производитель: </span>
                <span style={{ fontWeight: 800 }}>
                  {product.barcode.slice(1, 6)}
                </span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Бренд: </span>
                <span style={{ fontWeight: 800 }}>{product.barcode}</span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Артикул: </span>
                <span style={{ fontWeight: 800 }}>
                  {product.barcode.slice(1, 4)}
                </span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Штрихкод: </span>
                <span style={{ fontWeight: 800 }}>{product.barcode}</span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Вес: </span>
                <span style={{ fontWeight: 800 }}>{product.size}</span>
              </p>
              <p style={{ marginBottom: "5px" }}>
                <span style={{ fontWeight: 300 }}>Объем: </span>
                <span style={{ fontWeight: 800 }}>{product.size}</span>
              </p>
              <p>
                <span style={{ fontWeight: 300 }}>Кол-во в коробке: </span>
                <span style={{ fontWeight: 800 }}>{product.size}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

