/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useVideosContext } from "../../hooks/useVideosContext";
import { FormContext } from "../../context/Form";
import InputText from "./InputText";
import Select from "./Select";
import styles from "./Form.module.css"
import TextArea from "./TextArea";
import ButtonForm from "../ButtonForm";

// eslint-disable-next-line react/prop-types
const Form = ({ method, id }) => {

    const { postVideoData, putVideoData } = useVideosContext();
    const { title, setTitle,
        category, setCategory,
        image, setImage,
        videoLink, setVideoLink,
        description, setDescription } = useContext(FormContext);




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
        console.log(event);
        event.preventDefault();
        {
            method === "post"
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
    // onSubmit={(e) => toSaveForm(e)}

    return (
        <form className={styles.form} method={method}>
            {method === "post" ? "" : <button>Fechar</button>}
            <InputText
                valueProps={title}
                placeHolder="Informe o título"
                onChangeProps={value => setTitle(value)}
                label="Título"
                requiredProps={true}
            />
            <Select
                requiredProps={true}
                valueProps={category}
                placeHolder={"Informe a categoria"}
                onChangeProps={value => setCategory(value)}
                label={"Categoria"} />

            <InputText
                valueProps={image}
                placeHolder="Informe a Imagem"
                onChangeProps={value => setImage(value)}
                label="Imagem"
                requiredProps={true}
            />
            <InputText
                valueProps={videoLink}
                placeHolder="Informe o Vídeo"
                onChangeProps={value => setVideoLink(value)}
                label="Vídeo" 
                requiredProps={true}
                />
            <TextArea
                requiredProps={true}
                valueProps={description}
                placeHolder={"Sobre o que é esse vídeo ?"}
                onChangeProps={value => setDescription(value)}
                label={"Descrição"} />
            <div className={styles.buttonForm}>
                <ButtonForm onclickProps={toSaveForm}>Guardar</ButtonForm>
                <ButtonForm onclickProps={clearForm}>Limpar</ButtonForm>
            </div>
        </form>
    )
}

export default Form;