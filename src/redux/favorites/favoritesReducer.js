import { actionTypes } from "./favoritesConstants";

const initialState = {
    products: [],
    empty: true
};

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                products: [...state.products, action.payload.product],
                empty: false
            };
        case actionTypes.REMOVE_FROM_FAVORITES:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id;
            });

            return {
                ...state,
                products: filteredProducts,
                empty: true
            };
        default:
            return state;
    }
}
