import "./styles/Profile.css"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupIcon from '@mui/icons-material/Group';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import {useEffect, useState} from "react";

const Profile =()=>{
    const [username,setUsername] =useState("")
    const [bannerImage,setBannerImage] =useState("")
    const [following,setFollowing] =useState("")
    const [followers,setFollowers] =useState("")
    const [profilePhoto,setProfilePhoto] =useState("")
    const [school,setSchool] =useState("")

    useEffect(()=>{
        fetchProfileInfo()
    },[])
    const fetchProfileInfo =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/auth/get-profile?userId=1")
        if(response.ok){
            const data =await response.json();
            setUsername(data.user.username)
            setBannerImage(data.user.bannerImage)
            setProfilePhoto(data.user.profileImage)
            setFollowers(data.user.following)
            setFollowing(data.user.followers)
            setSchool(data.user.school)
            console.log(username)

        }else{
            console.log("error fetching data")
        }


    })
    return(
        <div className={"full__profile__container"}>
            <div className={"profile__container"}>

                <div className={"profile__container__profile__details__section"}>
                    <div className={"profile__container__profile__details__section__banner"}>
                        <img alt={"banner image"}
                             src={bannerImage}
                             className={"banner__img"}/>
                        <div className={"profile__container__profile__details__section__banner__camera"}>
                            <CameraAltIcon/>
                        </div>
                    </div>
                    <div className={"profile__container__profile__details__section__image__container"}>
                        <div className={"profile__container__profile__details__section__image"}>
                            <div className={"okay__fixed__it"}>
                                <img alt={"profile image"}
                                     src={profilePhoto}/>
                                <AddIcon className={"icon"}/>
                            </div>

                            <div className={"profile__container__profile__details__section__icon"}>
                                <CreateIcon/>
                            </div>
                        </div>
                        <div/>

                    </div>
                    <div className={"profile__information__container"}>
                        <div className={"profile__container__profile__details__section__badge"}>
                            <h2>{username}</h2>
                            <div className={"get__verification"}>
                                <GppGoodIcon/>
                                <h4>Add verification badge</h4>
                            </div>

                        </div>
                        <div className={"profile__container__profile__details__section__location"}>
                            <div className={"followers__holder"}>
                                <p>Followers {followers ? (followers) : (0)}</p>
                                <p>Following {following ? (following) : (0)}</p>
                            </div>
                            <p>Nairobi,Nairobi County, kenya -<span
                                className={"profile__container__profile__details__section__location__contact"}>Contact info</span>
                            </p>
                        </div>
                        <div className={"profile__container__profile__details__section__buttons"}>
                            <button className={"profile__container__profile__details__section__buttons__open"}>Open to
                            </button>
                            <button className={"profile__container__profile__details__section__buttons__add"}>Add
                                Profile
                                section
                            </button>
                            <button
                                className={"profile__container__profile__details__section__buttons__enhance"}>Enhance
                                profile
                            </button>
                            <button
                                className={"profile__container__profile__details__section__buttons__resources"}>Resources
                            </button>
                        </div>
                    </div>

                </div>
                <div className={"profile__container__language__container"}>
                    <div className={"profile__container__language"}>
                        <div className={"profile__container__language__text"}>
                            <h3>Profile language</h3>
                            <p>English</p>
                        </div>

                        <div className={"profile__container__language__edit"}>
                            <CreateIcon/>
                        </div>

                    </div>
                    <div className={"profile__container__public__url"}>
                        <div className={"profile__container__public__ur__text"}>
                            <h3>Public Profile & URL</h3>
                            <p>{window.location.href}</p>
                        </div>

                        <div className={"profile__container__language__edit"}>
                            <CreateIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={"suggested__for__you"}>
                    <h2>Suggested for you</h2>
                    <div className={"private"}>
                        <VisibilityIcon/><p>private to you</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className={"analytics"}>
                    <h2>Analytics</h2>
                    <div className={"private"}>
                        <VisibilityIcon/><p>private to you</p>
                    </div>
                    <div className={"profile__views"}>
                        <div>
                            <GroupIcon/>
                        </div>
                        <div className={"profile__views__text"}>
                            <h3>0 profile views</h3>
                            <p>Update your profile to extract viewers</p>
                        </div>

                    </div>
                    <div className={"post__impressions"}>
                        <div>
                            <BarChartIcon/>
                        </div>
                        <div className={"profile__views__text"}>
                            <h3>0 post impressions</h3>
                            <p>Start a post to increase engagements</p>
                            <p>past 7 days</p>
                        </div>
                    </div>
                    <div className={"show__all__analytics"}>
                        <h3>Show all analytics </h3>
                        <ArrowRightAltIcon/>
                    </div>
                </div>
                <div className={"activity"}>
                    <h3>Activity</h3>
                    <p>{0} followers</p>
                    <h3>{0} posts</h3>
                    <p> posts shared appear here</p>
                    <div className={"show__all__analytics"}>
                        <h3>Show all activities <ArrowRightAltIcon/></h3>
                    </div>

                </div>
                <div className={"suggested__for__you"}>
                    <h3>Experience</h3>
                    <p>ShowCase your experience and get upto 2x as many profile views and connections</p>
                    <div className={"school"}></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={"suggested__for__you"}>
                    <h3>Experience</h3>
                    <p>ShowCase your experience and get upto 2x as many profile views and connections</p>
                    <div className={"school"}></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={"suggested__for__you"}>
                    <h3>Experience</h3>
                    <p>ShowCase your experience and get upto 2x as many profile views and connections</p>
                    <div className={"school"}></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={"suggested__for__you"}></div>
                <div className={"suggested__for__you"}></div>
            </div>
        </div>
    )
}
export default Profile;