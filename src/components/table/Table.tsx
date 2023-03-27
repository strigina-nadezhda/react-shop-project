import { IProduct } from "../../store/types/types";
import { useSelector } from "react-redux";



export const Table = () => {
    const products: IProduct[] = useSelector((state: any) => state.products.products)



    return (
        <table>

            <thead>
                <tr>
                    <th>&nbsp;</th>

                    <th>Название товара</th>
                    <th>Производитель</th>
                    <th>Размер</th>
                    <th>Цена</th>
                    <th>Количество</th>
                </tr>
            </thead>
            <tbody>

                {
                    Array.from(products).map((product: IProduct, i) =>
                        <tr key={i}>
                            <td><img src={`./images/${product.img}`} alt="product-img" /></td>
                            <td>{product.title}</td>
                            <td>{product.manufacturer}</td>
                            <td>{product.size}</td>
                            <td>{product.price}</td>
                            <td>1</td>
                        </tr>
                    )
                }


            </tbody>

        </table>
    )
};

