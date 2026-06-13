import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MusicPlayer from './pages/MusicPlayer.tsx'
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import AppLayout from "./pages/component/AppLayout.tsx";
import Goods from "./pages/Goods.tsx";
import GoodsDetail from "./pages/GoodsDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AppLayout key={"layout"}/>}>
                    <Route index path={"/"} element={<Home key={"home"} text={""}/>}/>
                    <Route path={"/login"} element={<Login key={"login"}/>}/>
                    <Route path={"/goods"} element={<Goods key={"goods"}/>}/>
                    <Route path={"/goods/detail/:gid"} element={<GoodsDetail key={"detail"}/>}/>
                    <Route path={"/musicPlayer"} element={<MusicPlayer key={"musicPlayer"}/>}/>
                    {/*从上到下匹配，上方全未匹配命中则说明该跳转到 musicPlayer 页面*/}
                    <Route path={"*"} element={<NotFound key={"notFound"} delayTime={3000}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
