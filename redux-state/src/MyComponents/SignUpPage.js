import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import './SignUpPage.css'
import { registerUser } from '../Redux/Actions/authActions';

function SignUpPage() {

    const [signupEmail, setSignupEmail] = useState("");
    const [signupfullName, setSignupFullName] = useState("")
    const [signupuserName, setSignupUserName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    const [errors, setErrors] = useState({})

    const history = useHistory(); 
    const dispatch = useDispatch(); 

    const Submit = e => {
        e.preventDefault()

        const newUser = {
            name: signupfullName,
            email: signupEmail,
            username: signupuserName,
            password: signupPassword
        };
        console.log(newUser);

        registerUser(newUser,history,dispatch)
        
    }
    const myState = useSelector((state) => (state.errors));

    useEffect(() => {
        if (myState) {
            setErrors(myState);
        }
    }, [myState])

    return (
        <>
            <div className="container">
                <main className="SignupMain">
                    <div className="signupinfo">
                        <h1>Instagram</h1>
                        <p className="useinsta">Sign up to see photos and videos from your friends</p>
                        <form onSubmit={Submit}>
                            <input type="email" name="email" id="email" onChange = {(e) => {
                                    if (e.target.value.length !== 0 && signupPassword.length !== 0 && signupfullName.length !==0 && signupuserName.length !==0) {
                                        document.getElementById('signupBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('signupBtn').disabled = true;
                                    }
                                    setSignupEmail(e.target.value)
                                }}  placeholder="Email" />
                            <span id="emailInvalid" className="errors">{errors.email}</span>
                            <input type="text" name="fullName" id="fullName" onChange = {(e) => {
                                    if (e.target.value.length !== 0 && signupPassword.length !== 0 && signupEmail.length !==0 && signupuserName.length !==0) {
                                        document.getElementById('signupBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('signupBtn').disabled = true;
                                    }
                                    setSignupFullName(e.target.value)
                                }} placeholder="Full Name" />
                            <input type="text" name="username" id="username" onChange = {(e) => {
                                    if (e.target.value.length !== 0 && signupPassword.length !== 0 && signupfullName.length !==0 && signupEmail.length !==0) {
                                        document.getElementById('signupBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('signupBtn').disabled = true;
                                    }
                                    setSignupUserName(e.target.value)
                                }} placeholder="Username" />
                            <input type="password" name="password" id="password" onChange = {(e) => {
                                    if (e.target.value.length !== 0 && signupEmail.length !== 0 && signupfullName.length !==0 && signupuserName.length !==0) {
                                        document.getElementById('signupBtn').disabled = false;
                                    }
                                    else{
                                        document.getElementById('signupBtn').disabled = true;
                                    }
                                    setSignupPassword(e.target.value)
                                }} placeholder="Password" />
                            <span id="passwordInvalid" className="errors">{errors.password}</span>
                            <button type="submit" id="signupBtn" disabled>Sign Up</button>
                        <p className="terms">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                        </form>
                    </div>
                    <div className="loginRecom">
                        <p>Have an account? <Link to="/" style={{textDecoration: "none",color:"blue", fontWeight:"500"}}>Log in</Link></p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default SignUpPage;
