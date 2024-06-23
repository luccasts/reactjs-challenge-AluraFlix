import { useVideosContext } from "../../hooks/useVideosContext";
import styles from "./CardVideo.module.css"
import CardImage from "./CardImage";
import CardButton from "./CardButton";

import CardModal from "./Modal";

import { useContext, useState } from "react";

import { FormContext } from "../../context/Form";



/* eslint-disable react/prop-types */
const CardVideo = ({ video }) => {
    const { deleteVideoData } = useVideosContext();

    const { setTitle, setCategory, setImage, setVideoLink, setDescription } = useContext(FormContext);

    const [selectedVideo, setSelectedVideo] = useState("");

    const DialogContext = (video) => {
        window.scrollTo(0, 0);
        setTitle(video.title)
        setCategory(video.category)
        setImage(video.image)
        setVideoLink(video.videoLink)
        setDescription(video.description)
        setSelectedVideo(true)
    }
    const DialogClose = () => {
        setSelectedVideo(null)
        setTitle("")
        setCategory("")
        setImage("")
        setVideoLink("")
        setDescription("")
    }



    const categoryReplace = video.category.replace(" ", "_")
    return (
        <div>
            {video
                ? <div className={styles.card}>
                        <CardImage videoLink={video.videoLink} category={categoryReplace} image={video.image} title={video.title} />

                    <div style={{ borderColor: `var(--${categoryReplace})`, boxShadow: `0px -4px 5px 3px var(--${categoryReplace}) inset` }} className={`${styles.divButton} Color_Button_Card${categoryReplace}`}>
                        <CardButton text="Deletar" onclick={() => deleteVideoData(video.id)}
                            src={'/images/trash.png'}
                            alt={'Ícone de deletar o card'}
                        />
                        <CardButton text="Editar" onclick={() => DialogContext(video)} src='/images/pen.png' alt='Icone de Editar o card' />
                    </div>
                    <CardModal DialogClose={() => DialogClose()} selectedVideo={selectedVideo} video={video} />
                </div>
                :
                ""
            }
        </div>

    )
}
export default CardVideo;