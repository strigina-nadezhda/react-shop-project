import { ProductsState } from '../features/products/slice';
import { ShopSelector } from '../features/shop/selector';
import reducer, { ShopOptionsState, changePriceRangeStart } from '../features/shop_options/slice'
import { IProduct } from '../store/types/types';
//import {filteredProducts} from '../features/shop/selector'

test('price range filter', () => {
    const previousState: ShopOptionsState = {
        sortKey: 'titleUp',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 0,
                end: 10000,
            },
            selectedCategories: [],
        },
    };

    const nextState: ShopOptionsState = {
        sortKey: 'titleUp',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 400,
                end: 10000,
            },
            selectedCategories: [],
        },
    };

    expect(reducer(previousState, changePriceRangeStart(400))).toEqual(nextState);


})

const testProduct: IProduct = {
    "img": "",
    "bigImg": "",
    "title": "test",
    "unit": "Объём",
    "size": "70",
    "barcode": '1',
    "manufacturer": "Gillette",
    "brand": "Gillette",
    "description": "",
    "price": "666",
    "type": ["Уход за телом", "Приход за телом"]
};

test('selector filter test', () => {


    const products: ProductsState = {
        products: [testProduct, { ...testProduct, "price": "10" }],
        categories: []
    }
    const options: ShopOptionsState = {
        sortKey: 'titleUp',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 0,
                end: 10000,
            },
            selectedCategories: [],
        },
    };
    const nextOptions: ShopOptionsState = {
        sortKey: 'titleUp',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 100,
                end: 10000,
            },
            selectedCategories: [],
        },
    };



    const filteredProducts = ShopSelector.filteredProducts({
        shopOptions: options, products: products
    });
    expect(filteredProducts.length).toBe(2);
    const nextFilteredProducts = ShopSelector.filteredProducts({
        shopOptions: nextOptions, products: products
    });
    expect(nextFilteredProducts.length).toBe(1);
})


test('changing sortKey test', () => {

    const product1 = testProduct;
    const product2 = { ...testProduct, "title": "abcd" }

    const products: ProductsState = {
        products: [product1, product2],
        categories: []
    }

    const options: ShopOptionsState = {
        sortKey: 'titleUp',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 0,
                end: 10000,
            },
            selectedCategories: [],
        },
    };
    const nextOptions: ShopOptionsState = {
        sortKey: 'titleDown',
        page: 0,
        filters: {
            manufacturers: [],
            manufacturersFilter: "",
            priceRange: {
                start: 0,
                end: 10000,
            },
            selectedCategories: [],
        },
    };


    const filteredProducts = ShopSelector.filteredProducts({
        shopOptions: options, products: products
    });
    expect(filteredProducts).toStrictEqual([product2, product1]);

    const nextFilteredProducts = ShopSelector.filteredProducts({
        shopOptions: nextOptions, products: products
    });
    expect(nextFilteredProducts).toStrictEqual([product1, product2]);
})