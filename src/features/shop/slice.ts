import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products";
import { IProduct } from "../../store/types/types";
import { Range } from "../../utils/range";

export interface ShopFilters {
  manufacturers: string[];
  manufacturersFilter: string;
  priceRange: Range;
}

export interface ShopState {
  products: IProduct[];
  sortKey: string;
  filters: ShopFilters;
}

const initialState: ShopState = {
  products: products,
  sortKey: "title",
  filters: {
    manufacturers: [],
    manufacturersFilter: "",
    priceRange: {
      start: 0,
      end: 10000,
    },
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changeSortKey: (state, action: PayloadAction<string>) => {
      state.sortKey = action.payload;
    },
    toggleManufacturer: (state, action: PayloadAction<string>) => {
      let set = new Set(state.filters.manufacturers);

      if (set.has(action.payload)) {
        set.delete(action.payload);
      } else {
        set.add(action.payload);
      }

      state.filters.manufacturers = Array.from(set);
    },
    manufactorerFilterChanged: (state, action: PayloadAction<string>) => {
      state.filters.manufacturersFilter = action.payload;
    },
    changePriceRangeStart: (state, action: PayloadAction<number>) => {
      state.filters.priceRange.start = action.payload;
    },
    changePriceRangeEnd: (state, action: PayloadAction<number>) => {
      state.filters.priceRange.end = action.payload;
    },
  },
});

export const {
  changeSortKey,
  toggleManufacturer,
  manufactorerFilterChanged,
  changePriceRangeStart,
  changePriceRangeEnd,
} = shopSlice.actions;

export default shopSlice.reducer;
