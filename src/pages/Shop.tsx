import { FC } from "react";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CardProduct } from "../components/CardProduct";
import { Filters } from "../components/Filters";
import { Sort } from "../components/Sort";
import "../css/shop.css";
import { ShopSelector } from "../features/shop/selector";
import { IProduct } from "../store/types/types";
// import { } from "../features/shop/selector";



function createCards(products: IProduct[]) {
  return Array.from(products).map((product: IProduct, index: number) => (
    <div key={index} >
      <CardProduct  {...product} />
    </div>
  ))
}



const Shop: FC = () => {
  // const categories: string[] = useSelector((state: RootState) => state.shop.categories);
  const categories: string[] = [];
  const products: IProduct[] = useSelector(ShopSelector.filteredProducts);


  return (
    <div className="catalog">
      <Breadcrumbs />
      <div className="sort-wrapper">
        <h1 className="bold">КАТАЛОГ</h1> <Sort />
      </div >
      <div className="catigories">
        <ul>
          {Array.from(categories).map((type: string, index: number) => (

            <li key={index} >
              <p> {type.split(' ')[0]}</p>
              <p> {type.split(' ')[1]} {type.split(' ')[2]}</p>
            </li>

          ))}
        </ul>
      </div>
      <div className="main-blok">
        <Filters />

        <div className="cards">
          {createCards(products)}
        </div>

      </div>

    </div>
  );
};

export default Shop;