/* eslint-disable testing-library/await-async-query */
import renderer from "react-test-renderer";
import { ManufacturerFilter } from "../components/ManufacturersFilter";
import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();

it("show manufacturers filters", () => {
  const component = renderer.create(
    <Provider store={store}>
      <ManufacturerFilter />
    </Provider>
  );
  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();


  renderer.act(() => {
    component.root.findByProps({ className: 'box__toogle' }).props.onClick();
  });

  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();


  renderer.act(() => {
    component.root.findByProps({ className: 'box__toogle' }).props.onClick();
  });

  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
