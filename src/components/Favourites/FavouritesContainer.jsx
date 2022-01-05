import { connect } from "react-redux"
import Favourites from "./Favourites"
import React from "react"
import { getFavCharactersThunk, deleteFavCharacterThunk } from '../../redux/characters-reducer'
import { Route, Switch, withRouter } from "react-router-dom"
import CardInfo from "../Characters/CardInfo"

class FavouritesContainer extends React.Component {
    componentDidMount() {
        this.props.getFavCharactersThunk(this.props.favCurrentPage)
    }
    render() {
        return (
            <Switch>
                <Route path={`/favourites/${this.props.match.params.cardId}`} render={() => <CardInfo characters={this.props.favCharacters}
                    isLoading={this.props.isLoading} cardId={this.props.match.params.cardId} favCurrentPage={this.props.favCurrentPage}/>} />
                <Route path='/favourites' render={() => <Favourites getFavCharactersThunk={this.props.getFavCharactersThunk}
                    favCharacters={this.props.favCharacters} isLoading={this.props.isLoading}
                    deleteFavCharacterThunk={this.props.deleteFavCharacterThunk} currentPage={this.props.favCurrentPage}
                    totalCharactersCount={this.props.totalCharactersCount} isNoChar={this.props.isNoChar} />} />
            </Switch>

        )
    }
}

let withUrlDataContainer = withRouter(FavouritesContainer)

let mapStateToProps = (state) => {
    return {
        favCharacters: state.charactersPage.favCharacters,
        isLoading: state.charactersPage.isLoading,
        favCurrentPage: state.charactersPage.favCurrentPage,
        totalCharactersCount: state.charactersPage.totalCharactersCount,
        isNoChar: state.charactersPage.isNoChar
    }
}

export default connect(mapStateToProps, { getFavCharactersThunk, deleteFavCharacterThunk })(withUrlDataContainer)

