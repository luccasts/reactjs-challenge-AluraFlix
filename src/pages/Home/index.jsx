import { useEffect } from "react";
import Container from "../../components/Container"
import Videos from "../../components/Videos";
import { useVideosContext } from "../../hooks/useVideosContext";
import Banner from "../../components/Banner";
import ButtonCategory from "../../components/ButtonCategory";
import styles from "./Home.module.css"


const Home = () => {
    const { categoryArray, videos, setVideos } = useVideosContext()
    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(r => r.json())
            .then(r => setVideos(r))
    }, [])

    useEffect(() => {
        console.log('atualizei')
    }, [videos])

    return (
        <>
            <Banner src="https://i.pinimg.com/736x/f9/09/83/f909834748015d9c0b7511d651490d99.jpg" />

            <Container>
                <div className={styles.containerFlex}>
                    {categoryArray.map((category) =>
                        <section className={styles.section} key={category.name}>
                            <ButtonCategory size="lg" category={category.name.replace(" ", "_")}> <h2>{category.name}</h2></ButtonCategory>
                            {videos &&
                                <Videos
                                    colorPrimary={category.colorPrimary}
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