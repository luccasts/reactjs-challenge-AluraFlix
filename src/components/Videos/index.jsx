/* eslint-disable react/prop-types */
import CardVideo from "../CardVideo";
import styles from "./Videos.module.css"
// eslint-disable-next-line react/prop-types
const Videos = ({videos}) => {
    return(  
        <div className={styles.videosLines}>
            {videos.map((v) => <CardVideo video={v} key={v.title}/> )}
        </div>
    )
}


export default Videos;