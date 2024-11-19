
import "./AddToFeed.css"
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const AddToFeed = ({username, image, title, info}) => {

    return (
        <div className={"personal__information"}>
            <img alt={"users__to__add"} src={image}/>
            <div className={"user__info"}>
                <h3>{username}</h3>
                <p>{title}</p>
                <p>{info}</p>
                <button className={"follow__button"}><AddIcon/> Follow</button>
            </div>


        </div>
    )
}

export default AddToFeed;

