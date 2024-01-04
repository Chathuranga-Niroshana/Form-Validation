import { useState } from "react";
import "./style.css"

function Validate(){

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[comfirmPassword,setComfirmPassword]=useState("")

    const[errorUsername,setErrorUsername]=useState("")
    const[errorEmail,setErrorEmail]=useState("")
    const[errorPassword,setErrorPassword]=useState("")
    const[errorComfirmPassword,setErrorComfirmPassword]=useState("")

    const[userColor,setUserColor]=useState("")
    const[emailColor,setEmailColor]=useState("")
    const[passwordColor,setPasswordColor]=useState("")
    const[comfirmPasswordColor,setComfirmPasswordColor]=useState("")

    function validate(e){
        e.preventDefault()

        if(username.length>15){
            setErrorUsername("")
            setUserColor("green")
        }else{
            setErrorUsername("Username must be 15 lettrs long")
            setUserColor("red")
        }
        if(email.includes("@")){
            setErrorEmail("")
            setEmailColor("green")
        }else{
            setErrorEmail("email should be contain @gmail")
            setEmailColor("red")
        }
        if(password.length>6){
            setErrorPassword("")
            setPasswordColor("green")
        }
        else{
            setErrorPassword("Password should be 6 keys")
            setPasswordColor("red")
        }
        if(comfirmPassword==password && password !=""){
            setErrorComfirmPassword("")
            setComfirmPasswordColor("green")
        }else{
            setErrorComfirmPassword("Dosn't match with the password")
            setComfirmPasswordColor("red")
        }
    }

    return(
        <>
        <div className="card">
            <div className="card-image"></div>

            <form>
                <input type="text" 
                placeholder="Name" 
                style={{borderColor:userColor}} 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                <p className="error">{errorUsername}</p>

                <input type="email"
                placeholder="abc@email.com"
                style={{borderColor:emailColor}}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="error">{errorEmail}</p>

                <input type="password"
                style={{borderColor:passwordColor}}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="error">{errorPassword}</p>

                <input type="password"
                style={{borderColor:comfirmPasswordColor}}
                value={comfirmPassword}
                onChange={(e)=>setComfirmPassword(e.target.value)}
                />
                <p className="error">{errorComfirmPassword}</p>
                
                <button className="submit" onClick={validate}>Submit</button>
 
            </form>
        </div>
        </>
    )
}

export default Validate;