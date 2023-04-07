import reducer, { ShopOpitonsState, changePriceRangeStart } from '../features/shop_options/slice'
//import {filteredProducts} from '../features/shop/selector'

test('price range filter', () => {
    const previousState: ShopOpitonsState = {
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

    const nextState: ShopOpitonsState = {
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