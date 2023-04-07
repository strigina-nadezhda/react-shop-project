import { FC, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ShopSelector } from "../features/shop/selector";
import {
  changeCategory,
  changePriceRangeEnd,
  changePriceRangeStart,
  manufactorerFilterChanged,
  toggleManufacturer,
} from "../features/shop/slice";
import { ManufacturerFilter } from "./ManufacturersFilter";

export const Filters: FC = () => {
  //массив производителей


  const categories: string[] = useSelector(ShopSelector.categories);
  const selectedCategories = useSelector(ShopSelector.selectedCategories);

  const dispatch = useDispatch();

  // Показать/скрыть
  const [isShownAll, setIsShownAll] = useState(true);
  const toogleAll = () => {
    setIsShownAll((current) => !current);
  };

  //показать/скрыть фильтры на мобилке
  const [isShow, setIsShow] = useState(false);
  const toogleFilters = () => {
    setIsShow((current) => !current);
  };

  return (
    <div className="filters">
      <div style={{ display: "flex", alignItems: "center" }}>  <h4>ПОДБОР ПО ПАРАМЕТРАМ</h4>
        <button className="btn-up-filters " onClick={toogleFilters}>
          {isShow ? <img src="./images/arrow-up-mobile.svg" alt="up" /> : <img src="./images/arrow-down-mobile.svg" alt="down" />}
        </button>
      </div>
      {!isShow && <div>
        <div className="price">
          <div className="price-title">
            <p className="think blue">Цена </p>
            <p className="bold black">₸</p>
          </div>
          <div className="price-filter">
            <input
              type="number"
              defaultValue="0"
              name="price-input_from"
              className="price-filter_input from think blue"
              onChange={(e) =>
                dispatch(changePriceRangeStart(Number(e.target.value)))
              }
            />
            <p>-</p>
            <input
              type="number"
              defaultValue="10000"
              name="price-input_to"
              className="price-filter_input to think blue"
              onChange={(e) =>
                dispatch(changePriceRangeEnd(Number(e.target.value)))
              }
            />
          </div>
        </div>

        <ManufacturerFilter />

      </div >

      }
      <div className="filters-catigories">
        <ul>
          {Array.from(categories).map((type: string, index: number) => (
            <li
              className={selectedCategories.includes(type) ? "active" : " "}
              key={index}
              onClick={() => dispatch(changeCategory(type))}
              style={{}}
            >
              <h3>{type}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
