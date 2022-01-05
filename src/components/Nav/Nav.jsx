import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/characters" className={s.link}>Characters</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/favourites" className={s.link}>Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav