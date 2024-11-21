import SearchIcon from '@mui/icons-material/Search';
import "./styles/Header.css"
import IconsHolder from "./IconsHolder.jsx";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, Route, useNavigate} from "react-router-dom";


const Header =()=>{
    const navigate =useNavigate()
    return(
        <div className={"header"}>
            <div className={"header__left"}>
                <Link to={"/"}><img src={"https://i.pinimg.com/236x/32/db/d3/32dbd38843d4e565744c95bfdf47f56d.jpg"} alt={"profile"}/></Link>
                <div className={"header__search"}>
                    <SearchIcon className={"search__icon"}/>
                    <input type={"search"} placeholder={"search"}/>

                </div>
                <div className={"mobile__top__navigation"}>
                    <Link to={"/messaging"}><IconsHolder Icon={ChatIcon} title={"Messaging"}/></Link>
                </div>
            </div>
            <div className={"header__right"}>
                <Link to={"/home"} ><IconsHolder Icon={HomeIcon} title={"Home"}/></Link>
                <Link to={"/myNetwork"}> <IconsHolder Icon={SupervisorAccountIcon} title={"My Network"}/> </Link>
                <Link to={"/jobs"}><IconsHolder Icon={BusinessCenterIcon} title={"Jobs"}/></Link>
                <Link to={"/messaging"}><IconsHolder Icon={ChatIcon} title={"Messaging"}/></Link>
                <Link to={"/notifications"}><IconsHolder Icon={NotificationsIcon} title={"Notifications"}/></Link>
                <Link to={"/profile"}><IconsHolder Icon={AccountCircleIcon} title={"me"}/></Link>

                <div className={"header__right__menu"}>
                    <IconsHolder Icon={AppsIcon} title={"For Businesses"}/>
                </div>
            </div>
            <div className={"bottom__navigation"}>
                <Link to={"/home"}><IconsHolder Icon={HomeIcon} title={"Home"}/></Link>
                <Link to={"/myNetwork"}> <IconsHolder Icon={SupervisorAccountIcon} title={"My Network"}/> </Link>
                <Link to={"/jobs"}><IconsHolder Icon={BusinessCenterIcon} title={"Jobs"}/></Link>
                <Link to={"/messaging"}><IconsHolder Icon={ChatIcon} title={"Messaging"}/></Link>
                <Link to={"/notifications"}><IconsHolder Icon={NotificationsIcon} title={"Notifications"}/></Link>
                <Link to={"/profile"}><IconsHolder Icon={AccountCircleIcon} title={"me"}/></Link>
                <div className={"header__right__menu"}>
                    <IconsHolder Icon={AppsIcon} title={"For Businesses"}/>
                </div>
            </div>
        </div>
    )
}
export default Header;