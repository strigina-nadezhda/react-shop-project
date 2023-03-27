import React, { FC } from "react";
import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import "../css/basket.css"

const BasketPage: FC = () => {
  // btn добавить в корзину
  const addBasket = (id: any) => {
    console.log("addBasket", id);
  };

  // btn оформить заказ
  const checkoutBask = (id: any) => {
    console.log(" checkoutBask", id);
    alert("Вы оформили заказ");
    // что после? почистить корзину!
  };

  // btn НАЗАД
  const back = (id: any) => {
    console.log(" back", id);
    alert("back");
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

  // массив в корзине
  const list = [
    {
      title: "BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот",
      unit: "Вес",
      size: "90",
      barcode: "4604049097552",
      manufacturer: "BioMio",
      brend: "BioMio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: "13,76 ",
    },
    {
      title: "ARIEL Автмат Гель СМС жидкое в растворимых капсулах ...",
      unit: "Вес",
      size: "900",
      barcode: "7804049097552",
      manufacturer: "BJH",
      brend: "LOL",
      description:
        "LOL ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
      price: "16,76 ",
    },
  ];

  return (
    <div className="bask">
      <div className="bask__back">
        <button
          type="button"
          className="bask__back--btn"
          onClick={() => {
            back("Назад: путь");
          }}
        >
          <MdChevronLeft />
        </button>
        <div className="bask__back--text"> НАЗАД</div>
      </div>
      <div className="bask__title">Корзина</div>
      <div className="bask__line"></div>

      {list.map((item) => (
        <div>
          <div className="bask__card">
            <div className="bask__card--img">
              <img
                className="bask__card--images"
                src="./images/card.png"
                alt="card"
              />
            </div>

            <div>
              <div className="bask__card--size">
                <img
                  src={
                    item.unit === "Вес"
                      ? "./images/box-icon.svg"
                      : "./images/bottle-icon.svg"
                  }
                  alt="box-icon"
                />
                <p className="bask__card--size-text">
                  {item.size} {item.unit === "Вес" ? " кг" : " мл"}
                </p>
              </div>
              <div className="bask__card--title">{item.title}</div>
              <div className="bask__card--description">{item.description}</div>
            </div>

            <div className="bask__vertical bask__vertical--left"></div>

            <div className="bask__box">
              <div className="bask__count">
                <button
                  className="bask__count--mark"
                  style={{ marginRight: "17px" }}
                  onClick={() => {
                    incrementCount(list);
                  }}
                >
                  -
                </button>
                <div>{count}</div>
                <button
                  className="bask__count--mark"
                  style={{ marginLeft: "17px" }}
                  type="button"
                  onClick={() => {
                    decrementCount(list);
                  }}
                >
                  +
                </button>
              </div>

              <div className="bask__vertical"></div>

              <div className="bask__price">{item.price} ₸</div>

              <div className="bask__vertical"></div>

              <button
                type="button"
                className="bask__btn"
                onClick={() => {
                  addBasket(item.barcode);
                }}
              >
                <img src="./images/basket-card.svg" alt="basket-card" />
              </button>
            </div>
          </div>
          <div className="bask__line"></div>
        </div>
      ))}
      <div className="bask__footer">
        <button
          type="button"
          className="bask__checkout"
          onClick={() => {
            checkoutBask("checkoutBask: цена");
          }}
        >
          Оформить заказ
        </button>
        <div className="bask__sum">1 348,76 ₸</div>
      </div>
    </div>
  );
};

export default BasketPage;
