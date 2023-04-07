import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "../products/slice";
import { ShopFilters, ShopOptionsState } from "../shop_options/slice";
import { IProduct } from "../../store/types/types";
import { rangeContains } from "../../utils/range";
import { ShopOptionsSelector } from "../shop_options/selector";
import { ProductsSelector } from "../products/selector";

export interface ShopState {
  shopOptions: ShopOptionsState;
  products: ProductsState;
}

function globalizeSelector<LocalState, Selected>(
  selector: (state: LocalState) => Selected,
  stateSelector: (state: ShopState) => LocalState
) {
  return (state: ShopState) => selector(stateSelector(state));
}

function fromOptionsSelector<Selected>(
  selector: (state: ShopOptionsState) => Selected
) {
  return globalizeSelector(selector, (state) => state.shopOptions);
}

function fromProductsSelector<Selected>(
  selector: (state: ProductsState) => Selected
) {
  return globalizeSelector(selector, (state) => state.products);
}

export namespace ShopSelector {
  const sortKey = fromOptionsSelector(ShopOptionsSelector.sortKey);
  const filters = fromOptionsSelector(ShopOptionsSelector.filters);
  const pageNum = fromOptionsSelector(ShopOptionsSelector.pageNum);
  const manufactorerFilter = fromOptionsSelector(
    ShopOptionsSelector.manufactorerFilter
  );

  const products = fromProductsSelector(ProductsSelector.products);
  const manufacturers = fromProductsSelector(ProductsSelector.manufacturers);

  export const filteredProducts = createSelector(
    sortKey,
    products,
    filters,
    (sortKey, products, filters) => {
      const filtered = filter(products, filters);
      const sorted = sort(filtered, sortKey);
      return sorted;
    }
  );

  export const filteredProductsPages = createSelector(
    filteredProducts,
    (filteredProducts) => {
      let pages = [];
      let pageSize = 6;
      let products = filteredProducts;
      for (let i = 0; i < filteredProducts.length; i += pageSize) {
        let page = products.slice(i, i + pageSize);
        pages.push(page);
      }
      return pages;
    }
  );

  export const currentPage = createSelector(
    filteredProductsPages,
    pageNum,
    (pages, pageNumber) => pages[pageNumber]
  );

  export const productCountersByManifacturer = createSelector(
    products,
    (products) => {
      let map = new Map<String, number>();

      products
        .map((e) => e.manufacturer)
        .forEach((manufacturer) => {
          let value = map.get(manufacturer) ?? 0;
          map.set(manufacturer, value + 1);
        });

      return map;
    }
  );

  export const filteredManufacturers = createSelector(
    manufacturers,
    manufactorerFilter,
    (manufacturers, filter) =>
      manufacturers.filter((e) =>
        e.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
  );
}

function sort(products: IProduct[], sortKey: string): IProduct[] {
  if (sortKey === "priceDown") {
    return [...products].sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  } else if (sortKey === "priceUp") {
    return [...products].sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
  } else if (sortKey === "titleUp") {
    return [...products].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    return [...products].sort((a, b) => b.title.localeCompare(a.title));
  }
}

function filter(products: IProduct[], filters: ShopFilters): IProduct[] {
  let filtered = products;

  filtered = filterByManufacturers(filters, filtered);
  filtered = filterByPrice(filters, filtered);
  filtered = filterByCategory(filters, filtered);

  return filtered;
}
function filterByManufacturers(filters: ShopFilters, filtered: IProduct[]) {
  if (filters.manufacturers.length !== 0) {
    return filtered.filter((e) =>
      filters.manufacturers.includes(e.manufacturer)
    );
  }

  return filtered;
}

function filterByPrice(filters: ShopFilters, filtered: IProduct[]) {
  return filtered.filter((e) =>
    rangeContains(filters.priceRange, parseFloat(e.price))
  );
}

function filterByCategory(filters: ShopFilters, filtered: IProduct[]) {
  if (filters.selectedCategories.length !== 0) {
    return filtered.filter((e) =>
      e.type?.some((el) => filters.selectedCategories.includes(el))
    );
  } else {
    return filtered;
  }
}
