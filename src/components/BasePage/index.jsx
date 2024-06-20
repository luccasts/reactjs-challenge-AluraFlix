import { Outlet } from "react-router-dom";
import VideosProvider from "../../context/Videos";
import Header from "../Header";
import FormProvider from "../../context/Form";
const BasePage = () => {
    return (
        <VideosProvider>
            <Header/>
            <FormProvider>
                <Outlet/>
            </FormProvider>
        </VideosProvider>
    )
}




export default BasePage;