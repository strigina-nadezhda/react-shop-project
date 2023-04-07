import { ProductsState } from "./slice";

export namespace ProductsSelector {
  export const products = (state: ProductsState) => state.products;
  export const categories = (state: ProductsState) => state.categories;
}
