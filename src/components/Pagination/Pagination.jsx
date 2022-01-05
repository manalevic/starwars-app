import { useEffect, useState } from 'react'
import s from './Pagination.module.css'

const Pagination = ({ currentPage, getCharacters, totalCharactersCount }) => {
    let [current, setCurrent] = useState(currentPage)
    let totalUsersCount = totalCharactersCount 
    let cardsOnPage = 10
    let total = Math.ceil(totalUsersCount / cardsOnPage)
    
    const onPageChanged = (e) => {
        let page = +e.target.innerHTML
        setCurrent(page)
        getCharacters(page)
    }

    const center = [current - 2, current - 1, current, current + 1, current + 2],
        filteredCenter = center.filter((p) => p > 0 && p < total + 1),
        addTwoRight = filteredCenter[0] === current && total > 4,
        addTwoLeft = filteredCenter[filteredCenter.length - 1] === current && total > 4,
        addOneRight = (filteredCenter[1] === current && total > 4),
        addOneLeft = (filteredCenter[filteredCenter.length - 2] === current && total > 4) || (filteredCenter[filteredCenter.length - 1] === current && total === 4);
    if (addTwoRight) filteredCenter.push(current + 3, current + 4)
    if (addOneRight) filteredCenter.push(current + 3)
    if (addTwoLeft) filteredCenter.unshift(current - 4, current - 3)
    if (addOneLeft) filteredCenter.unshift(current - 3)
    
    const onLeftArrow = () => {
        setCurrent(current - 1)
        getCharacters(current - 1)
    }

    const onRightArrow = () => {
        setCurrent(current + 1)
        getCharacters(current + 1)
    }

    useEffect(()=> {
        setCurrent(currentPage)
    },[currentPage])

    return (
        <ul className={s.pagination}>
            {current !== 1 && <li className={s.arrowLeft} onClick={onLeftArrow}>{'<'}</li>}
            {filteredCenter.map((p) => p === current ? <li onClick={onPageChanged} className={s.active} key={p}>{p}</li> : <li onClick={onPageChanged} key={p}>{p}</li>)}
            {current !== total && <li className={s.arrowRight} onClick={onRightArrow}>{'>'}</li>}
        </ul>
    )
}

export default Pagination