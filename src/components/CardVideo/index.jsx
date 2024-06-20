import { useState } from "react";
import { useVideosContext } from "../../hooks/useVideosContext";
import Form from "../Form";

/* eslint-disable react/prop-types */
const CardVideo = ({ video }) => {
    const { deleteVideoData} = useVideosContext();
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    return (
        <div>
            {video 
            ? <div>
                <img src={video.image} alt={video.title} />
                <button onClick={() => deleteVideoData(video.id)}>Deletar</button>
                <button onClick={() => setSelectedVideo(true)}>Editar</button>
                <dialog open={!!selectedVideo} onClose={() => setSelectedVideo(null)} >
                    AAA
                    <Form method="dialog" video={video}  id={video.id} />
                </dialog>
            </div> : "não existe"}
        </div>

    )
}
export default CardVideo;