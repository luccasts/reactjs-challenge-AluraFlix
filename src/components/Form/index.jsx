/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useVideosContext } from "../../hooks/useVideosContext";
import { FormContext } from "../../context/Form";

// eslint-disable-next-line react/prop-types
const Form = ({ method, video, id }) => {

    const { postVideoData, putVideoData } = useVideosContext();
    const { title, setTitle, category, setCategory, image, setImage, videoLink, setVideoLink, description, setDescription } = useContext(FormContext); 
    // const [title, setTitle] = useState("")
    // const [category, setCategory] = useState("")
    // const [image, setImage] = useState("")
    // const [videoLink, setVideoLink] = useState("")
    // const [description, setDescription] = useState("")
    
    const FormDialog = (video) => {
        setTitle(video.title)
        setCategory(video.category)
        setImage(video.image)
        setVideoLink(video.videoLink)
        setDescription(video.description)
    }

    
    const clearForm = (event) => {
        event.preventDefault();
        setTitle("")
        setCategory("")
        setImage("")
        setVideoLink("")
        setDescription("")
    }
    const toSaveForm = (event) => {
        event.preventDefault();
        {method === "post" 
            ?
            postVideoData({
                title,
                category,
                image,
                videoLink,
                description,
            })
            :
            putVideoData({
                title,
                category,
                image,
                videoLink,
                description,
            }, id) 
        }
    }

    return (
        <form method={method}>
            {method === "post" ? "" : <button>Fechar</button>}
            <input value={title} placeholder="Informe o título" onChange={value => setTitle(value.target.value)} />
            <select value={category} placeholder="Informe a categoria" onChange={value => setCategory(value.target.value)} name="" id="">
                <option></option>
                <option>Front End</option>
                <option>Back End</option>
                <option>Mobile</option>
            </select>
            <input value={image} placeholder="Informe a Imagem" onChange={value => setImage(value.target.value)} />
            <input value={videoLink} placeholder="Informe o Vídeo" onChange={value => setVideoLink(value.target.value)} />
            <textarea value={description} placeholder="Informe a Descrição" onChange={value => setDescription(value.target.value)}>
            </textarea>
            <button onClick={toSaveForm}>Guardar</button>
            <button onClick={clearForm}>Limpar</button>
        </form>
    )
}

export default Form;