import { FC, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { manufactorerFilterChanged, toggleManufacturer } from "../features/shop/slice";
import { useSelector } from "react-redux";
import { ShopSelector } from "../features/shop/selector";
import { useDispatch } from "react-redux";

export const ManufacturerFilter: FC = () => {
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
                            <p className="think blue"> {manufacturer}</p>
                            <p className="think blue">

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
                            <p className="think blue"> {manufacturer}</p>
                            <p className="think blue">

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

    )
}