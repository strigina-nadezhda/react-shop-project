import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import adminReducer from "../features/admin/slice";
import basketReducer from "../features/basket/slice";
import productsReducer from "../features/products/slice";
import shopOptionsReducer from "../features/shop_options/slice";

const rootReducer = combineReducers({
  shopOptions: shopOptionsReducer,
  basket: basketReducer,
  admin: adminReducer,
  products: productsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
