import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const cardsApi = {
    getCards(currentPage) {
        return instance.get(`people/?page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getFavCard(cardId) {
        return instance.get(`people/${cardId}`)
            .then(response => {
                return response.data
            })
    }
}