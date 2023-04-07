import { createLocalSelectorHook } from "../utils/selector_utils";

export const useBasketSelector = createLocalSelectorHook(
  (state) => state.basket
);
export const useAdminSelector = createLocalSelectorHook((state) => state.admin);
export const useOptionsSelector = createLocalSelectorHook(
  (state) => state.shopOptions
);
export const useProductsSelector = createLocalSelectorHook(
  (state) => state.products
);
export const useShopSelector = createLocalSelectorHook((state) => {
  return {
    shopOptions: state.shopOptions,
    products: state.products,
  };
});
