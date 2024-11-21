import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import "./styles/sidebar.css"

const Sidebar =()=>{
    const name ="john"
    return(
        <div className={"left__sidebar"}>
            <div className={"top__left"}>
                <div className={"image__container"}>
                    <img src={"https://i.pinimg.com/236x/6b/b1/62/6bb162ca5bbeed977f6fe095eb96978e.jpg"}
                         alt={"profile"} className={"banner__img"}/>
                    <img src={"https://i.pinimg.com/236x/39/91/3a/39913a3e8d5738d72af9e943daf27a23.jpg"}
                         alt={"profile"} className={"profile__img"}/>

                </div>
                <div className={"sidebar__text"}>
                    <h3>Welcome, {name}!</h3>
                    <p>Add a photo</p>
                </div>
                <div className={"connections"}>
                    <div>
                    <h3>Connections</h3>
                        <h3>connect with more people now</h3>
                    </div>
                    <div>
                        <PersonAddAltIcon/>
                    </div>
                </div>
                <div className={"saved__items"}>
                    <BookmarkIcon/>
                    <p>Saved Items</p>
                </div>
            </div>
            <div className={"bottom__left"}>
                <p>Groups</p>
                <div className={"bottom__left__events"}>
                    <p>Events</p>
                    <AddIcon/>
                </div>
                <p>Followed Hashtags</p>
                <h3>Discover more</h3>
            </div>
        </div>
    )
}
export default Sidebar;