import "./Posts.css"

import PublicIcon from '@mui/icons-material/Public';
import {useEffect, useState} from "react";
const Posts =()=>{
    const [posts,setPosts] =useState([])
    useEffect(()=>{
        fetchPosts()
    },[])
    const fetchPosts =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/posts/get/all")
        if(response.ok){
            const data = await response.json()
            console.log(data)
            setPosts(data.postsList)
        }
    })
    return(
        <div className={"posts__section"}>
            {posts.map((post)=>{
                let {id,content,postTo,image,createdOn,header} =post
                if(!header){
                    header ="https://i.pinimg.com/236x/67/92/3e/67923e158f13c5cd30a90479a50642f7.jpg"
                }
                return (
                    <div className={"posts__section__all_divs"}>
                        <div className={"posts__section__profile__info"}>
                            <img src={header} alt={"image"}/>
                            <div className={"posts__section__profile__info__details"}>
                                <h4>{"name"}<span
                                    className={"posts__section__profile__info__details__span"}> .3rd+</span></h4>
                                <p>{"bio"}</p>
                                <p className={"posts__section__profile__info__details__p"}>{createdOn} .<span><PublicIcon/></span>
                                </p>
                                <div className={"posts__section__profile__info__follow"}>
                                    <p>{"+ Follow"}</p>
                                </div>
                            </div>

                        </div>
                        <div className={"posts__section__actual__content"}>
                            <div className={"image__container"}>
                                {image&&<img src={image}/>}
                            </div>
                            <p>{content}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Posts;