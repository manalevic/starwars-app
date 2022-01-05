import s from './Card.module.css'
import likeIco from '../../../assets/img/svg/like-ico.svg'
import dislikeIco from '../../../assets/img/svg/like-ico-clicked.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    let [isFav, setIsFav] = useState(localStorage.getItem(props.id) === '+')

    const onToggleLike = (e) => {
        if (isFav) {
            props.toggleLikeThunk(true, props.id)
            setIsFav(false)
            e.target.setAttribute('src', `${likeIco}`)
        } else {
            props.toggleLikeThunk(false, props.id)
            setIsFav(true)
            e.target.setAttribute('src', `${dislikeIco}`)
        }
    }

    return (
        <div className={s.card}>
            <div className={s.character}>
                <NavLink to={`characters/${props.id}`}>
                    <img className={s.image} src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
                        alt={`${props.name}`}></img>
                </NavLink>
                <div className={s.info}>
                    <NavLink to={`characters/${props.id}`} className={s.name}>{props.name}</NavLink>
                    <img src={isFav ? dislikeIco : likeIco} className={s.likeIco} alt="" onClick={onToggleLike}></img>
                </div>
            </div>
        </div>
    )
}

export default Card