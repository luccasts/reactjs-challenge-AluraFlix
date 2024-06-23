/* eslint-disable react/prop-types */
import ButtonCategory from "../ButtonCategory";
import styles from "./Banner.module.css"

const Banner = ({videoLink, category, title, paragraph }) => {

    const categoryReplace = category.replace(" ", "_")
    return (
        <div className={styles.bannerContainer}>
           
            <div className={`${styles.container} ${styles.backgroundColor}`}>
                <div className={styles.imagem}>
                    <iframe style={{borderColor:`var(--${category})`}} className={`${styles.imagem} ${styles.iframe}`} width="560" height="315" src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
               
                <div className={styles.text}>
                    <ButtonCategory size="sm" category={categoryReplace}>
                        <h2>{category}</h2>
                    </ButtonCategory>

                    <div>
                        <h3>{title}</h3>
                        <p>
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
            <iframe  title={title}  className={styles.iframeBackground} src={videoLink} alt={title} ></iframe>
        </div>
    )
}

export default Banner;