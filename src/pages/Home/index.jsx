import { useEffect } from "react";
import Container from "../../components/Container"
import Videos from "../../components/Videos";
import { useVideosContext } from "../../hooks/useVideosContext";


const Home = () => {
    const { categoryArray, videos, setVideos } = useVideosContext()
    useEffect(() => {
        fetch('http://localhost:3000/videos')
        .then(r => r.json())
        .then(r => setVideos(r))
    }, [])
    return (
        <Container>
            {categoryArray.map((category) => 
                <section key={category.name}>
                    <h1>{category.name}</h1>
                    {videos &&
                    <Videos 
                        colorPrimary={category.colorPrimary} 
                        videos={videos.filter(video => video.category === category.name)}
                        />}
                </section>)}
        </Container>
    )
}

export default Home;