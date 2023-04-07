import { RootState } from "../../store";
import { ProductsState } from "./slice";

export namespace ProductsSelector {
  export const products = (state: ProductsState) => state.products;
}
