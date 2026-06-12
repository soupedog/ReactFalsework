import {NavLink, type NavLinkRenderProps} from "react-router-dom";

const navLinkStyle = ({isActive}: NavLinkRenderProps) => ({
    margin: "0 2rem",
    textDecoration: "none",
    color: isActive ? "tomato" : "black",
    fontWeight: isActive ? "bold" : "normal"
});

export default function AppNavBar() {
    return (
        <nav>
            <NavLink to={"/"} style={navLinkStyle}>主页</NavLink>
            <NavLink to={"/musicPlayer"} style={navLinkStyle}>音乐播放器</NavLink>
            <NavLink to={"/login"} style={navLinkStyle}>登录页</NavLink>
        </nav>
    );
}
