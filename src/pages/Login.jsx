import './styles/Login.css'
import { RemoveRedEye} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
const Login =()=>{
    const BASEURL ="http://localhost:8080/api/v1/auth"
    const savedName =JSON.parse(localStorage.getItem("connectedUser"))

    const [username,setUsername] =useState("")
    const [password,setPassword] =useState("")
    const [email,setEmail] =useState("")
    const navigate =useNavigate()
    const login =(async ()=>{
        const myHeaders =new Headers();
        myHeaders.append("Content-Type","application/json")
        const resonse =await fetch(`${BASEURL}/login`,{
            method:"POST",
            body:JSON.stringify({
                username:`${username}`,
                email:`${email}`,
                phoneNumber:"9345344",
                password:`${password}`
            }
            ),headers:myHeaders
        })
        if(resonse.ok){
            const data =await resonse.json()
            alert(data.message)
            localStorage.setItem("jwtToken",data.jwtToken)
            navigate("/home")
        }

    })

    return(
        <div className={"login__form"}>
            <h2>Welcome Back! {savedName? savedName.username:""}</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                login()
            }}>
                <label htmlFor={"username"}>Username:</label>
                <div>
                    <input type={"text"} id={"username"} placeholder={"username"} className={"username"} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <label htmlFor={"email"}>UserEmail:</label>
                <div>
                    <input type={"text"} id={"email"} placeholder={"email"} className={"username"}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <label htmlFor={"password"}>Password:</label>
                <div className={"password"}>
                    <input type={"password"} id={"password"} placeholder={"password"}
                           className={"password__input"} onChange={(e)=>setPassword(e.target.value)}/><RemoveRedEye className={"show__password"} />
                </div>
                <div className={"keep__logged"}>
                    <input type={"checkbox"}/>
                    <p>Keep me logged in </p>
                </div>
                <div className={"policies"}>
                    <p>By clicking Agree & join you agree to the Linkedin
                        <span className={"policies__agreement"}> User Agreement,Privacy Policy</span>
                        and
                        <span className={"policies__agreement"}> Cookie Policy</span>
                    </p>
                </div>

                <button className={"agree__and__continue__btn"} type={"submit"}>Login</button>

            </form>

            <div className={"to__login"}>
                <p>Don&#39;t have an account? <span><Link to={"/register"}
                                                          className={"login__link"}>Sign Up</Link></span></p>
            </div>
        </div>
    )
}
export default Login;