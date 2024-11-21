import "./styles/Footer.css"
const Footer =()=>{
    return(
        <div className={"footer"}>
            <div className={"one"}>
                <p>About</p>
                <p>Accessibility</p>
                <p>Help center</p>
                <p>Privacy &Terms</p>
                <p>Ad choices</p>
            </div>
            <div>
                <p>Advertising</p>
                <p>Business Services</p>
                <p>Get The LinkedIn app</p>
                <p>More</p>
                <p>LikedIn Corporation &copy;</p>
                <p>{new Date().getFullYear()}</p>
            </div>

        </div>
    )
}
export default Footer