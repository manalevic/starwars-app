import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import CharactersContainer from './components/Characters/CharactersContainer';
import FavouritesContainer from './components/Favourites/FavouritesContainer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/characters/:cardId?" render={() => <CharactersContainer />} />
        <Route path="/favourites/:cardId?" render={() => <FavouritesContainer />} />
        <Redirect from="/" to="/characters" />
      </Switch>

    </div>
  );
}

export default App;
