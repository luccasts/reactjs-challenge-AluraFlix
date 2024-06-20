import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home'
import NewVideo from "./pages/NewVideo";

import BasePage from "./components/BasePage";

function AppRoutes() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />}></Route>
            <Route path="novo-video" element={<NewVideo />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes;
