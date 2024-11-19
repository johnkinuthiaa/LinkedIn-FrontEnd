import "./Body.css"
import Sidebar from "./Sidebar.jsx";
import BodySection from "./BodySection.jsx";
import RightBar from "./RIghtBar.jsx";

const Body =()=>{
    return(
        <div className={"body__container"}>
            <div className={"body_sidebar"}>
                <Sidebar/>
            </div>
            <div className={"body__main"}>
                <BodySection />
            </div>
            <div className={"body__right__sidebar"}>
                <RightBar />
            </div>

        </div>
    )
}
export default Body;