import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RouterElement from "./router";
import { setupStore } from "./store";

const store = setupStore();

store.subscribe(() => {
  localStorage.setItem(
    "products",
    JSON.stringify(store.getState().products.products)
  );

  localStorage.setItem("basket", JSON.stringify(store.getState().basket));
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterElement />
  </Provider>
);
