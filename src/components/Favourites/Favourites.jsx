import Pagination from "../Pagination/Pagination"
import s from './Favourites.module.css'
import FavCard from './FavCard/FavCard'
import { useEffect, useState } from "react"
import Preloader from "../common/Preloader/Preloader"

const Favourites = (props) => {
    let [isNoChar, setIsNoChar] = useState(props.isNoChar)

    useEffect(()=> {
        setIsNoChar(props.isNoChar)
    },[props.isNoChar])
    
    return (
        <div className={s.favourites} >
            <div className={s.header}>
                <div className={s.headerText}>Favourites</div>
                {!isNoChar && <Pagination getCharacters={props.getFavCharactersThunk} currentPage={props.currentPage} totalCharactersCount={props.totalCharactersCount}/>}
            </div>
            {props.isLoading && !props.isNoChar ? <div className={s.cards}> <Preloader/> </div> : <div className={s.cards}>
                {props.favCharacters !== undefined && props.favCharacters.map(card => <FavCard getFavCharactersThunk={props.getFavCharactersThunk} 
                name={card.name} id={card.url.replace(/\D/g, "")} key={card.url.replace(/\D/g, "")}  deleteFavCharacterThunk={props.deleteFavCharacterThunk} currentPage={props.currentPage}/>)}
            </div>}
            {isNoChar && <div className={s.nocharAlert} >You don't have favourite characters. You can add character to your favourite list on the characters page. </div>}
        </div>
    )
}

export default Favourites