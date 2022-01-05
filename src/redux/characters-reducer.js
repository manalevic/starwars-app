import { cardsApi } from "../api/api"

const SET_CHARACTERS = 'SET_CHARACTERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_FAV_CHARACTERS = "GET_FAV_CHARACTERS"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"
const DELETE_FAV_CHARACTER = "DELETE_FAV_CHARACTER"
const SET_TOTAL_CHARACTERS_COUNT = "SET_TOTAL_CHARACTERS_COUNT"
const SET_FAV_CURRENT_PAGE = "SET_FAV_CURRENT_PAGE"
const TOGGLE_IS_NO_CHAR = "TOGGLE_IS_NO_CHAR"

const initialState = {
    characters: [],
    currentPage: 1,
    favCharacters: [],
    isLoading: false,
    totalCharactersCount: 0,
    favCurrentPage: 1,
    isNoChar: false
}

let charactersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CHARACTERS:
            return { ...state, characters: action.characters }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_FAV_CHARACTERS:
            return { ...state, favCharacters: action.favCharacters }
        case SET_FAV_CURRENT_PAGE:
            return { ...state, favCurrentPage: action.favCurrentPage }
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case DELETE_FAV_CHARACTER:
            return { ...state, favCharacters: [...state.favCharacters.filter(u => u.url.replace(/\D/g, "") !== action.cardId)] }
        case SET_TOTAL_CHARACTERS_COUNT:
            return { ...state, totalCharactersCount: action.count }
        case TOGGLE_IS_NO_CHAR: 
            return {...state, isNoChar: action.condition}
        default:
            return state
    }
}

const getFavCharacters = () => {
    let favCharactersId = []
    let keys = Object.keys(localStorage)
    for (let key of keys) {
        favCharactersId.push(+key)
    }
    function compare(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }
    return favCharactersId = favCharactersId.sort(compare)
}

export const getCharactersThunk = (currentPage) => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let response = await cardsApi.getCards(currentPage)
    dispatch(setTotalCharactersCountAC(response.count))
    dispatch(setCharactersAC(response.results))
    dispatch(toggleIsLoadingAC(false))
}

export const getFavCharactersThunk = (currentPage) => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    dispatch(setFavCurrentPageAC(currentPage))
    let favCharactersId = getFavCharacters()
    dispatch(setTotalCharactersCountAC(favCharactersId.length))
    favCharactersId.length === 0 ? dispatch(toggleIsNoCharAC(true)) : dispatch(toggleIsNoCharAC(false))
    let responses = []
    for (let i = currentPage * 10 - 10; i <= currentPage * 10 - 1; i++) {
        if (favCharactersId[i] !== undefined) {
            let response = await cardsApi.getFavCard(favCharactersId[i])
            responses.push(response)
        }
    }
    dispatch(setFavCharactersAC(responses))
    dispatch(toggleIsLoadingAC(false))
}

export const deleteFavCharacterThunk = (cardId, currentPage) => async (dispatch) => {
    localStorage.removeItem(cardId)
    dispatch(deleteFavCharacterAC(cardId))
    let favCharactersId = getFavCharacters()
    dispatch(setTotalCharactersCountAC(favCharactersId.length))
    favCharactersId.length === 0 ? dispatch(toggleIsNoCharAC(true)) : dispatch(toggleIsNoCharAC(false))
    if (currentPage > Math.ceil(favCharactersId.length / 10)) {
        if (currentPage !== 1 ) {
            currentPage = currentPage - 1
        }
    }
    let responses = []
    for (let i = currentPage * 10 - 10; i <= currentPage * 10 - 1; i++) {
        if (favCharactersId[i] !== undefined) {
            let response = await cardsApi.getFavCard(favCharactersId[i])
            responses.push(response)
        }
    }
    dispatch(setFavCurrentPageAC(currentPage))
    dispatch(setFavCharactersAC(responses))
}

export const toggleLikeThunk = (condition, cardId) => (dispatch) => {
    if (condition) {
        localStorage.removeItem(cardId)
    } else {
        localStorage.setItem(cardId, '+')
    }
}

const setCharactersAC = (characters) => ({ type: SET_CHARACTERS, characters })
const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
const setFavCharactersAC = (favCharacters) => ({ type: SET_FAV_CHARACTERS, favCharacters })
const toggleIsLoadingAC = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const deleteFavCharacterAC = (cardId) => ({ type: DELETE_FAV_CHARACTER, cardId })
const setTotalCharactersCountAC = (count) => ({ type: SET_TOTAL_CHARACTERS_COUNT, count })
const setFavCurrentPageAC = (favCurrentPage) => ({ type: SET_FAV_CURRENT_PAGE, favCurrentPage })
const toggleIsNoCharAC = (condition) => ({type: TOGGLE_IS_NO_CHAR, condition})

export default charactersReducer