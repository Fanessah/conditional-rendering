import { useState } from "react";
function Hero() {
    const [user,setUser] = useState() //settting a state user but the line below shows its undefinied 

    console.log({user})
    const handleLogin = () => {
        setUser({firstName:'Fanessa', email:'fanessa@bocacode.com', admin: true})
    }
    
        const handleLogout = () => {
            setUser(undefined)
        }
    
    if(!user) { //!=not 
       
 return <button onClick={handleLogin}>Login</button>

}
return (
    <>
    <h1>Hello {user.firstName}!</h1>
    <button onClick={handleLogout}> Log Out</button>
    </>

)
}
export default Hero 