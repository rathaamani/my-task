import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';



export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        history.push('/profile');


    }
    return (
        
        <div className="login-form">
            <label> Login to your account </label><br />
            <form>
                <div className="form-group">
                    <label>Email ID</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter the Email" id="email" name="email" required />
                    <br />
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter the Password" id="password" name="password" required />
                    <br />
                </div>
                <button onClick={handleSubmit} type="submit">Log In</button> 
                <br/>
                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </form>      
        </div>
        )

}

export default Login;