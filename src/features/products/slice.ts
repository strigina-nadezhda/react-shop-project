import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products, { categories } from "../../products";
import { IProduct } from "../../store/types/types";

export interface ProductsState {
  products: IProduct[];
  categories: string[];
}

const initialState: ProductsState = {
  // products: products.slice(0, 2),
  products: _readProducts(),
  categories: categories,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex(
        (e) => e.barcode === action.payload.barcode
      );
      index >= 0
        ? (state.products[index] = action.payload)
        : state.products.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex(
        (e) => e.barcode === action.payload.barcode
      );
      state.products.splice(index, 1);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

function _readProducts(): IProduct[] {
  try {
    const productsJson = localStorage.getItem("products");

    if (productsJson) {
      const list = JSON.parse(productsJson);

      if (list && list.length > 0) {
        return list;
      }
    }
  } catch (e) {}

  return products;
}
