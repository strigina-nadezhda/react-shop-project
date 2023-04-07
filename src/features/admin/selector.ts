import { AdminState } from "./slice";

export namespace AdminSelector {
  export const editableProduct = (state: AdminState) => state.editableProduct;

  export const isDialogOpen = (state: AdminState) => state.isDialogOpen;
}
