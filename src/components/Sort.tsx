import React from "react";
import { changeSortKey } from "../features/shop/slice";
import { ShopSelector } from "../features/shop/selector";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Sort: React.FC = () => {
    const sortKey = useAppSelector(ShopSelector.sortKey);
    const dispatch = useAppDispatch()

    return (
        <div className="sort">
            <label htmlFor="sort-select">Сортировка:</label>

            <select name="sort" id="sort-select" value={sortKey} onChange={(event) => dispatch(changeSortKey(event.target.value))} >

                <option value="titleUp" >Название А-Я</option>
                <option value="titleDown" >Название Я-А</option>
                <option value="priceDown">По возрастанию</option>
                <option value="priceUp">По убыванию</option>

            </select>
        </div>


    )
}



