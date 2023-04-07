import { ShopOptionsState } from "./slice";

export namespace ShopOptionsSelector {
  export const sortKey = (state: ShopOptionsState) => state.sortKey;
  export const selectedCategories = (state: ShopOptionsState) =>
    state.filters.selectedCategories;
  export const pageNum = (state: ShopOptionsState) => state.page;

  export const manufactorerFilter = (state: ShopOptionsState) =>
    state.filters.manufacturersFilter;
  export const filters = (state: ShopOptionsState) => state.filters;

  export const selectedManufactorers = (state: ShopOptionsState) =>
    state.filters.manufacturers;
}
