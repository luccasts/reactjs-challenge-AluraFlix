import ButtonCategory from "../ButtonCategory";
import styles from "./Banner.module.css"
// eslint-disable-next-line react/prop-types
const Banner = ({ src }) => {
    return (

        
            <div className={styles.banner} style={{ backgroundImage: `url(${src})` }}>

                <div className={`${styles.container} ${styles.backgroundColor}`}>
                    <div className={styles.imagem}>
                        <img src={src} alt="imagem" />
                    </div>
                    <div className={styles.text}>
                        <ButtonCategory size="sm" category="Front_End">
                            <h2>Front End</h2>
                        </ButtonCategory>

                        <div>
                            <h3>SEO com React / Titulo</h3>
                            <p>
                            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner;