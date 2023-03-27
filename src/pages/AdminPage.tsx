import React, { FC } from "react";
import { Table } from "../components/table/Table";
import '../css/adminPage.css'
// import { useSelector } from "react-redux";


const AdminPage: FC = () => {

  return (
    <div className="adminPage">
      <div className="adminPage-header">
        <h1 >  Товары  </h1>
        <button className="btn"> +  Добавить товар</button>

      </div>

      <Table />
    </div>
  );
};

export default AdminPage;



