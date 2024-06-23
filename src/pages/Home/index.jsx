import { useEffect } from "react";
import Container from "../../components/Container"
import Videos from "../../components/Videos";
import { useVideosContext } from "../../hooks/useVideosContext";
import Banner from "../../components/Banner";
import ButtonCategory from "../../components/ButtonCategory";
import styles from "./Home.module.css"


const Home = () => {
    const { categoryArray, videos, setVideos } = useVideosContext();
    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(r => r.json())
            .then(r => setVideos(r))
    }, [])


    return (
        <>
            <Banner 
            category="Front End"
            title="O que faz uma desenvolvedora front-end?"
            videoLink="https://www.youtube.com/embed/ZY3-MFxVdEw?si=hKz0QNSKPD6EvxWT"
            paragraph="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa nesse episódio! "
           />

            <Container>
                <div className={styles.containerFlex}>
                    {categoryArray.map((category) =>
                        <section className={styles.section} key={category.name}>
                            <ButtonCategory size="lg" category={category.name.replace(" ", "_")}> <h2>{category.name}</h2></ButtonCategory>
                            {videos &&
                                <Videos
                                    
                                    videos={videos.filter(video => video.category === category.name)}
                            />}
                        </section>
                    )}
                </div>
            </Container>
        </>
    )
}

export default Home;