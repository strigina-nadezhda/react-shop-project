/**
 * @jest-environment jsdom
 */

/**
 * 1) изменение общей суммы при изменении количества товаров в корзине
 * 2) появление заголовка "в корзине ничего нет", при удалении всех товаров из корзины/до добавления товаров в корзину
 * 3) отрисовка карточки товара на странице корзины
 * 
 */

import { BrowserRouter } from "react-router-dom"
import BasketPage from "../pages/BasketPage"
import { renderWithProviders } from "../testUtils/render"
import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { IProduct } from "../store/types/types"
import { count } from "console"

const testProduct: IProduct = {
    "img": "",
    "bigImg": "",
    "title": "test",
    "unit": "Объём",
    "size": "70",
    "barcode": '1',
    "manufacturer": "Gillette",
    "brand": "Gillette",
    "description": "пососи",
    "price": "666",
    "type": ["Уход за телом", "Приход за телом"]
};

describe('basket page', () => {


    test('empty basket page', () => {
        renderWithProviders(
            <BrowserRouter >
                <BasketPage />
            </BrowserRouter>
        )
        expect(screen.getByText(/В КОРЗИНЕ НИЧЕГО НЕТ/i)).toBeInTheDocument();
    })

    test('basket page with smth', () => {
        const initialState = {
            basket: {
                products: [{
                    count: 1,
                    product: testProduct
                }]
            }
        };

        renderWithProviders(
            <BrowserRouter >
                <BasketPage />
            </BrowserRouter>,
            { preloadedState: initialState }
        )

        expect(screen.getByText(/пососи/i)).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: "bask__btn" }));
        expect(screen.queryByText(/пососи/i)).not.toBeInTheDocument();
        expect(screen.getByText(/В КОРЗИНЕ НИЧЕГО НЕТ/i)).toBeInTheDocument();

    })

    test('basket page with smth +/- counter', () => {
        const initialState = {
            basket: {
                products: [{
                    count: 1,
                    product: testProduct
                }]
            }
        };

        renderWithProviders(
            <BrowserRouter >
                <BasketPage />
            </BrowserRouter>,
            { preloadedState: initialState }
        )



        fireEvent.click(screen.getByRole('button', { name: "bask__count++" }));

        expect(screen.getByTestId('bask__counter')).toHaveTextContent('2');

        expect(screen.getByTestId('totalPrice')).toHaveTextContent('1332 ₸');

        fireEvent.click(screen.getByRole('button', { name: "bask__count--" }));

        expect(screen.getByTestId('bask__counter')).toHaveTextContent('1');

        expect(screen.getByTestId('totalPrice')).toHaveTextContent('666 ₸');

    })
})