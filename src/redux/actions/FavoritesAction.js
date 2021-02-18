export const ADD_FAVORITES = "add favorites";
export const DELETE_FAVORITES = "delete favorites";

export function addFavorites(gif) {
    return {type:ADD_FAVORITES, favorite: gif }
} 

export function deleteFavorites(id) {
    return {type:DELETE_FAVORITES, id: id }
}