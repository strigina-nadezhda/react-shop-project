import React, { FC } from "react";
import { Table } from "../components/table/Table";
import { AdminDialogForm } from "../components/admin/AdminDialogForm";
import "../css/adminPage.css";
import { MdClose } from "react-icons/md";
import { AdminSelector } from "../features/admin/selector";
import { closeDialog, openCreateProductDialog } from "../features/admin/slice";
import { useAppDispatch } from "../store/hooks";
import { useAdminSelector } from "../store/appSelectors";

const AdminPage: FC = () => {
  const dispatch = useAppDispatch();

  const isDialogOpen = useAdminSelector(AdminSelector.isDialogOpen);



  return (
    <div className="adminPage">
      <div className="adminPage-header">
        <h1> Товары </h1>
        <button className="btn" onClick={() => dispatch(openCreateProductDialog())}>
          + Добавить товар
        </button>
      </div>

      {isDialogOpen && (
        <dialog
          id="dialog"
          className="popup"
          style={{ display: "block" }}
        >
          <button className="close-popup" onClick={() => dispatch(closeDialog())}>
            <MdClose />
          </button>
          <AdminDialogForm />
        </dialog>
      )}
      <Table />
    </div>
  );
};

export default AdminPage;
