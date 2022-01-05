import { connect } from "react-redux"
import Characters from "./Characters"
import { getCharactersThunk, toggleLikeThunk } from '../../redux/characters-reducer'
import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import CardInfo from "./CardInfo"

class CharactersContainer extends React.Component {

    componentDidMount() {
        this.props.getCharactersThunk(this.props.currentPage)
    }

    render() {
        return (
            <Switch>
                <Route path={`/characters/${this.props.match.params.cardId}`} render={() => <CardInfo characters={this.props.characters}
                    isLoading={this.props.isLoading} cardId={this.props.match.params.cardId} />} />
                <Route path='/characters' render={() => <Characters characters={this.props.characters} currentPage={this.props.currentPage}
                    getCharactersThunk={this.props.getCharactersThunk} toggleLikeThunk={this.props.toggleLikeThunk}
                    totalCharactersCount={this.props.totalCharactersCount} isLoading={this.props.isLoading} />} />
            </Switch>
        )
    }
}

let withUrlDataContainer = withRouter(CharactersContainer)

let mapStateToProps = (state) => {
    return {
        characters: state.charactersPage.characters,
        currentPage: state.charactersPage.currentPage,
        isLoading: state.charactersPage.isLoading,
        totalCharactersCount: state.charactersPage.totalCharactersCount
    }
}

export default connect(mapStateToProps, { getCharactersThunk, toggleLikeThunk })(withUrlDataContainer)

