import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import IconsHolder from "./IconsHolder.jsx";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header =()=>{
    return(
        <div className={"header"}>
            <div className={"header__left"}>
                <img src={"https://i.pinimg.com/236x/32/db/d3/32dbd38843d4e565744c95bfdf47f56d.jpg"} alt={"profile"}/>
                <div className={"header__search"}>
                    <SearchIcon className={"search__icon"}/>
                    <input type={"search"} placeholder={"search"}/>

                </div>
                <div className={"mobile__top__navigation"}>
                    <ChatIcon/>
                </div>
            </div>
            <div className={"header__right"}>
                <IconsHolder Icon={HomeIcon} title={"Home"}/>
                <IconsHolder Icon={SupervisorAccountIcon} title={"My Network"}/>
                <IconsHolder Icon={BusinessCenterIcon} title={"Jobs"}/>
                <IconsHolder Icon={ChatIcon} title={"Messaging"}/>
                <IconsHolder Icon={NotificationsIcon} title={"Notifications"}/>
                <IconsHolder Icon={AccountCircleIcon} title={"me"}/>
                <div className={"header__right__menu"}>
                    <IconsHolder Icon={AppsIcon} title={"For Businesses"}/>
                </div>
            </div>
            <div className={"bottom__navigation"}>
                <IconsHolder Icon={HomeIcon} title={"Home"}/>
                <IconsHolder Icon={SupervisorAccountIcon} title={"My Network"}/>
                <IconsHolder Icon={BusinessCenterIcon} title={"Jobs"}/>
                <IconsHolder Icon={ChatIcon} title={"Messaging"}/>
                <IconsHolder Icon={NotificationsIcon} title={"Notifications"}/>
                <IconsHolder Icon={AccountCircleIcon} title={"me"}/>
                <div className={"header__right__menu"}>
                    <IconsHolder Icon={AppsIcon} title={"For Businesses"}/>
                </div>
            </div>
        </div>
    )
}
export default Header;