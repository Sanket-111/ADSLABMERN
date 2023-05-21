import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

function Register() {

    const navigate = useNavigate()
    const [user,setUser]= useState(
        {
            name:"",
            email:"",
            password:"",
            re_pass:"",
            role:"",
        }
    );

    // console.log(user)

    const handleChange = (e)=>{

        if(e.target.name===""){
            setUser(prev=>({...prev,["role"]:e.target.value}))
        }
        else{
            setUser(prev=>({...prev,[e.target.name]:e.target.value}))
        }
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/createUser",user);
            navigate("/")
        }
        catch(err){
            console.log(err);
        }
    }

  return (
      <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" onChange={handleChange} name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" onChange={handleChange} name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" onChange={handleChange} name="password" id="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" onChange={handleChange} name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div name="role" className="form-group" onClick={handleChange}>
                                <select>
                                    <option name="role" >Student</option>
                                    <option name="role" >Teacher</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" onClick={handleClick} name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                        <Link to="/" className="signup-image-link">I am already member</Link>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Register