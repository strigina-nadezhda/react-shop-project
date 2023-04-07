import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "./slice";

export namespace ProductsSelector {
  export const products = (state: ProductsState) => state.products;
  export const categories = (state: ProductsState) => state.categories;

  export const manufacturers = createSelector(products, (products) =>
    unique(products.map((product) => product.manufacturer))
  );
}

function unique<T>(source: Array<T>): Array<T> {
  const set = new Set(source);
  return Array.from(set);
}
