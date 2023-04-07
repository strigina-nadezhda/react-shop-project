import { IProduct } from "../store/types/types";
import { BasketSelector } from "../features/basket/selector";
import { addProduct, removeProduct } from "../features/basket/slice";
import { useAppDispatch } from "../store/hooks";
import { useBasketSelector } from "../store/appSelectors";



export const BasketCounterBtn = (product: IProduct) => {
    const dispatch = useAppDispatch();
    const count = useBasketSelector(BasketSelector.countOfProductInBasket(product));

    const inBasket = count > 0;
    return (
        <div className="bask__count" style={{ display: inBasket ? "flex" : "none" }}>
            <button
                aria-label="bask__count--"
                className="bask__count--mark"
                style={{ marginRight: "17px" }}
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeProduct(product))
                }}
            >
                -
            </button>
            <div data-testid="bask__counter">{count}</div>
            <button
                aria-label="bask__count++"
                className="bask__count--mark"
                style={{ marginLeft: "17px" }}
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addProduct(product))
                }}
            >
                +
            </button>
        </div>
    )
}