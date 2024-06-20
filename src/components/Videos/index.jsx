/* eslint-disable react/prop-types */
import CardVideo from "../CardVideo";

// eslint-disable-next-line react/prop-types
const Videos = ({videos}) => {
    return(  
        <section>
            {videos.map((v) => <CardVideo video={v} key={v.title}/> )}
        </section>  
    )
}


export default Videos;