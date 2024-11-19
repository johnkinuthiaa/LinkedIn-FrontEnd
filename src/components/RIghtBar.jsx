import "./RightBar.css"
import InfoIcon from '@mui/icons-material/Info';
import AddToFeed from "./AddToFeed.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const RightBar =()=>{
    const username ="john";
    const title ="software engineer ehrfdbvdjhgurh "
    const image ="https://i.pinimg.com/236x/6e/c4/0f/6ec40fda89689b7cf397e928fbc00077.jpg"
    const info="a fullstack junior dev"
    return(
        <div className={"right__bar"}>
            <div className={"right__bar__mini_heading"}>
                <h3>Add to your feed</h3>
                <InfoIcon/>
            </div>
            <div className={"users__to__add"}>
                <AddToFeed username={username} title={title} image={image} info={info}/>
                <AddToFeed username={username} title={title} image={image} info={info}/>
                <AddToFeed username={username} title={title} image={image} info={info}/>
                <div className={"all__recommendations"}>
                    <h4>View all recommendations</h4>
                    <ArrowRightAltIcon/>

                </div>

            </div>


        </div>
    )
}
export default RightBar;