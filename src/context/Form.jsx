import { createContext, useState } from "react";

export const FormContext = createContext();
FormContext.displayName = 'Form';

// eslint-disable-next-line react/prop-types
const FormProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <FormContext.Provider value={{ title, setTitle,
            category, setCategory,
            image, setImage,
            videoLink, setVideoLink,
            description, setDescription

        }}>
            {children}
        </FormContext.Provider>
    )
}


export default FormProvider;