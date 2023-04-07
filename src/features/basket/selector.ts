import { IProduct } from "../../store/types/types";
import { BasketState } from "./slice";

export namespace BasketSelector {
  export const products = (state: BasketState) => state.products;

  export const totalCount = (state: BasketState) =>
    state.products.map((e) => e.count).reduce((a, b) => a + b, 0);

  export const totalPrice = (state: BasketState) =>
    state.products
      .map((e) => e.count * parseFloat(e.product.price))
      .reduce((a, b) => a + b, 0);

  export const countOfProductInBasket =
    (product: IProduct) => (state: BasketState) =>
      state.products.find((e) => e.product.barcode === product.barcode)
        ?.count ?? 0;
}
