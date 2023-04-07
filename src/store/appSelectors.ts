import { RootState } from ".";
import { ShopState } from "../features/shop/selector";
import { useAppSelector } from "../store/hooks";

type Selector<State, Selected> = (state: State) => Selected;
type GlobalSelectorHook<State> = <Selected>(
  selector: Selector<State, Selected>
) => Selected;

function useLocalSelector<State, Selected>(
  selector: Selector<State, Selected>,
  stateSelector: (state: RootState) => State
) {
  return useAppSelector((state) => selector(stateSelector(state)));
}

function createLocalSelectorHook<State>(
  stateSelector: (state: RootState) => State
): GlobalSelectorHook<State> {
  return (selector) => useLocalSelector(selector, stateSelector);
}

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
export const useShopSelector = createLocalSelectorHook(toShopState);

function toShopState(state: RootState): ShopState {
  return {
    shopOptions: state.shopOptions,
    products: state.products,
  };
}
