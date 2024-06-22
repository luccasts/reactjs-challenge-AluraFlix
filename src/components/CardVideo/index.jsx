import { useContext, useState } from "react";
import { useVideosContext } from "../../hooks/useVideosContext";
import { FormContext } from "../../context/Form";
import styles from "./CardVideo.module.css"
import Form from "../Form";
import CardImage from "./CardImage";
import CardButton from "./CardButton";


/* eslint-disable react/prop-types */
const CardVideo = ({ video }) => {
    const { deleteVideoData } = useVideosContext();
    const [selectedVideo, setSelectedVideo] = useState(null)
    const { setTitle, setCategory, setImage, setVideoLink, setDescription } = useContext(FormContext);


    const setFormDialog = (video) => {
        setSelectedVideo(true)
        setTitle(video.title)
        setCategory(video.category)
        setImage(video.image)
        setVideoLink(video.videoLink)
        setDescription(video.description)
    }
    const setFormDialogClose = () => {

        setTitle("")
        setCategory("")
        setImage("")
        setVideoLink("")
        setDescription("")
        setSelectedVideo(null)

    }
    const categoryReplace = video.category.replace(" ", "_")
    return (
        <div>
            {video
                ? <div className={styles.card}>
                    <CardImage category={categoryReplace} image={video.image} title={video.title} />
                    <div style={{ borderColor: `var(--${categoryReplace})`, boxShadow: `0px -4px 5px 3px var(--${categoryReplace}) inset` }} className={`${styles.divButton} Color_Button_Card${categoryReplace}`}>
                        <CardButton text="Deletar" onclick={() => deleteVideoData(video.id)}
                            src={'/images/trash.png'}
                            alt={'Ícone de deletar o card'}
                        />
                        <CardButton text="Editar" onclick={() => setFormDialog(video)} src='/images/pen.png' alt='Icone de Editar o card' />
                    </div>
                    <dialog className={styles.dialog} 
                    open={!!selectedVideo} 
                    onClose={() => setFormDialogClose()}>
                        <h1>EDITAR CARD</h1>
                        <Form method="dialog" video={video} id={video.id} />
                    </dialog>
                </div>
                :
                ""
            }
        </div>

    )
}
export default CardVideo;