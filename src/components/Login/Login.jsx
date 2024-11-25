import { useState } from "react";
import login from '../../assets/login.jpeg'
import '../../style/Login.css'
import { Link } from "react-router-dom";
import useLogin from '../../utils/CustomHook/useLogin';
import InputField from '../common/InputField'; 

function Login() {
  const [passwordToggle, setPasswordToggle] = useState(false)
  const { loginData, changeHandler, submitHandler } = useLogin();

  return (
    <div className='loginContainer'>

      <div className="loginLeftSection">
        <div className="loginFormWrapper">
          <h5>Get Started</h5>
          <h2>Login to Your Account</h2>

        <form onSubmit={submitHandler} className="loginFormContainer">
          <InputField 
            label="Email" 
            type="email" 
            name="email" 
            id="email" 
            onChange={changeHandler} 
            value={loginData.email} 
            required 
          />
          <InputField 
            label="Password" 
            type={passwordToggle ? "text" : "password"} 
            name="password" 
            id="password" 
            onChange={changeHandler} 
            value={loginData.password} 
            passwordToggle={passwordToggle}
            setPasswordToggle={setPasswordToggle}
            required 
          />
          <button type="submit" className="submitButton">Login</button>

          <div className="loginOptions">
            <p>Don&apos;t have an account? <Link to="/signup">Sign Up</Link></p>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
          </div>
        </form>
        </div>
      </div>
      <div className="loginRightSection">
        <img src={login} alt="login" />
      </div>
    </div>
  )
}

export default Login