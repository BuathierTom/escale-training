import Img from '../../public/Img/about/CircleImage.jpg';
import AboutImg from '../../public/Img/about/CircleAboutImage.jpg';


function About( ) {
    return (
        <div className="about">

            <div className='about__circle-container'>

                <div className="about__circle">
                    <p className="about__content-title">Menu Escale</p>
                    <div>
                    <p className='about__menu'>Entrée + plat ou plat + dessert </p>
                    <p className='about__price'>27 €</p>
                    </div>

                    <div>
                    <p className='about__menu'>Entrée + plat + dessert</p>
                    <p className='about__price'>35 €</p>
                    </div>
                 
                </div>

                <div className="about__circle-img">
                    <img className='circleImg' src={Img} alt="CircleImage" />
                </div>

            </div>


            <article className="about__article">
            <h2 className='about__title'> A propos du restaurant </h2>

                <img className='about__circleImg circleImg' src={AboutImg} alt="CircleAboutImage" />
                    <p className='about__text'> L&apos;Escale vous accueille 7j/7 juste en face de Nausicaa, à Boulogne-sur-mer. Nos spécialités locales, avec de bons produits frais bien cuisinés pour vous sauront vous séduire. Notre cadre chaleureux conviendra aussi bien aux familles, qu&apos;aux repas d&apos;affaires ou pour un dîner en tête à tête. Une charmante terrasse abritée du vent pourra vous accueillir lorsque la météo le permet ! </p>

                <button className='button'>
                    Accéder à la carte
                </button>
            </article>



        </div>          

    )
}

export default About