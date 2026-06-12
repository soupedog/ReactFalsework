import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MusicPlayer from './pages/MusicPlayer.tsx'
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import AppLayout from "./pages/component/AppLayout.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AppLayout key={"layout"}/>}>
                    <Route index path={"/"} element={<Home key={"home"} text={""}/>}/>
                    <Route path={"/login"} element={<Login key={"login"}/>}/>
                    {/*从上到下匹配，上方全未匹配命中则说明该跳转到 musicPlayer 页面*/}
                    <Route path={"*"} element={<MusicPlayer key={"musicPlayer"}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
