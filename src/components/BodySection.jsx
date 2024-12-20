import "./styles/BodySection.css"
import IconsHolder from "./IconsHolder.jsx";
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import Posts from "./Posts.jsx";
import {useState} from "react";



const BodySection =()=>{
    const [postDetails,setPostDetails]=useState("")
    const BASEURL ="http://localhost:8080/api/v1/posts"

    const user =JSON.parse(localStorage.getItem("loggedInUser"))
    const userId =user.id

    const sendPostToDb =(async (content)=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        const response =await fetch(`${BASEURL}/create/post`,
            {method:"POST",
                body:JSON.stringify({
                        userId:`${userId}`,
                        content:`${content}`,
                        postTo:"EVERYONE"
                }),
                headers:myHeaders
            },

        )
        if(response.ok){
            const data =await response.json()
            alert(data.message)
            if(data.statusCode ===405){
                alert("cannot create an empty post")
            }
        }else{
            alert("we're having some issues with the server!please try again later")
        }
    })

    return(
        <div>
            <div className={"body__section"}>
                <div className={"body__section__input"}>

                    <img src={"https://i.pinimg.com/236x/67/92/3e/67923e158f13c5cd30a90479a50642f7.jpg"}
                         alt={"profile"}/>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                    }}>
                        <input type={"text"} placeholder={"Start a post, try writing with ai"}
                               className={"body__section__input__bar"} onChange={(e)=>{
                                   setPostDetails(e.target.value)
                        }}/>
                        <button className={"submit__button"} type={"submit"} onClick={()=>{
                            sendPostToDb(postDetails)

                        }}>post</button>

                    </form>

                </div>
                <div className={"body__section__media"}>
                    <IconsHolder title={"photo"} Icon={ImageIcon}/>
                    <IconsHolder title={"video"} Icon={SlideshowIcon}/>
                    <IconsHolder title={"Write article"} Icon={ArticleIcon}/>
                </div>

            </div>
            <div className={"posts"}>
                <Posts />
            </div>

        </div>

    )
}
export default BodySection;