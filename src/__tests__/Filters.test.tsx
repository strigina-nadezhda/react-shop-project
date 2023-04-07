import { ShopSelector } from '../features/shop/selector';
import reducer, { ShopState, changePriceRangeStart } from '../features/shop/slice'
import { RootState } from '../store';
//import {filteredProducts} from '../features/shop/selector'

test('price range filter', () => {
    const previousState: ShopState = {
        categories: [],
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

    const nextState: ShopState = {
        categories: [],
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

// test('selector filter test', () => {
//     const previousState: ShopState = {
//         categories: [],
//         sortKey: 'titleUp',
//         page: 0,
//         filters: {
//             manufacturers: [],
//             manufacturersFilter: "",
//             priceRange: {
//                 start: 0,
//                 end: 10000,
//             },
//             selectedCategories: [],
//         },
//     };



//     const filteredProducts = ShopSelector.filteredProducts()
// })