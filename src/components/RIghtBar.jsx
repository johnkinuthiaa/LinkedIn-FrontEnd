import "./styles/RightBar.css"
import InfoIcon from '@mui/icons-material/Info';
import AddToFeed from "./AddToFeed.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "./Footer.jsx";
import {useEffect, useState} from "react";

const RightBar =()=>{
    useEffect(()=>{
        fetchUsers()
    },[])
    const[usersList,setUsersList]=useState([])

    const fetchUsers =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/auth/all")
        if(response.ok){
            const data =await response.json()
            setUsersList(data.users)


        }else{
            alert("no data")
        }
    })

    return(
        <>
            <div className={"right__bar"}>
                <div className={"right__bar__mini_heading"}>
                    <h3>Add to your feed</h3>
                    <InfoIcon/>
                </div>
                <div className={"users__to__add"}>
                    <AddToFeed data={usersList}/>
                    <div className={"all__recommendations"}>
                        <h4>View all recommendations</h4>
                        <ArrowRightAltIcon/>

                    </div>

                </div>


            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
export default RightBar;