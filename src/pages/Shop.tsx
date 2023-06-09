import { FC } from "react";
import { CardProduct } from "../components/CardProduct";
import { Filters } from "../components/Filters";
import { Sort } from "../components/Sort";
import "../css/shop.css";
import { ShopOptionsSelector } from "../features/shop_options/selector";
import { changeCategory, changePage } from "../features/shop_options/slice";
import { IProduct } from "../store/types/types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { ProductsSelector } from "../features/products/selector";
import { useOptionsSelector, useProductsSelector, useShopSelector } from "../store/appSelectors";
import { ShopSelector } from "../features/shop/selector";

function createCards(products: IProduct[]) {
  return Array.from(products).map((product: IProduct, index: number) => (
    <div key={index}>
      <CardProduct {...product} />
    </div>
  ));
}

const Shop: FC = () => {
  const categories: string[] = useProductsSelector(ProductsSelector.categories);
  const selectedCategories = useOptionsSelector(ShopOptionsSelector.selectedCategories);
  const pages = useShopSelector(ShopSelector.filteredProductsPages);
  const pageNum = useOptionsSelector(ShopOptionsSelector.pageNum);
  const products = pages.length > pageNum ? pages[pageNum] : [];
  const dispatch = useAppDispatch();

  return (
    <div className="catalog">

      <Link to={"/"} className="btn-back_wrap"> <button className="btn-back btn"><img src="./images/arrow-back.svg" alt="back" /></button> <p>Назад </p> </Link>

      <div className="sort-wrapper">

        <h1 className="catalog-title">Косметика и гигиена</h1>
        <div className="filters-mobile">
          <Filters />
        </div>
        <Sort />
      </div>
      <div className="catigories">
        <ul>
          {Array.from(categories).map((type: string, index: number) => (
            <li
              className={selectedCategories.includes(type) ? "active" : " "}
              key={index}
              onClick={() => dispatch(changeCategory(type))}
              style={{}}
            >
              <p> {type.split(" ")[0]}</p>
              <p>

                {type.split(" ")[1]} {type.split(" ")[2]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-blok">
        <div className="filters-web">
          <Filters />
        </div>



        <div className="cards-wrap">
          {products.length === 0 && (
            <h1
              className="catalog-pustoi bold blue"
              style={{ display: pages.length ? "none" : "flex" }}
            >
              нет подходящих товаров
            </h1>
          )}

          <div className="cards">{createCards(products)}</div>


          <div className="cards-pagination">
            <button
              {...(pageNum === 0 ? { disabled: true } : { disabled: false })}
              onClick={() => dispatch(changePage(pageNum - 1))}
              className="page-btn"
            >
              <img src="./images/arrow-left.svg" alt="left" />
            </button>

            {pages.map((product, i) => (
              <div
                key={i}
                onClick={() => dispatch(changePage(i))}
                className={pageNum === i ? "page active" : "page"}
              >
                {i + 1}
              </div>
            ))}

            <button
              onClick={() => dispatch(changePage(pageNum + 1))}
              {...(pageNum === pages.length - 1
                ? { disabled: true }
                : { disabled: false })}
              className="page-btn"
            >

              <img src="./images/arrow-right.svg" alt="left" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
