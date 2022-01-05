import Preloader from '../common/Preloader/Preloader'
import Pagination from '../Pagination/Pagination'
import Card from './Card/Card'
import s from './Characters.module.css'

const Characters = (props) => {
    return (
        <div className={s.characters} >
            <div className={s.header}>
                <div className={s.headerText}>Characters</div>
                <Pagination currentPage={props.currentPage} getCharacters={props.getCharactersThunk} totalCharactersCount={props.totalCharactersCount}/>
            </div>
            {props.isLoading ? <div className={s.cards}> <Preloader/> </div>: <div className={s.cards}>
                {props.characters !== undefined && props.characters.map(card => <Card name={card.name} id={card.url.replace(/\D/g, "")} 
                key={card.url.replace(/\D/g, "")}  toggleLikeThunk={props.toggleLikeThunk}/>)}
            </div>}
        </div>
    )
}

export default Characters

