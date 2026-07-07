import { useNavigate } from "react-router-dom";
import "./NaviBar.css";

function NaviBar() {
    const naviagte=useNavigate();
    return (
        <div className="navbar">
            <h2 onClick={()=>naviagte("/home")}>Home</h2>
            <h2 onClick={()=>naviagte("/about")}>About</h2>
            <h2 onClick={()=>naviagte("/fee")}>Fee</h2>
        </div>
    );
}

export default NaviBar;