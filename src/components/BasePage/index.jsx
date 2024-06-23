import { Outlet } from "react-router-dom";
import VideosProvider from "../../context/Videos";
import Header from "../Header";
import FormProvider from "../../context/Form";
import Footer from "../Footer";
const BasePage = () => {
    return (
        <>
            <Header />
            <VideosProvider>
                <FormProvider>
                    <Outlet />
                </FormProvider>
            </VideosProvider>
            <Footer />
        </>
    )
}




export default BasePage;