
import './styles/Login.css'
import {Link, useNavigate} from "react-router-dom";
import { RemoveRedEye} from "@mui/icons-material";
import {useState} from "react";

const SignUp =()=>{
    const [username,setUsername] =useState("")
    const [password,setPassword] =useState("")
    const [email,setEmail] =useState("")
    const navigate =useNavigate()

    const BASE_URL ="http://localhost:8080/api/v1/auth"
    const createAccount =(async ()=>{
        const myHeaders = new Headers()
        myHeaders.append("Content-Type","application/json")
        const response =await fetch(`${BASE_URL}/register`, {
            method:"POST",
            body:JSON.stringify({
                username:`${username}`,
                email:`${email}`,
                password:`${password}`,
                role:"USER"
            }),headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            alert(`${data.message}`)
            localStorage.setItem("connectedUser",JSON.stringify(data.user))
            navigate("/")
        }

    })
    return(
        <div className={"login__form"}>
            <h2>Sign Up</h2>
            <h2>Make the most out of your professional life</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                createAccount()
            }}>
                <label htmlFor={"username"}>Username:</label>
                <div>
                    <input type={"text"} id={"username"} placeholder={"username"} className={"username"} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <label htmlFor={"email"}>UserEmail:</label>
                <div>
                    <input type={"text"} id={"email"} placeholder={"email"} className={"username"} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <label htmlFor={"password"}>Password:</label>
                <div className={"password"}>
                    <input type={"password"} id={"password"} placeholder={"password"} className={"password__input"} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className={"see__pass"}><RemoveRedEye className={"show__password"}/></button>
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

                <button className={"agree__and__continue__btn"} type={"submit"}>Agree & Continue</button>

            </form>
            <div className={"to__login"}>
            <p>Already on LinkedIn? <span><Link to={"/"} className={"login__link"}>Log in</Link></span></p>
            </div>

        </div>
    )
}
export default SignUp;