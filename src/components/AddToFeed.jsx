
import "./AddToFeed.css"

import AlertTitle from '@mui/material/AlertTitle';

import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {Alert} from "@mui/material";

const AddToFeed = ({username, image, title, info}) => {
    const [follow,setFollow] =useState(false)


    return (
        <div className={"personal__information"}>
            <img alt={"users__to__add"} src={image}/>
            <div className={"user__info"}>
                <h3>{username}</h3>
                <p>{title}</p>
                <p>{info}</p>
                <div>
                    <button className={"follow__button"} onClick={()=>{
                        setFollow(!follow)
                    }}>
                        <AddIcon/>
                        {follow?"Followed":"Follow"}
                    </button>
                </div>

            </div>


        </div>
    )
}

export default AddToFeed;

