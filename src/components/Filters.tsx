import { FC, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ShopSelector } from "../features/shop/selector";
import {
    changePriceRangeEnd,
    changePriceRangeStart,
    manufactorerFilterChanged,
    toggleManufacturer,
} from "../features/shop/slice";

export const Filters: FC = () => {
    //массив производителей
    const manufacturers = useSelector(ShopSelector.filteredManufacturers);
    const manufacturersFilter = useSelector(ShopSelector.manufactorerFilter);

    const firstFiveManufacturers = [...manufacturers].splice(0, 5);

    const counters = useSelector(ShopSelector.productCountersByManifacturer);
    const selectedManufactorers = useSelector(ShopSelector.selectedManufactorers);



    const dispatch = useDispatch();


    // Показать/скрыть
    const [isShownAll, setIsShownAll] = useState(true);
    const toogleAll = () => {
        setIsShownAll((current) => !current);
    };

    return (
        <div className="filters">
            <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
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
                        onChange={(e) => dispatch(changePriceRangeStart(Number(e.target.value)))}
                    />
                    <p>-</p>
                    <input
                        type="number"
                        defaultValue="10000"
                        name="price-input_to"
                        className="price-filter_input to think blue"
                        onChange={(e) => dispatch(changePriceRangeEnd(Number(e.target.value)))}
                    />
                </div>
            </div>

            <div className="manufacturer">
                <h4> Производитель</h4>
                <div className="manufacturer-input">
                    <input
                        id="searchInput"
                        type="text"
                        name="searchInput"
                        placeholder="Поиск..."
                        value={manufacturersFilter}
                        onChange={(e) =>
                            dispatch(manufactorerFilterChanged(e.target.value))
                        }
                    />
                    <button id="searchBtn" type="submit" name="searchBtn">
                        <img src="./images/search.svg" alt="icon" />
                    </button>
                </div>
                <div className="manufacturer-chekbox">
                    <div style={{ display: !isShownAll ? "none" : "block" }}>
                        {firstFiveManufacturers.map((manufacturer, i) => (
                            <label
                                htmlFor="chekbox"
                                className="manufacturer-chekbox_lable"
                                key={i}
                            >
                                <input
                                    type="checkbox"
                                    name="manufacturer"
                                    id={String(i)}
                                    className="manufacturer-chekbox_input"
                                    checked={selectedManufactorers.includes(manufacturer)}
                                    onChange={() => dispatch(toggleManufacturer(manufacturer))}
                                />
                                <p className="think blue"> {manufacturer}</p>{" "}
                                <p className="think blue">
                                    {" "}
                                    ({counters.get(manufacturer) ?? 0})
                                </p>
                            </label>
                        ))}
                    </div>

                    <div style={{ display: isShownAll ? "none" : "block" }}>
                        {manufacturers.map((manufacturer, i) => (
                            <label
                                htmlFor="chekbox"
                                className="manufacturer-chekbox_lable"
                                key={i}
                            >
                                <input
                                    type="checkbox"
                                    name="manufacturer"
                                    id={String(i)}
                                    className="manufacturer-chekbox_input"
                                    checked={selectedManufactorers.includes(manufacturer)}
                                    onChange={() => dispatch(toggleManufacturer(manufacturer))}
                                />
                                <p className="think blue"> {manufacturer}</p>{" "}
                                <p className="think blue">
                                    {" "}
                                    ({counters.get(manufacturer) ?? 0})
                                </p>
                            </label>
                        ))}
                    </div>

                    <div onClick={toogleAll} className="box__toogle">
                        {isShownAll ? "Показать все " : "Скрыть все "}
                        {isShownAll ? <MdArrowDropDown /> : <MdArrowDropUp />}
                    </div>
                </div>
            </div>

            <h3>Уход за телом</h3>
            <h3>Уход за руками</h3>
            <h3>Уход за ногами</h3>
            <h3>Уход за лицом</h3>
            <h3>Уход за волосами</h3>
            <h3>Средства для загара</h3>
            <h3>Средства для бритья</h3>
            <h3>Подарочные наборы</h3>
        </div>
    );
};
