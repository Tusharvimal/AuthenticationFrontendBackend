import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { loginUser } from '../Redux/Actions/authActions'
import {useSelector,useDispatch} from 'react-redux';
import './LoginPage.css'

function LoginPage() {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [errors, setErrors] = useState({})
    
    const dispatch = useDispatch()
    
    const Submit = e => {
        e.preventDefault()
        
        const newUser = {
            email: loginEmail,
            password: loginPassword
        };
        
        loginUser(newUser,dispatch)
        
    }
    
    const myErrors = useSelector((state) => state.errors);
    const myAuth = useSelector((state) => state.auth);

    const history = useHistory();

    useEffect(() => {
        if (myErrors) {
            setErrors(myErrors);
        }
    }, [myErrors])

    useEffect(() => {
        if(myAuth.isAuthenticated){
            history.push('/homepage')
        }
    }, [myAuth])
    
    return (
        <>
            <div className="container">
                <main className="LoginName">
                    <div className="image-container">
                        <img className="phonePic" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" alt="" />
                        <div className="pics-container">
                            <img className="oneByOne" src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" alt="" />
                        </div>
                    </div>
                    <div className="login">
                        <div className="info">
                            <h1>Instagram</h1>
                            <form onSubmit={Submit}>

                                <input type="email" name="email" onChange = {(e) => {
                                    if (e.target.value.length !== 0  && loginPassword.length !== 0) {
                                        document.getElementById('loginBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('loginBtn').disabled = true;
                                    }
                                    setLoginEmail(e.target.value)
                                }} placeholder="Email" />
                                <span id="emailInvalid" className="errors">{errors.emailnotfound}</span>
                                <input type="password" name="password" onChange = {(e) => {
                                    if (e.target.value.length !== 0 && loginEmail.length !== 0) {
                                        document.getElementById('loginBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('loginBtn').disabled = true;
                                    }
                                    setLoginPassword(e.target.value)
                                }} id="password" placeholder="Password" />
                                <span className="errors">{errors.passwordincorrect}</span>
                                <button type="submit" id="loginBtn" disabled>Log In</button>
                            </form>
                                {/* {document.getElementById('loginBtn').disabled = false} */}
                        </div>
                        <div className="signupRecom">
                            <p>Don't have an account? <Link to="/signup" style={{textDecoration: "none",color:"blue", fontWeight:"500"}}>Sign Up</Link></p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LoginPage
