import s from './Characters.module.css'
import Preloader from '../common/Preloader/Preloader'
import React from 'react'





class CardInfo extends React.Component {

    render() {
        let selectedCharacter = this.props.characters.filter(c => c.url.replace(/\D/g, "") === this.props.cardId)[0]
        return (
            <div className={s.characters} >
                <div className={s.infoHeader}>
                    {this.props.favCurrentPage ? <div className={s.headerText}>Favourites </div> : <div className={s.headerText}>Characters </div>}
                    {selectedCharacter !== undefined && <div className={s.headerText}>{`/ ${selectedCharacter.name}`} </div>}
                </div>
                {this.props.isLoading ? <div className={s.cards}> <Preloader /> </div> :
                    <div className={s.cardInfo}>

                        <img className={s.infoImage} src={`https://starwars-visualguide.com/assets/img/characters/${this.props.cardId}.jpg`}
                            alt={`${this.props.name}`}></img>

                        <div className={s.info}>
                            <p className={s.name}>{selectedCharacter !== undefined && selectedCharacter.name}</p>
                            <div className={s.desc}>
                                <p>{`Birth Year: ${selectedCharacter !== undefined && selectedCharacter.birth_year}`}</p>
                                <p>{`Height: ${selectedCharacter !== undefined && selectedCharacter.height}`}</p>
                                <p>{`Mass: ${selectedCharacter !== undefined && selectedCharacter.mass}`}</p>
                                <p>{`Gender: ${selectedCharacter !== undefined && selectedCharacter.gender}`}</p>
                                <p>{`Hair Color: ${selectedCharacter !== undefined && selectedCharacter.hair_color}`}</p>
                                <p>{`Skin Color: ${selectedCharacter !== undefined && selectedCharacter.skin_color}`}</p>
                                <p>{`Eye Color: ${selectedCharacter !== undefined && selectedCharacter.eye_color}`}</p>
                            </div>
                        </div>
                    </div>}
            </div>



        )
    }
}

export default CardInfo