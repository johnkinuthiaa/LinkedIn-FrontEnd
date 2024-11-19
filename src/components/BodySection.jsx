import "./BodySection.css"
import IconsHolder from "./IconsHolder.jsx";
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import Posts from "./Posts.jsx";
const BodySection =()=>{
    return(
        <div>
            <div className={"body__section"}>
                <div className={"body__section__input"}>
                    <img src={"https://i.pinimg.com/236x/67/92/3e/67923e158f13c5cd30a90479a50642f7.jpg"}
                         alt={"profile"}/>
                    <input type={"submit "} placeholder={"Start a post, try writing with ai"}
                           className={"body__section__input__bar"}/>
                </div>
                <div className={"body__section__media"}>
                    <IconsHolder title={"photo"} Icon={ImageIcon}/>
                    <IconsHolder title={"video"} Icon={SlideshowIcon}/>
                    <IconsHolder title={"Write article"} Icon={ArticleIcon}/>
                </div>

            </div>
            <div className={"posts"}>
                <IconsHolder title={"photo"} Icon={ImageIcon}/>
                <IconsHolder title={"video"} Icon={SlideshowIcon}/>
                <IconsHolder title={"Write article"} Icon={ArticleIcon}/>
            </div>

        </div>

    )
}
export default BodySection;