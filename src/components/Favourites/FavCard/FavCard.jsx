import s from './FavCard.module.css'
import crossIco from '../../../assets/img/svg/cross-ico.svg'
import { NavLink } from 'react-router-dom'

const FavCard = (props) => {
    const onCross = () => {

        props.deleteFavCharacterThunk(props.id, props.currentPage)
    }
    return (
        <div className={s.card}>

            <div className={s.character}>
                <NavLink to={`favourites/${props.id}`}>
                    <img className={s.image} src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
                        alt={`${props.name}`}></img>
                </NavLink>
                <div className={s.info}>
                    <NavLink className={s.name} to={`favourites/${props.id}`}>
                        {props.name}
                    </NavLink >
                    <img src={crossIco} className={s.likeIco} alt="" onClick={onCross}></img>
                </div>
            </div>
        </div>
    )
}

export default FavCard