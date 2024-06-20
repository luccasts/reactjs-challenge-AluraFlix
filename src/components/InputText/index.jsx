const InputText = ({placeHolder, valueProps, onChangeProps}) => {
    
    return (
        <input placeholder={placeHolder} value={valueProps} onChange={ ()=> onChangeProps()}/>
    )
}
export default InputText;