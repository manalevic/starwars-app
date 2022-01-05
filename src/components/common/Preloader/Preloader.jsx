import preloaderIco from '../../../assets/img/svg/preloader.svg'

const Preloader = () => {
    return (
        <div style={{gridColumn: '3', margin: '200px auto'}}>
            <img src={preloaderIco} alt="" />
        </div>
    )
}

export default Preloader