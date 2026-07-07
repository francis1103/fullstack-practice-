import NaviBar from "../../components/NaviBar";
import { useEffect } from "react";
function About(){
     useEffect(() => {
        console.log("useEffect called");
    }, []);
     return(
        

        <div>
            <NaviBar />
            TO SEE MORE ABOUT US
        </div>
     )
}
export default About;